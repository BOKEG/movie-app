import React from "react";

const Filter = ({ setSearchTerm, setRatingFilter }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating..."
        onChange={(e) => setRatingFilter(Number(e.target.value))}
      />
    </div>
  );
};

export default Filter;
