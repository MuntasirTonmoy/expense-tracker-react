import React from "react";
import "./App.css";
import Balance from "./Balance";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance />
      </div>
    </div>
  );
}

export default App;
