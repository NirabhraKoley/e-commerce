import React from "react";
import { useSelector } from "react-redux";
import { ProductsCard } from "../components/ProductsCard";


export const FilterData = () => {
  const filterProducts = useSelector((state) => state.product.filteredData);
  //   console.log(filterProducts);

  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
      <div className="grid drid-cols-1 sm:grid-cols-2 md:grid-cols4 lg:grid-cols-5 gap-6 cursor-pointer">
        {filterProducts.map((product, index) => (
          <ProductsCard product={product} key={index} />
        ))}
      </div>
      :
      <div className="flex justify-center">
        <h1>No Product Available</h1>
      </div>
    </div>
  );
};
