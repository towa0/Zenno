import { Link } from "react-router-dom";

const Questions = () => {
  return (
    <section className="w-full h-[50vh] flex justify-center items-center">
      <h1 className="font-bold text-3xl text-mainDark">
        Vragen? stel ze{" "}
        <span className="underline text-mainBlue">
          <Link to={"/contact"}>hier.</Link>
        </span>
      </h1>
    </section>
  );
};

export default Questions;
