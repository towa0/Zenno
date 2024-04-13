import React from "react";
import { SoftwareData } from "../constants/index";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  return (
    <section className="max-w-6xl mx-auto min-h-screen px-4 py-8 ">
      <div className="mb-20 text-center">
        <h1 className="font-bold text-4xl text-mainDark">
          Zie onze <span className="text-mainBlue">producten</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {SoftwareData.map((software) => (
          <ProductCard key={software.id} software={software} />
        ))}
      </div>
    </section>
  );
};

export default ProductPage;
