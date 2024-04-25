import React, { useState } from "react";

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="rounded-lg duration-200 border-gray-300 bg-background/30 backdrop-blur-md shadow-lg">
      <button
        onClick={toggleOpen}
        className="flex items-center justify-between w-full px-4 py-5 sm:p-6 focus:outline-none"
      >
        <h2 className="text-xl font-semibold text-black">{faq.question}</h2>
        <svg
          className={`w-6 h-6 transform transition-transform  ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="px-4 pb-5 sm:px-6 sm:pb-6">
          <p className="text-gray-500 ">{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
