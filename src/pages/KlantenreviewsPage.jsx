import React, { useState } from "react";

import { testimonials } from "../constants/index";
import Button from "../components/Button";
import TestimonialCard from "../components/TestimonialCard";

const KlantenreviewsPage = () => {
  const [visibleTestimonials, setVisibleTestimonials] = useState(3);

  const loadMoreTestimonials = () => {
    setVisibleTestimonials((prev) => prev + 3);
  };
  return (
    <section className="max-w-6xl mx-auto min-h-screen mt-[10vh]">
      <div className="p-4 mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <h1 className="mb-4 text-2xl sm:text-4xl font-bold text-mainDark">
            Lees onze <span className="text-mainBlue">klantervaringen</span>
          </h1>
          <p className="max-w-xl text-gray-700 text-center mx-auto">
            <span className="font-bold">
              Ontdek wat onze klanten zeggen over onze software!
            </span>{" "}
            Lees over hun positieve ervaringen en ontdek waarom ze voor onze
            producten hebben gekozen. Onze software helpt professionals en
            creatievelingen hun doelen te bereiken. We kijken ernaar uit om ook
            met u samen te werken!
          </p>
        </div>
        <div className="flex">
          <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, visibleTestimonials).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
        {visibleTestimonials < testimonials.length && (
          <button onClick={loadMoreTestimonials}>
            <Button label="Toon Meer" primary={false} />
          </button>
          // fix deze dogshit button aub
        )}
      </div>
    </section>
  );
};

export default KlantenreviewsPage;
