import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-[15vh] rounded-lg bg-mainBlue mt-[40vh] flex items-center justify-center">
      <ul className="flex justify-center space-x-4 sm:space-x-8 text-white font-bold text-sm">
        <li className="list-none">
          <Link className="hover:underline">Home</Link>
        </li>
        <li className="list-none">
          <Link className="hover:underline " to={"/apps"}>
            Apps
          </Link>
        </li>
        <li className="list-none">
          <Link className="hover:underline" to={"/over-ons"}>
            Over ons
          </Link>
        </li>
        <li className="list-none">
          <Link className="hover:underline" to={"/contact"}>
            Contact
          </Link>
        </li>
        <li className="list-none">
          <Link className="hover:underline" to={"/terms-and-conditions"}>
            Terms & Conditions
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
