import React, { createContext, useReducer } from "react";

const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 1, text: "Salary", amount: 300 },
  ],
};

// creating context
export const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
  cosnt[(state, dispatch)] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
