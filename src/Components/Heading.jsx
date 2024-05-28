import React, { useState } from "react";
import moon from "../images/icon-moon.svg";
import sun from "../images/icon-sun.svg";

const Heading = (props) => {
  const [isLight, setIsLight] = useState(true);
  const changeTheme = () => {
    setIsLight(!isLight);
    props.onChangeBgImage(isLight);
    if (isLight) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="flex flex-row  justify-between p-3 my-2">
      <h1 className="text-2xl md:text-4xl font-bold tracking-widest text-varyLightGray uppercase">
        T o D o
      </h1>
      <div className="cursor-pointer" onClick={changeTheme}>
        <img
          src={isLight ? moon : sun}
          className="w-6 h-6 md:w-10 md:h-10"
          alt=""
        />
      </div>
    </div>
  );
};

export default Heading;
