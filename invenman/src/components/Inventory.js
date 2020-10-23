import React  from "react";
import Product from "./Product"
import {Space, Typography } from "antd";
const { Title } = Typography;
const Inventory = ({inventory}) => {
  /**
   * Think about what is the best way to implement the invetory data
   * considering that REact only uses arrays
   *
   * Get the data to work and to show
   * Find ant design components, dispaly data using ant design
   * Layout site make it pretty
   * Start working on Personal website perhaps with ant design
   */
  console.log(inventory)
  return (
    <div>
        
      <Title>Inventory</Title>  
      <Space size={32}>
        {inventory.getItems().map((item, index) => <Product key={index} props={item} />)}
          {/* //   <li key={index}>{item.toArray()}</li>
        //   <Product key={index} props={item} /> */}
        
      </Space>
    </div>
  );
};

export default Inventory;
