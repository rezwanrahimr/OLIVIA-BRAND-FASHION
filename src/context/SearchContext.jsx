import React, { createContext, useEffect } from "react";
import { useState } from "react";

export const Searchcontext = createContext();

const SearchContext = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [callLocalStorage, setCallLocalStorage] = useState(null);
  const [cartQuantity, setCartQuantity] = useState(0);

  // Handle Get Cart Quantity from Local Storage

  useEffect(() => {
    const getItemsToLocalStorage = localStorage.getItem("productsId");
    const items = JSON.parse(getItemsToLocalStorage);
    setCartQuantity(items?.length);
  }, [callLocalStorage]);

  //
  const handleSearchQuery = (text) => {
    setSearchQuery(text);
  };
  const contextInfo = {
    handleSearchQuery,
    searchQuery,
    cartQuantity,
    setCallLocalStorage,
  };
  return (
    <div>
      <Searchcontext.Provider value={contextInfo}>
        {children}
      </Searchcontext.Provider>
    </div>
  );
};

export default SearchContext;
