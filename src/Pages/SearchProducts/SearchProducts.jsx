import React from "react";
import { useContext } from "react";
import { Searchcontext } from "../../context/SearchContext";
import { useQuery } from "react-query";
import Loading from "../Sheard/Loading";
import ProductCard from "./ProductCard/ProductCard";

const SearchProducts = () => {
  const { searchQuery } = useContext(Searchcontext);

  const { data: products, isLoading } = useQuery({
    queryKey: ["search-products", searchQuery],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/search-products?q=${searchQuery}`
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 m-0">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default SearchProducts;
