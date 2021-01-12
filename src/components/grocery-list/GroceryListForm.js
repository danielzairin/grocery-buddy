function GroceryListForm({ addToCollection }) {
  function handleSubmit(e) {
    e.preventDefault();

    const groceryItem = {
      name: e.target["name"].value,
      checked: false,
    };

    addToCollection(groceryItem, "groceryItems");

    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Item name</label>
        <input
          className="form-control"
          type="text"
          name="name"
          required
          autoComplete="off"
          spellCheck="false"
        />
      </div>
      <button className="btn btn-secondary btn-block">Add</button>
    </form>
  );
}

export default GroceryListForm;
