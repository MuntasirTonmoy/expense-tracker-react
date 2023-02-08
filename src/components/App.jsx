import React from "react";
import GlobalProvider from "../context/GlobalState";
import AddTransaction from "./AddTransaction";
import "./App.css";
import Balance from "./Balance";
import Header from "./Header";
import IncomeExpense from "./IncomeExpense";
import TransactionList from "./TransactionList";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <GlobalProvider>
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </GlobalProvider>
      </div>
    </div>
  );
}

export default App;
