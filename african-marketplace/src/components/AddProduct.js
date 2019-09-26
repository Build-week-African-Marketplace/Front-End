import React, {useState} from 'react';

import Header from "./Header";
import AddForm from "./AddForm";

function AddProduct() {

  const [itemAdded, setItemAdded] = useState(false);
  console.log("OLOLO", itemAdded);

  return (
    <>
        <Header />
        <AddForm itemAdded={itemAdded} setItemAdded={setItemAdded} />
    </>
  );
}

export default AddProduct;
