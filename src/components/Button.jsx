import { NavLink } from "react-router-dom";

const Button = ({ to, label, primary }) => {
  const baseStyle = "border-2 rounded-xl font-bold duration-200 px-4 py-2";
  const primaryStyle =
    "border-mainBlue bg-mainBlue text-white hover:bg-mainBlue/80";
  const secondaryStyle =
    "text-mainBlue border-2 border-mainBlue hover:bg-mainBlue hover:text-white";

  return (
    <NavLink to={to}>
      <button
        className={`${baseStyle} ${primary ? primaryStyle : secondaryStyle}`}
      >
        {label}
      </button>
    </NavLink>
  );
};

export default Button;
