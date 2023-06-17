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
        `https://olivia-brand-fashion-backend.vercel.app/search-products?q=${searchQuery}`
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div style={{ marginTop: "100px" }}>
      {products?.length === 0 && (
        <div className="text-center flex align-items-center">
          <h1>No Data Found !</h1>
        </div>
      )}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 m-0">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default SearchProducts;
