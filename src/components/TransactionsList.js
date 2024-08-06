import React from "react"; // Import React library
import Transaction from "./Transaction"; // Import the Transaction component

// Define the TransactionsList component, accepting a props object with the transactions array
function TransactionsList({ transactions }) {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        {/* Table header row */}
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {/* Map through the transactions array and render a Transaction component for each item */}
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id} // Unique key for each transaction, required by React
            date={transaction.date} // Pass the transaction date as a prop
            description={transaction.description} // Pass the transaction description as a prop
            category={transaction.category} // Pass the transaction category as a prop
            amount={transaction.amount} // Pass the transaction amount as a prop
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList; // Export the TransactionsList component as the default export
