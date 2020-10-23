import React, { useState } from 'react';
// import { DatePicker } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import Inventory from "./components/Inventory";
import Fm from "./components/Fm";
import Inv from "./services/inventory";


function App() {
  const [inventory, setInventory] = useState(new Inv());
  
  const doSomething = (something) =>{
    console.log(" adding Item");
    inventory.addItem(something)
    setInventory(inventory)
    
  }
  return (
    <div className="App">
      <Inventory inventory={inventory}/>
      <Fm addItem={doSomething} />
    </div>
  );
}

export default App;
