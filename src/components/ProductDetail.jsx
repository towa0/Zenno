import React, { useState } from "react";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import { useNavigate } from "react-router-dom";

const ProductDetail = ({ product }) => {
  const [subscription, setSubscription] = useState({
    price: 0,
    subscriptionLength: "",
  });
  const [email, setEmail] = useState("");
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
    <div className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
      <p className="mb-4">{product.description}</p>
      <img src={product.image} className="mb-4 max-w-xs" alt={product.title} />
      <p className="mb-1">Price: €{subscription.price},-</p>
      <p className="mb-4">
        Subscription length: {subscription.subscriptionLength}
      </p>
      <form className="w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 p-2 w-full border rounded"
          required
        />
        <select
          onChange={handleChange}
          defaultValue=""
          className="mb-4 p-2 w-full border rounded"
          required
        >
          <option value="" disabled>
            Select subscription length
          </option>
          <option value={product.dayprice}>Day €{product.dayprice},-</option>
          <option value={product.weekprice}>Week €{product.weekprice},-</option>
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
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full"
          >
            Buy Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductDetail;
