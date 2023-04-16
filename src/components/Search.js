import React, { useState } from "react";
import "./Search.css";

const Search = ({ pattern, patternHandler }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    patternHandler(pattern);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name"></label>
        <div className="search-form__wrapper">
          <input
            type="text"
            placeholder="Search..."
            id="character"
            value={pattern}
            onChange={(event) => {
              patternHandler(event.target.value);
            }}
          />
          <button className="search-form__button" type="submit"></button>
        </div>
      </div>
    </form>
  );
};

export default Search;
