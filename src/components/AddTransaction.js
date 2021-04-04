import React, { useContext, useState } from "react";
import { StateContext } from "../context/stateProvider";

const AddTransaction = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const { dispatch } = useContext(StateContext);
  const setNameEvent = (e) => setName(e.target.value);

  const addTransaction = () => {
    dispatch({
      type: "AddTransaction",
      item: {
        id: Math.floor(Math.random() * 1000000),
        name: name,
        expense: +amount
      }
    });
  };

  return (
    <div className="addTransaction">
      <h2>Add new Transaction</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setNameEvent(e)}
        placeholder="Expense Name"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <button onClick={addTransaction}>Add Transaction</button>
    </div>
  );
};

export default AddTransaction;
