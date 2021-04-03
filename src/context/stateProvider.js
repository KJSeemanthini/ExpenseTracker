import { createContext, useContext, useReducer, useState } from "react";
import { reducer } from "./reducer";

//initial state + export useful vars + wrapper of state provider which contains children + reducer + initial state

const initialState = {
  transactions: [
    { id: 1, name: "debit", expense: -220 },
    { id: 2, name: "credit", expense: 120 },
    { id: 3, name: "credit", expense: 120 }
  ] //should define an intial state type for this dict
};

//Create Context
export const StateContext = createContext(initialState);

//context provider
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider
      value={{ transactions: state.transactions, dispatch }}
    >
      {children}
    </StateContext.Provider>
  );
};

//reducer + child +
