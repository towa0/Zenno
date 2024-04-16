import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import Header from "./Header";
import Button from "./Button";
import navLogo from "../assets/zennoLogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? "font-bold text-mainBlue duration-200"
      : "font-bold text-mainDark hover:text-mainBlue duration-200";

  return (
    <nav className="max-w-6xl mx-auto h-[10vh] flex items-center justify-between px-4 lg:px-10">
      <img
        className="mr-3"
        src={navLogo}
        width={30}
        height={30}
        alt="ZennoLogo"
      />
      <Link to={"/"}>
        <Header textSize={"text-3xl"} />
      </Link>
      <div className="flex-grow md:flex items-center justify-center hidden lg:flex space-x-10">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/apps" className={linkClass}>
          Apps
        </NavLink>
        <NavLink to="/over-ons" className={linkClass}>
          Over ons
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          Contact
        </NavLink>
      </div>
      <div className="hidden sm:flex items-center space-x-4">
        <Button to="/log-in" label="Log in" primary={true} />
        <Button to="/register" label="Register" primary={false} />
      </div>

      <div className="lg:hidden w-full flex items-center justify-end">
        <button className="focus:outline-none" onClick={toggleMenu}>
          {menuOpen ? (
            <GrFormClose size={40} />
          ) : (
            <GiHamburgerMenu size={35} className="text-mainBlue mr-14" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 transform transition-transform ease-in duration-300">
          <div className="z-60 h-[100vh] pt-4 pl-4 space-y-8 text-mainBlue">
            <div className="flex justify-end">
              <button className=" focus:outline-none" onClick={toggleMenu}>
                <GrFormClose size={50} className="text-mainBlue mr-10 " />
              </button>
            </div>
            <NavLink
              to="/"
              className="text-4xl font-bold duration-200 block"
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/apps"
              className="text-4xl font-bold duration-200 block"
              onClick={closeMenu}
            >
              Apps
            </NavLink>
            <NavLink
              to="/over-ons"
              className="text-4xl font-bold duration-200 block"
              onClick={closeMenu}
            >
              Over ons
            </NavLink>
            <NavLink
              to="/contact"
              className="text-4xl font-bold duration-200 block"
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
