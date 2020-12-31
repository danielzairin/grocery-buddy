import React, { useEffect, useState } from "react";
import { pantryItems } from "../testData.js";

function Pantry() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(pantryItems);
  }, []);

  //add new item to pantry
  function addPantry(event) {
    event.preventDefault();
    const newItem = {
      id: Math.random(),
      name: event.target["name"].value,
      expiryDate: new Date(event.target["expiryDate"].value),
    };
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <div>
      <h1
        className="text-center fixed-top w-100 bg-primary shadow-sm"
        style={{ height: "55px" }}
      >
        Pantry
      </h1>

      <div className="card">
        <div className="card shadow">
          <div className="card-body bg-warning">
            <form onSubmit={addPantry}>
              <div className="form-group">
                <label>Item name</label>
                <input
                  className="form-control rounded-0"
                  type="text"
                  placeholder="avocados"
                  name="name"
                />
              </div>
              <div className="form-group">
                <label>Expiry date</label>
                <input
                  className="form-control rounded-0"
                  type="date"
                  name="expiryDate"
                />
              </div>
              <button className="btn btn-primary btn-block rounded-0">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>

      <hr />

      {items.length > 0 ? (
        <ul className="list-unstyled">
          {items
            .sort((a, b) => a.expiryDate - b.expiryDate)
            .map((item) => {
              const daysUntilExpired = Math.floor(
                (item.expiryDate - new Date()) / (1000 * 60 * 60 * 24)
              );

              let colour = "secondary";

              if (daysUntilExpired <= 0) colour = "dark text-light";
              else if (daysUntilExpired <= 7) colour = "danger";
              else if (daysUntilExpired <= 14) colour = "warning";

              return (
                <li key={item.id}>
                  <div className="card shadow mb-3">
                    <div className={`card-body bg-${colour}`}>
                      <h5 className="card-tittle m-0">{item.name}</h5>
                      <p className="m-0">
                        Exp: {item.expiryDate.toLocaleDateString()}
                      </p>
                      {daysUntilExpired > 0 ? (
                        <p className="m-0">
                          Expires in {daysUntilExpired} days
                        </p>
                      ) : (
                        <p className="m-0">Expired</p>
                      )}
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
