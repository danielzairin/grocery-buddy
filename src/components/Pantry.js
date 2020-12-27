import React from "react";
import AddtoPantry from "./AddtoPantry";
import { pantryItems } from "../testData";

/*function Pantry() {
  return (
    <div>
      <h1>Pantry</h1>
    </div>
  );
}*/

class Pantry extends React.Component {
  constructor() {
    super();

    this.state = {
      //Add pantry item from testData
      pItem: pantryItems,
    };
  }

  render() {
    const pantryItem = pantryItems.map((item) => (
      <AddtoPantry key={item.id} name={item.name} expdate={item.expiryDate} />
    ));
    return (
      <div>
        <h1>Pantry</h1>
        {pantryItem}
      </div>
    );
  }
}

export default Pantry;
