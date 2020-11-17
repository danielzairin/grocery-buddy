import { pantryItems } from "./testData";

function Pantry() {
  return (
    <div>
      <p>{pantryItems[0].name}</p>
      <p>{pantryItems[1].name}</p>
    </div>
  );
}

export default Pantry;
