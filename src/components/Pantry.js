import React, { useEffect, useState } from "react"
import { pantryItems } from "../testData.js";

function Pantry() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(pantryItems);
    
  }, []);

//add new item to pantry
function addPantry(event){
  event.preventDefault();
  const newItem = {
    id: Math.random(),
    name: event.target["name"].value,
    expiryDate: new Date(event.target["expiryDate"].value),
   };
  setItems((prevItems) => [...prevItems, newItem]);
}

    //display todays date
    var showdate=new Date();
    var dt=showdate.toDateString();

//sortingbyExpiryDate
const sortedpantryItems = pantryItems.sort((a,b) => a.expiryDate - b.expiryDate)

 
  return (
    <div>
        <h1
        className="text-center fixed-top w-100 bg-primary shadow-sm"
        style={{ height: "55px" }}>
              Pantry
      </h1>
        

      <div class="card text-center">
        <div className="card shadow">
          <div className="card-body bg-warning">
            <h5>TODAY : {dt} </h5> 

        <form onSubmit={addPantry}>
         <span>ADD ITEM: </span>
          <input 
          className="form-control rounded-0"
          type="text" 
          placeholder="Item name" 
          name="name"  
          />
         <span> ADD EXPIRY DATE: </span>
          <input 
          className="form-control rounded-0"
          type="Date" 
          placeholder="Expiry Date" 
          name="expiryDate" />
           <button className="btn btn-primary btn-block rounded-0">
             Add
           </button>
          </form>
     
         </div>
        </div>
      </div>

      <ul> 
      
        <div className="card text-center">    
          <div className="card shadow">
            <div className="card-body bg-primary">
            <h3>ITEMS IN PANTRY:</h3>
              </div>   
            </div>
          </div>
         

        {items.map((item) => (
         <li key={item.id}>
           <div className="card text-dark bg-light mb-3" ></div>
           <span>
             <div class="card-body">    
              <h5 className="card-tittle">{item.name}</h5>
           {item.expiryDate.toLocaleDateString() } </div></span> 
           <span><h7>Item expired in {Math.floor((item.expiryDate-showdate)/(1000*60*60*24)) } days.</h7></span>
         </li>
        
         ))}
      </ul>

        </div>
  );
}

export default Pantry;