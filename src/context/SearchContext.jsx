import React, { createContext } from "react";
import { useState } from "react";

export const Searchcontext = createContext();

const SearchContext = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  //
  const handleSearchQuery = (text) => {
    setSearchQuery(text);
  };
  const contextInfo = { handleSearchQuery, searchQuery };
  return (
    <div>
      <Searchcontext.Provider value={contextInfo}>
        {children}
      </Searchcontext.Provider>
    </div>
  );
};

export default SearchContext;
