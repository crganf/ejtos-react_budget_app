import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, dispatch, expenses, remaining } = useContext(AppContext);
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
      <span>Budget: £{budget}</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;
