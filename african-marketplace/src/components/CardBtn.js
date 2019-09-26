import React from 'react';
import { Button } from 'semantic-ui-react'

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


    return (

    <>
        <Button onClick={deleteProduct}>Delete</Button>
        <Button>Edit</Button>
    </>
    );


}

export default CardBtn;