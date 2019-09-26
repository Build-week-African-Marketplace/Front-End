import React from 'react';
import { Button } from 'semantic-ui-react';

import { axiosWithAuth } from '../utilites/axiosWithAuth';

const CardBtn = (props) =>  {

    const deleteProduct = () => {
        axiosWithAuth()
          .delete(`/products/delete/${props.id}`)
          .then(res => {
              console.log(`Product with id ${props.id} deleted`);
              props.setUpdate(res)
          })
          .catch(err => console.log(err));
    };

    const setEdit = () => {
        props.setEditing(!props.editing)
    };


    return (

    <div className="BtnCards">
        <Button onClick={setEdit}>Edit</Button>
        <Button onClick={deleteProduct}>Delete</Button>
    </div>
    );


}

export default CardBtn;