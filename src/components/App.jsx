import React from "react";
import "./App.css";
import Balance from "./Balance";
import Header from "./Header";
import IncomeExpense from "./IncomeExpense";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
      </div>
    </div>
  );
}

export default App;
