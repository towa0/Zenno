import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-[15vh] rounded-lg bg-mainBlue/80  mt-[40vh] flex items-center justify-center">
      <ul className="flex justify-center space-x-4 text-white font-bold">
        <li className="list-none">
          <Link className="hover:underline">Home</Link>
        </li>
        <li className="list-none">
          <Link className="hover:underline">Apps</Link>
        </li>
        <li className="list-none">
          <Link className="hover:underline">About</Link>
        </li>
        <li className="list-none">
          <Link className="hover:underline">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
