import React, {useState} from 'react';

import Header from "./Header";
import AddForm from "./AddForm";

function AddProduct() {

  const [itemAdded, setItemAdded] = useState(false);
  const [itemToAdded, setItemToAdded] = useState('');

  console.log("OLOLO", itemAdded);

  return (
    <>
        <Header />
        <AddForm 
        itemAdded={itemAdded} 
        setItemAdded={setItemAdded} 
        itemToAdded={itemToAdded} 
        setItemToAdded={setItemToAdded} 
        />
    </>
  );
}

export default AddProduct;
