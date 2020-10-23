import React from "react";
import {Card} from "antd"
const Product = ({ price, id, quantity }) => {
  return (
    <div>
      <Card title={id}>
        <p>Price: ${price}</p>
        <p>In Stock: {quantity}</p>
      </Card>
    </div>
  );
};

export default Product;
