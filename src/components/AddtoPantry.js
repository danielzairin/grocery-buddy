import React from "react";

function AddtoPantry(props) {
  return (
    <div className="todo-item">
      <p>
        {props.name}
        {props.expiryDate}
      </p>
    </div>
  );
}

export default AddtoPantry;
