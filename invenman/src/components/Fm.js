import React, { useRef } from "react";
import { Input, Button, Space } from "antd";
import Product from "../services/product";

const Fm = ({ addItem }) => {
  const idRef = useRef(null);
  const priceRef = useRef(null);
  const quantityRef = useRef(null);
  // const handleId = (e) => {
  //   console.log(e.target.value)
  //   setId(e.target.value);

  // };
  // const handlePrice = (e) => {
  //   setPrice(priceRef.current.state.value);

  // };
  // const handleQuantity = (e) => {
  //   setQuantity(quantityRef.current.state.value);

  // };
  const doSomething = () => {
    addItem(
      new Product(
        priceRef.current.state.value,
        idRef.current.state.value,
        quantityRef.current.state.value
      )
    );
  };
  return (
    /**So when the value changes, the info goes into doSomething
     * Once its in there its goes into the state of the app
     * Once its there it goes to the inventory component
     */

    <div style={{ width: "30%" }}>
      <Space size={32} style={{ margin: "0 auto" }}>
        <Input.TextArea
          ref={idRef}
          // onChange={handleId}
          defaultValue="Input the Name"
        ></Input.TextArea>
        <Input.TextArea
          ref={priceRef}
          // onChange={handlePrice}
          defaultValue="Input the Price"
        ></Input.TextArea>
        <Input.TextArea
          ref={quantityRef}
          // onChange={handleQuantity}
          defaultValue="Input the Amount on hand"
        ></Input.TextArea>
        <Button type="primary" onClick={doSomething}>
          Add Item
        </Button>
      </Space>
    </div>
  );
};

export default Fm;
