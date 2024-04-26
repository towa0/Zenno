import React, { useState, useEffect } from "react";
import BackgroundCircles from "../components/BackgroundCircles";
import ProductCard from "../components/ProductCard";
import SkeletonCard from "../components/SkeletonCard";

const AppsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://zenno-database-production.up.railway.app/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <section className="max-w-6xl min-h-screen mx-auto mt-[10vh]">
      <BackgroundCircles
        circles={[
          { top: "12vh", left: "20vw", size: 150, color: "bg-blue-400" },
          { top: "65vh", left: "45vw", size: 200, color: "bg-indigo-400" },
          { top: "85vh", left: "35vw", size: 200, color: "bg-purple-400" },
          { top: "140vh", left: "15vw", size: 150, color: "bg-blue-400" },
          { top: "150vh", left: "60vw", size: 150, color: "bg-indigo-400" },
          { top: "210vh", left: "50vw", size: 100, color: "bg-purple-400" },
        ]}
      />
      <div className="mb-20 text-center">
        <h1 className="font-bold text-4xl text-mainDark">
          Onze <span className="text-mainBlue">producten</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {loading
          ? Array.from({ length: 9 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : products.map((software) => (
              <ProductCard key={software.id} software={software} />
            ))}
      </div>
    </section>
  );
};

export default AppsPage;
