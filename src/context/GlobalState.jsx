import React, { createContext, useReducer } from "react";
import Appreducer from "./Appreducer";

const initialState = {
  transactions: [],
};

// creating context
export const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Appreducer, initialState);

  // Actions
  const deleteTransaction = id => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const addTransaction = transaciton => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaciton,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
