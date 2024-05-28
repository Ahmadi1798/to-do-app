import React, { useState } from "react";

const Footer = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const showCompletedTasks = () => {
    setIsClicked(!isClicked);
    props.showCompletedTasks(isClicked);
  };

  const clickHandler = () => {
    setIsClicked(false);
    props.showCompletedTasks(isClicked);
  };

  return (
    <div className="footer-container">
      <div className="footer-flex-container">
        <div className="p-2">
          <button
            className={`text-[1rem] ${
              !isClicked ? "text-brightBlue" : "text-darkGrayishBlue"
            } border-none pr-1 active:text-veryDarkDesaturatedBlue font-bold`}
            onClick={clickHandler}
          >
            All
          </button>
        </div>

        <div className="p-2">
          <button
            className="text-[1rem] text-darkGrayishBlue border-none pr-1 active:text-veryDarkDesaturatedBlue font-bold"
            onClick={showCompletedTasks}
          >
            Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
