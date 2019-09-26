import React, { useState } from 'react';
import { Card } from 'semantic-ui-react'
import { axiosWithAuth } from '../utilites/axiosWithAuth';

import CardBtn from './CardBtn';

const initialItem = {
    productName: '',
    price: '',
    description: ''
  };

const ProductCard = (props) =>  {

    const [editing, setEditing] = useState(false);
    const [itemToEdit, setItemToEdit] = useState(initialItem);
    // console.log("Item to edit: ", itemToEdit)

    const editItem = item => {
        setEditing(true);
        setItemToEdit(item);
      };
    
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

    
    function DeleteBtn(position) {
    const isLocal = position;
    if (isLocal.position === 0) {
        return <CardBtn id={props.id} setUpdate={props.setUpdate}/>
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
        
        <form onSubmit={saveEdit}>
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
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>


    </Card>
    );


}

export default ProductCard;