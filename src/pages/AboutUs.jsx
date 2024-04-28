import BackgroundCircles from "../components/BackgroundCircles";
import AboutUsContent from "../components/AboutUsContent";
import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

const AboutUs = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://zenno-database-production.up.railway.app/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <section className="max-w-3xl min-h-screen mx-auto prose lg:prose-md mt-[10vh] ">
      <BackgroundCircles
        circles={[
          { top: "4vh", left: "40vw", size: 200, color: "bg-purple-400" },
        ]}
      />
      <AboutUsContent />
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 mt-[10vh]">
        {products.slice(0, 4).map((software) => (
          <ProductCard key={software.id} software={software} />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
