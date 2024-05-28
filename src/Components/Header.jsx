const Header = (props) => {
  return (
    <div
      className={`h-64 md:h-80 ${props.onChangeTheme ? "dark" : ""}`}
      id="header"
    ></div>
  );
};

export default Header;
