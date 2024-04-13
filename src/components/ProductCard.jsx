import React from "react";
import Button from "../components/Button";

const ProductCard = ({ software }) => {
  return (
    <div className="bg-background flex flex-col justify-between p-6 cursor-pointer hover:shadow-xl rounded-xl border-2 border-gray-300 shadow-lg transition-shadow duration-300 ease-in-out">
      <div>
        <h1 className="text-2xl font-bold text-mainDark my-3 text-center">
          {software.title}
        </h1>
        <img
          src={software.image}
          alt={software.title}
          className="w-auto h-40 object-cover rounded-lg mb-4 mx-auto"
        />
        <p className="text-md leading-tight text-gray-700">
          {software.description}
        </p>
        <ul className="mt-4">
          {Object.entries(software.price).map(([key, value]) => (
            <li key={key} className="flex justify-between items-center py-1">
              <span className="text-md font-medium text-mainDark">
                {`${key.charAt(0).toUpperCase() + key.slice(1)}`}
              </span>
              <span className="text-lg font-bold text-mainBlue">
                {`€${value},-`}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-8">
        <Button to="/#" label="Koop nu" primary={true} />
      </div>
    </div>
  );
};

export default ProductCard;
