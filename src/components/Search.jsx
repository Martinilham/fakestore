// src/SearchBar.js
import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className="rounded-l-lg p-2 w-64 focus:outline-none"
      />
      <button
        onClick={onSearch}
        className="bg-primary text-white rounded-r-lg p-2"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
