import React, { useContext } from "react";
import { StateContext } from "../context/stateProvider";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(StateContext);
  return (
    <div className="transactionList">
      <h2>Transactions History</h2>
      {/* <p>Cash</p>
      <p>$0.00 </p> */}
      {transactions.map((eachTransaction, index) => (
        // console.log(eachTransaction)
        <Transaction key={index} transaction={eachTransaction} />
      ))}
    </div>
  );
};

export default TransactionList;
