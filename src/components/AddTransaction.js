import React, { useContext, useState } from "react";
import { StateContext } from "../context/stateProvider";

const AddTransaction = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const { dispatch } = useContext(StateContext);
  const setNameEvent = (e) => setName(e.target.value);

  // const addTransaction = () => {
  //   dispatch({
  //     type: "AddTransaction",
  //     item: {
  //       id: Math.floor(Math.random() * 1000000),
  //       name: name,
  //       expense: +amount
  //     }
  //   });
  // };
  const onSubmit = (e) => {
    e.preventDefault();
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
      <form onSubmit={onSubmit}>
        <div>
          <label>Text</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setNameEvent(e)}
            placeholder="Expense Name"
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
          />
        </div>
        {/* <button onClick={addTransaction}>Add Transaction</button> */}
        <div>
          {/* <label> Submit</label> */}
          <input type="Submit" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
