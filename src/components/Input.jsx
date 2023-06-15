import { useState } from "react";

const Input = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState("");

  const handleChange = (event) => {
    setNewItemName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newItemName) {
      console.log("no input");
      return;
    }

    addItem(newItemName);
    setNewItemName("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-control">
      <input
        type="text"
        value={newItemName}
        onChange={handleChange}
        placeholder="Create new todo..."
        id="item"
      />
    </form>
  );
};

export default Input;
