import React, { useContext, useEffect, useState } from "react";
import {
  fetchPantryItems,
  addPantryItem,
  deletePantryItem,
} from "../firebase/firestoreUtils";
import { UserContext } from "../contexts/UserContext";

function Pantry() {
  const [items, setItems] = useState([]);
  const user = useContext(UserContext);

  useEffect(() => {
    // Fetch items from database
    fetchPantryItems(user.uid).then((pantryItems) => {
      setItems(pantryItems);
    });
  }, [user]);

  // Add new item to pantry
  function addItem(event) {
    event.preventDefault();

    let newItem = {
      name: event.target["name"].value,
      expiryDate: new Date(event.target["expiryDate"].value),
    };

    // Add item to database
    addPantryItem(newItem, user.uid)
      .then((doc) => {
        // Get ID of new item
        newItem = { id: doc.id, ...newItem };
        // Update UI state
        setItems((prevItems) => [...prevItems, newItem]);
      })
      .catch(console.error);

    event.target.reset();
  }

  // Delete item from pantry
  function deleteItem(itemId) {
    deletePantryItem(itemId)
      .then(() => {
        // Update UI state
        setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
      })
      .catch(console.error);
  }

 
  return (
    <div>
      <h1
        className="text-center fixed-top w-100 bg-primary shadow-sm"
        style={{ height: "55px" }}
      >
        Pantry
      </h1>
      {/* Add item form */}
      <div className="card shadow">
        <div className="card-body bg-warning">
          <form onSubmit={addItem}>
            <div className="form-group">
              <label>Item name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                required
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label>Expiry date</label>
              <input
                className="form-control"
                type="date"
                name="expiryDate"
                required
              />
            </div>
            <button className="btn btn-secondary btn-block">Add</button>
          </form>
        </div>
      </div>

      {/* List of pantry items */}
      <hr />
      {items.length > 0 ? (
        <ul className="list-unstyled">
          {items
            .sort((a, b) => a.expiryDate - b.expiryDate)
            .map((item) => {
              // Calculate number of days left until expiry date
              const daysUntilExpired = Math.ceil(
                (item.expiryDate - new Date()) / (1000 * 60 * 60 * 24)
              );
             

              // Set background colour based on days until epxiry date
              let colour = "secondary";

              if (daysUntilExpired <= 0) colour = "dark text-light";
              else if (daysUntilExpired <= 7) colour = "danger";
              else if (daysUntilExpired <= 14) colour = "warning";

              return (
                <li key={item.id} >
          
             
                  <div className="card shadow mb-3">
                    <div className={`card-body bg-${colour}`}>
                      <h5 className="card-tittle m-0">{item.name}</h5>
                      <p className="m-0">
                        Exp: {item.expiryDate.toLocaleDateString()}
                      </p>
                      {daysUntilExpired > 0 ? (
                        <span className="m-0">
                          Expires in {daysUntilExpired} days
                        </span>
                      ) : (
                        <span className="m-0">Expired</span>
                      )}
                      <span
                        className="float-right"
                        onClick={() => deleteItem(item.id)}
                      >
                        🗑
                      </span>
                    </div>
                  </div>
                  
                </li>
                
              );
            })}
        </ul>
      ) : null}

      
    </div>
  );
}

export default Pantry;
