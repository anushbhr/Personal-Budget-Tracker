import React, { useState } from "react";
import { useSelector } from "react-redux";

function BudgetInfo() {
  const [totalBuget, setTotalBudget] = useState();
  const [editable, setEditable] = useState(false);

  const list = useSelector((state) => state.budgetList.dataList);
  const totalExpenseCost = list.reduce(
    (acc, currentVal) => acc + currentVal.cost,
    0
  );
  const handleTotalBudget = (event) => {
    setTotalBudget(parseInt(event.target.value));
  };
  return (
    <div className="info-container">
      <div className="item-container">
        {editable ? (
          <>
            <input
              type="number"
              value={totalBuget}
              onChange={handleTotalBudget}
            />
            <button onClick={() => setEditable(false)}>Add</button>
          </>
        ) : (
          <>
            <p>Budget: ₹{totalBuget}</p>
            <button onClick={() => setEditable(true)}>Edit</button>
          </>
        )}
      </div>
      <div>
        Remaining: ₹{totalBuget - totalExpenseCost}
        {/* {totalExpenseCost > 0 && totalBuget > totalExpenseCost
          ? totalBuget - totalExpenseCost
          : 0} */}
      </div>
      <div>Spent so far: ₹{totalExpenseCost}</div>
    </div>
  );
}

export default BudgetInfo;
