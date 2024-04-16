import { RiDoubleQuotesL } from "react-icons/ri";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="mb-8 rounded-lg shadow-xl border-gray-300 bg-background/30 backdrop-blur-md">
      <div className="relative z-20 p-8 rounded-xl">
        <div className="flex items-center mb-5 gap-x-4">
          <div className="relative w-24 h-24 rounded-full">
            <span className="absolute bottom-0 right-0 inline-block p-1 text-xs text-white bg-mainBlue rounded-full">
              <RiDoubleQuotesL className="bg-transparent" size={20} />
            </span>
            <img
              className="object-cover w-full h-full rounded-full"
              src={testimonial.image}
              alt={`testimonial-user-${testimonial.id}`}
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-lg font-bold text-black">{testimonial.name}</h2>
            <span className="flex mt-2 text-orange-500 gap-x-0.5">
              {Array.from({ length: testimonial.rating }, (_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  className="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              ))}
            </span>
          </div>
        </div>
        <p className="text-sm text-gray-700 leading-tight">
          {testimonial.content}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
