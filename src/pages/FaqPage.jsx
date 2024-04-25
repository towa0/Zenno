import { Link } from "react-router-dom";
import FAQItems from "../components/FaqItems";
import { faqQuestions } from "../constants";
import BackgroundCircles from "../components/BackgroundCircles";

const FaqPage = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <BackgroundCircles
        circles={[
          { top: "22vh", left: "14vw", size: 135, color: "bg-blue-400" },
          { top: "55vh", left: "60vw", size: 135, color: "bg-indigo-400" },
        ]}
      />
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl ">
            Veelgestelde <span className="text-mainBlue">Vragen</span>
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500 ">
            Hier vindt u antwoorden op enkele van de meest gestelde vragen over
            onze producten en diensten.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqQuestions.map((faq) => (
            <FAQItems key={faq.id} faq={faq} />
          ))}
        </div>

        <p className="text-center text-mainDark textbase mt-9">
          Niet gevonden wat u zocht?{" "}
          <Link
            to={"/contact"}
            className="font-medium text-mainBlue transition-all duration-200  hover:underline"
          >
            Neem contact op met onze ondersteuning
          </Link>
        </p>
      </div>
    </section>
  );
};

export default FaqPage;
