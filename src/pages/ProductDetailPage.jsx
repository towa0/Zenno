//src\pages\ProductDetailPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";
import BackgroundCircles from "../components/BackgroundCircles";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://zenno-database-production.up.railway.app/buyProduct/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          setProduct(data[0]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  return (
    <section className="max-w-6xl min-h-screen mx-auto mt-[10vh]">
      <BackgroundCircles
        circles={[
          { top: "4vh", left: "50vw", size: 200, color: "bg-purple-400" },
          { top: "20vh", left: "10vw", size: 200, color: "bg-blue-400" },
          { top: "40vh", left: "60vw", size: 200, color: "bg-indigo-400" },
        ]}
      />
      <div className="mb-15 text-center">
        <h1 className="font-bold text-4xl text-mainDark">
          Product <span className="text-mainBlue">Details</span>
        </h1>
      </div>
      <div className="container mx-auto px-4 py-8">
        {loading ? (
          <div className="flex w-full justify-center mt-[25vh]">
            <h1 className="text-4xl font-bold text-mainDark">Loading...</h1>
          </div>
        ) : product ? (
          <ProductDetail product={product} />
        ) : (
          <div className="flex w-full justify-center mt-[25vh]">
            <h1 className="text-4xl font-bold text-mainDark">
              Product niet <span className="text-mainBlue">gevonden.</span>
            </h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetailPage;
