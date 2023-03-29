import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeExpense } from "../store";

function BudgetList() {
  const dispatch = useDispatch();
  const budgetList = useSelector((state) => {
    return state.budgetList;
  });

  const handleRemoveItem = (id) => {
    dispatch(removeExpense(id));
  };
  return (
    <ul>
      {budgetList.map((ele) => {
        return (
          <div key={ele.id}>
            <button onClick={() => handleRemoveItem(ele.id)}>X</button>
            <li>{ele.name}</li>
          </div>
        );
      })}
    </ul>
  );
}

export default BudgetList;
