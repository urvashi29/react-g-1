import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      placeholder="Search Prpducts..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ marginBottom: "20px" }}
    />
  );
};

export default SearchBar;
