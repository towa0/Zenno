const Header = ({ textSize }) => {
  return (
    <>
      <h1 className={`font-bold text-mainDark ${textSize}`}>
        Zen<span className="text-mainBlue">no.</span>
      </h1>
    </>
  );
};

export default Header;
