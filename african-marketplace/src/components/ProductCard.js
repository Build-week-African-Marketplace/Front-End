import React, { useState } from 'react';
import { Card, Button, Form } from 'semantic-ui-react'
import { axiosWithAuth } from '../utilites/axiosWithAuth';

import CardBtn from './CardBtn';

const initialItem = {
    productName: '',
    price: '',
    description: ''
  };

const ProductCard = (props) =>  {

    const [itemToEdit, setItemToEdit] = useState(initialItem);
    
    const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth()
        .put(`/products/update/${props.id}`, itemToEdit)
        .then(res => {
        console.log(`Updated data of ${itemToEdit.productName}`, res);
        props.setEdited(res);
    })
        .catch(err => console.log('Oh-oh, something wrong', err));
    };

    const setEditing = props.setEditing;
    
    function DeleteBtn(position) {
    const isLocal = position;
    if (isLocal.position === 0) {
        return <CardBtn id={props.id} setUpdate={props.setUpdate} setEditing={props.setEditing} editing={props.editing} />
    }
    else {
        return null;
        }
    }

    return (

    <Card>
        <Card.Content>
            <Card.Header>{props.productName}</Card.Header>
            <Card.Meta>Price: {props.price}$</Card.Meta>
            <Card.Description>Descriprion: {props.description}</Card.Description>
        </Card.Content>
        
        <DeleteBtn position={props.position} />
        
        {props.editing && (
        <div className="EditBlock">
            <Form onSubmit={saveEdit}>
                
            <legend>Edit item</legend>
            <label>
                Product Name:
                <input
                onChange={e =>
                    setItemToEdit({ ...itemToEdit, productName: e.target.value })
                }
                value={itemToEdit.productName}
                />
            </label>

            <label>
                Price:
                <input
                onChange={e =>
                    setItemToEdit({ ...itemToEdit, price: e.target.value })
                }
                value={itemToEdit.price}
                />
            </label>
            
            <label>
                Description:
                <input
                onChange={e =>
                    setItemToEdit({ ...itemToEdit, description: e.target.value })
                }
                value={itemToEdit.description}
                />
            </label>

            <div className="button-row">
                <Button type="submit">Save</Button>
                <Button onClick={() => setEditing(false)}>Cancel</Button>
            </div>
            </Form>
        </div>
        )}

    </Card>
    );


}

export default ProductCard;