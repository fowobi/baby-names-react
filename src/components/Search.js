import React from "react";

const Search = ({ searchQuery, handleSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search baby names..."
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
