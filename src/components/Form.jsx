import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToList } from "../store";

function Form() {
  const [name, setName] = useState("");
  const [cost, setCost] = useState(0);
  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCostChange = (event) => {
    setCost(parseInt(event.target.value) || 0); // if the value is NaN, set it to 0
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addToList({ name, cost }));
    setName("");
    setCost(0);
  };

  return (
    <>
      <h3>Add Expense</h3>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input id="name" type="text" value={name} onChange={handleNameChange} />
        <label>Cost</label>
        <input
          id="cost"
          type="number"
          value={cost || ""}
          onChange={handleCostChange}
        />
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default Form;
