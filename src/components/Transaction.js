import React, { useContext } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { StateContext } from "../context/stateProvider";

function Transaction({ transaction }) {
  const { dispatch } = useContext(StateContext);

  const sign = transaction.expense < 0 ? "-" : "+";
  const signClassName =
    "eachTransaction" + (transaction.expense < 0 ? "minus" : "plus");
  const deleteTransaction = (id) => {
    dispatch({ type: "RemoveTransaction", item: id });
  };

  return (
    <div className={signClassName}>
      <div className="transaction_metadata">
        <CloseIcon
          onClick={() => deleteTransaction(transaction.id)}
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
