import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const [currency, setCurrency] = useState("£");

  return (
    <div className="alert alert-info">
      <span>Currency: </span>
      <select
        className="custom-select"
        id="inputGroupSelect01"
        onChange={(event) => {
          setCurrency(event.target.value);
          dispatch({ type: "CHG_CURRENCY", payload: event.target.value });
        }}
      >
        <option defaultValue value="£" name="pound">
          £ Pound
        </option>
        <option value="$" name="dollar">
          $ Dollar
        </option>
        <option value="€" name="euro">
          € Euro
        </option>
        <option value="₹" name="ruppee">
          ₹ Ruppee
        </option>
      </select>
    </div>
  );
};
export default Currency;
