import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, dispatch, expenses, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  const handleBudgetChange = (event) => {
    const b = parseInt(event.target.value);
    if (b < totalExpenses) {
      alert("You cannot reduce the budget value lower than the spending");
    }
    setNewBudget(event.target.value);
    dispatch({ type: "SET_BUDGET", payload: event.target.value });
  };
  return (
    <div className="alert alert-secondary">
      <span>Budget:</span>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">{currency}</span>
        </div>
        <input
          type="number"
          class="form-control"
          aria-label="Amount (to the nearest dollar)"
          step="10"
          value={newBudget}
          onChange={handleBudgetChange}
        ></input>
      </div>
    </div>
  );
};
export default Budget;
