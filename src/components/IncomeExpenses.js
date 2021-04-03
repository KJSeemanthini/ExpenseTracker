import React, { useContext } from "react";
import { StateContext, StateProvider } from "../context/stateProvider";
import "./../styles.css";

const IncomeExpenses = () => {
  const { transactions } = useContext(StateContext);

  const incomeList = transactions
    .filter((item) => item.expense > 0)
    .map((item) => item.expense);
  const expenseList = transactions
    .filter((item) => item.expense < 0)
    .map((item) => item.expense);
  const income = incomeList.reduce((acc, curr) => (acc += curr), 0);
  const expense = expenseList.reduce((acc, curr) => (acc += curr), 0);

  console.log(incomeList, expenseList, income, expense);
  return (
    <div className="expenses">
      <div className="expense__add">
        <h2>Income</h2>
        <p>{income}</p>
      </div>
      <div className="expense__subtract">
        <h2>Expense</h2>
        <p>{expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
