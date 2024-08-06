import React, { useState } from "react";

// Define the AddTransactionForm component
function AddTransactionForm({ addTransaction }) {
  // State to hold the form data
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  // Function to handle changes in the input fields
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure the name and value from the event target
    // Update the formData state with the new value for the corresponding input field
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    addTransaction(formData); // Call the addTransaction function passed as a prop with the form data
    // Reset the form data to the initial state
    setFormData({
      date: "",
      description: "",
      category: "",
      amount: "",
    });
  };

  return (
    <div className="ui segment">
      {/* Form with onSubmit handler */}
      <form className="ui form" onSubmit={handleSubmit}>
        {/* Field for date input */}
        <div className="field">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        {/* Field for description input */}
        <div className="field">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        {/* Field for category input */}
        <div className="field">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        {/* Field for amount input */}
        <div className="field">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            step="0.01"
            required
          />
        </div>
        {/* Submit button */}
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
