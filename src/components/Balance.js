import React, { useContext } from "react";
import { StateContext } from "../context/stateProvider";

const Balance = () => {
  const { transactions } = useContext(StateContext);
  const amounts = transactions.map((item) => item.expense);
  console.log(amounts);
  const balance = amounts.reduce((acc, curr) => (acc += curr), 0);
  return (
    <div>
      <h2>Your Balance</h2>
      <p>$ {balance}</p>
    </div>
  );
};

export default Balance;
