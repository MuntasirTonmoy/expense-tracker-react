import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li
      key={transaction.id}
      className={transaction.amount > 0 ? "plus" : "minus"}
    >
      {transaction.text} <span>${transaction.amount}</span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
