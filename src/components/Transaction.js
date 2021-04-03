import React from "react";
import CloseIcon from "@material-ui/icons/Close";

function Transaction({ transaction }) {
  const sign = transaction.expense < 0 ? "-" : "+";
  const signClassName =
    "eachTransaction" + (transaction.expense < 0 ? "minus" : "plus");
  console.log("eachTransaction" + (transaction.expense < 0 ? "minus" : "plus"));
  const deleteTransaction = () => console.log("remove_trasaction");
  return (
    <div className={signClassName}>
      <div className="transaction_metadata">
        <CloseIcon
          onClick={() => deleteTransaction()}
          className="remove_transaction"
        />
        <p className={transaction.expense < 0 ? "minus" : "plus"}>|</p>
      </div>
      <p>{transaction.name}</p>
      <p>{transaction.expense}</p>
    </div>
  );
}

export default Transaction;
