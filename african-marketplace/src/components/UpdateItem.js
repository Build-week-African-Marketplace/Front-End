import React, { useState, useEffect }from 'react';
import axios from 'axios';
import { Container, Header, Button, Form  } from 'semantic-ui-react'
import { axiosWithAuth } from '../utilites/axiosWithAuth';

const initialData = {
    productName: '',
    description: '',
    price: 0
  };

const UpdateItem = (props) => {
 

    const [item, setItem] = useState(initialData);


    const { match } = props;

    const idUsr = localStorage.getItem('userID');

    useEffect(() => {
        axios.get(`http://localhost:5000/api/movies/${match.params.id}`)

        axiosWithAuth()
        .get(`/products/${idUsr}/`)
        .then(res => {
            console.log(res);
            setItem(res.data);
        })
        .catch(err => console.log(err));

    }, [match.params.id])



    const changeHandler = ev => {
        ev.persist();
        let value = ev.target.value;
        
        setItem({
            ...item,
            [ev.target.name]: value
          });
        };

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .put(`http://localhost:5000/api/movies/${match.params.id}`, item)
            .then(res => {
                console.log("Responce of PUT", res);
                setItem(initialData);
                props.updateItem(res.data);
                props.history.push('/');
            })
            .catch(err => console.log(err));
        };

  return (
    <Container text>
        <Header as='h2'>Update item</Header>
        <Form onSubmit={handleSubmit}>
            <Form.Field>
                <label>Item title</label>
                <input
                    type="text"
                    name="productName"
                    onChange={changeHandler}
                    placeholder="productName"
                    value={item.productName}
                />
            </Form.Field>
            <Form.Field>
                <label>Director</label>
                <input
                    type="text"
                    name="description"
                    onChange={changeHandler}
                    placeholder="description"
                    value={item.description}
                />
            </Form.Field>
            <Form.Field>
                <label>Metascore</label>
                <input
                    type="number"
                    name="price"
                    onChange={changeHandler}
                    placeholder="price"
                    value={item.price}
                />
            </Form.Field>

            <Button type='submit'>Update</Button>
        </Form>

    </Container>
  );
};

export default UpdateItem;
