import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  // State to hold the list of transactions
  const [transactions, setTransactions] = useState([]);
  // State to hold the current search term
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch the initial list of transactions when the component mounts
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);

  // Function to add a new transaction
  const addTransaction = (transaction) => {
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transaction),
    })
      .then((response) => response.json())
      .then((newTransaction) => setTransactions([...transactions, newTransaction]));
  };

  // Filter transactions based on the search term
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Search component to handle the search input */}
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {/* Form to add a new transaction */}
      <AddTransactionForm addTransaction={addTransaction} />
      {/* List of filtered transactions */}
      <TransactionsList transactions={filteredTransactions} />
    </div>
  );
}

export default AccountContainer;
