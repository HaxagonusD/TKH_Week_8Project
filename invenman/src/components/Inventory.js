import React from "react";
import { Space, Typography } from "antd";
import Product from "./Product";
const { Title } = Typography;
const Inventory = ({ inventory }) => {
  /**
   * Think about what is the best way to implement the invetory data
   * considering that REact only uses arrays
   *
   * Get the data to work and to show
   * Find ant design components, dispaly data using ant design
   * Layout site make it pretty
   * Start working on Personal website perhaps with ant design
   */
  //   const [value, setValue] = useState(inventory)
  //   useEffect(()=> {
  //       console.log("effect was done")
  //       setValue(inventory)
  //   }, [inventory])
  console.log(inventory);
  return (
    <div>
      <Title>Inventory</Title>
      <Space size={32}>
        {inventory.getItems().map((item, index) => (
          <Product key={index} price={item.price} id={item.id} quantity={item.quantity}/>
        ))}
      </Space>
    </div>
  );
};

export default Inventory;
