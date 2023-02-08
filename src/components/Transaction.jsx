import React from "react";

const Transaction = ({ transaction }) => {
  return (
    <li key={transaction.id} className="minus">
      {transaction.text} <span>${transaction.amount}</span>
      <button className="delete-btn">x</button>
    </li>
  );
};

export default Transaction;
