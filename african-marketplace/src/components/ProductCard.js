import React from 'react';
import { Card } from 'semantic-ui-react'

import CardBtn from './CardBtn';

const ProductCard = (props) =>  {



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

    </Card>
    );


}

export default ProductCard;