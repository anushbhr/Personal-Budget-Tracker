import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromList } from "../store";

function BudgetList() {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) =>
    state.budgetList.dataList.filter((ele) =>
      ele.name.toLowerCase().includes(searchInput.toLowerCase())
    )
  ); ///optimisation: now to search it is rendering for each character input, not an optimised technique

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleDelete = (id) => {
    dispatch(removeFromList(id));
  };

  const ListDisplay = () => {
    return list?.map((ele) => {
      return (
        <div className="list" key={ele.id}>
          <p>{ele.name}</p>
          <div>
            <span className="element">{ele.cost}</span>
            <button className="element" onClick={() => handleDelete(ele.id)}>
              delete
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <h3>Expenses</h3>
      <input
        id="search"
        type="search"
        name="search"
        value={searchInput}
        placeholder="Type to search..."
        onChange={handleSearchInputChange}
      />

      {list?.length > 0 && <ListDisplay />}
    </>
  );
}
export default BudgetList;
