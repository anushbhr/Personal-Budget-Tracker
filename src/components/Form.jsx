import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addExpense } from "../store";

function Form() {
  const [name, setName] = useState("");
  const [cost, setCost] = useState(0);
  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCostChange = (event) => {
    setCost(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addExpense({ id: nanoid(), name: name, cost: cost }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Expense</h3>
      <label>Name</label>
      <input type="text" value={name} onChange={handleNameChange} />
      <label>Cost</label>
      <input type="number" value={cost} onChange={handleCostChange} />
      <button type="submit">Save</button>
    </form>
  );
}

export default Form;
