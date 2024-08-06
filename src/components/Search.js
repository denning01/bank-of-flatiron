import React from "react"; // Import React library

// Define the Search component, accepting props for searchTerm and setSearchTerm
function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="ui large fluid icon input">
      {/* Input field for search term */}
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={searchTerm} // Controlled input, value comes from the searchTerm prop
        onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm state on input change
      />
      {/* Search icon */}
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search; // Export the Search component as the default export

