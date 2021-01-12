function PantryForm({ addToCollection }) {
  function handleSubmit(e) {
    e.preventDefault();

    const pantryItem = {
      name: e.target["name"].value,
      expiryDate: new Date(e.target["expiryDate"].value),
    }

    addToCollection(pantryItem, "pantryItems");

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
  )
}

export default PantryForm;