function GroceryListItem({
  id,
  name,
  checked,
  deleteFromCollection,
  updateInCollection,
}) {
  function handleClick() {
    deleteFromCollection(id, "groceryItems");
  }

  function handleCheck() {
    updateInCollection(id, { checked: !checked }, "groceryItems");
  }

  return (
    <li className="mt-2">
      <input type="checkbox" defaultChecked={checked} onChange={handleCheck} />
      <span
        className="h5 mx-2"
        style={checked ? { textDecoration: "line-through" } : null}
      >
        {name}
      </span>
      <span
        className="float-right"
        style={{ cursor: "pointer" }}
        onClick={handleClick}
      >
        ✕
      </span>
    </li>
  );
}

export default GroceryListItem;
