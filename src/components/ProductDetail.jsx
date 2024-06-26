import React, { useState } from "react";
import { useAuth } from "../backend/AuthProvider";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import { useNavigate } from "react-router-dom";

const ProductDetail = ({ product }) => {
  const { user } = useAuth();
  const [subscription, setSubscription] = useState({
    price: 0,
    subscriptionLength: "",
  });
  const [email, setEmail] = useState(user ? user.email : "");
  // const stripe = useStripe();
  // const elements = useElements();

  const handleChange = (e) => {
    const optionText = e.target.options[e.target.selectedIndex].text;
    const pricePattern = /\s€[\d]+,-/;
    const descriptionWithoutPrice = optionText.replace(pricePattern, "");

    setSubscription({
      price: e.target.value,
      subscriptionLength: descriptionWithoutPrice,
    });
  };

  // const handlePayment = async (event) => {
  //   event.preventDefault();

  //   if (!stripe || !elements) {
  //     return;
  //   }

  //   const cardElement = elements.getElement(CardElement);

  //   const { error, paymentMethod } = await stripe.createPaymentMethod({
  //     type: "card",
  //     card: cardElement,
  //     billing_details: { email },
  //   });

  //   if (error) {
  //     console.log("[error]", error);
  //   } else {
  //     console.log("[PaymentMethod]", paymentMethod);
  //     // TODO: handle paymentMethod further (send to backend, etc.)
  //   }
  // };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="bg-background/30 backdrop-blur-md flex flex-col justify-between p-6 cursor-pointer hover:shadow-xl rounded-xl border-2 border-gray-300 shadow-lg transition-shadow duration-300 ease-in-out sm:w-[28vw]">
        <h2 className="text-2xl font-bold text-mainDark my-3 text-center">
          {product.title}
        </h2>
        <p className="mb-4 text-center text-gray-700">{product.description}</p>
        <img
          src={product.image}
          className="w-auto h-40 object-cover rounded-lg mb-4 mx-auto"
          alt={product.title}
        />
        <p className="mb-1 text-lg">
          Prijs:{" "}
          <span className="text-mainBlue font-bold">
            €{subscription.price},-
          </span>
        </p>
        <p className="mb-4 text-lg">
          Abonnement lengte:{" "}
          <span className="text-mainBlue font-bold">
            {subscription.subscriptionLength}
          </span>
        </p>
        <form className="w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 p-2 w-full border rounded-lg"
            required
          />
          <select
            onChange={handleChange}
            defaultValue=""
            className="mb-4 p-2 w-full border rounded-lg"
            required
          >
            <option value="" disabled>
              Select subscription length
            </option>
            <option value={product.dayprice}>Day €{product.dayprice},-</option>
            <option value={product.weekprice}>
              Week €{product.weekprice},-
            </option>
            <option value={product.monthprice}>
              Month €{product.monthprice},-
            </option>
            <option value={product.lifetimeprice}>
              Lifetime €{product.lifetimeprice},-
            </option>
          </select>
          <div className="flex justify-center">
            {/* <CardElement className="mb-4 p-2 w-full border rounded" /> */}
            <button
              type="submit"
              className="border-2 rounded-lg font-bold duration-200 px-4 py-2 border-mainBlue bg-mainBlue text-white hover:bg-mainBlue/80 w-full"
            >
              Koop nu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDetail;
