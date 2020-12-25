import React from "react";
import AddtoPantry from "./AddtoPantry"
import {pantryItems} from "./testData"

/*function Pantry() {
  return (
    <div>
      <h1>Pantry</h1>
    </div>
  );
}*/

class Pantry extends React.Component {
  constructor(){
    super()
    
      this.state={//Add pantry item from testData 
        pantryItem : pantryItems.map(item => 
          <AddtoPantry key={item.id} name={item.name} expdate={item.expiryDate}/>)
      //
    }
  }
  render(){
    return(
      <div>
        <h1>Pantry</h1>
        <ul>
          <li>
          {this.state.pantryItem}
          </li>
        </ul>
       
      </div>
    )
  }
}
export default Pantry;
