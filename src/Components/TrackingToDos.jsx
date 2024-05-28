import React, { useState } from "react";

const TrackingToDos = (props) => {
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
    <div className="tracking-todo-container">
      <div className="p-2">
        <p className="text-sm text-darkGrayishBlue pl-1">
          <span>{props.items}</span> items left
        </p>
      </div>
      <div className="hidden md:flex md:items-center md:justify-between md:space-x-4">
        <div className="p-2">
          <button
            className={`text-xs md:text-[1rem] ${
              !isClicked ? "text-brightBlue" : "text-darkGrayishBlue"
            } border-none pr-1 active:text-veryDarkDesaturatedBlue font-bold`}
            onClick={clickHandler}
          >
            All
          </button>
        </div>
        <div className="p-2">
          <button
            className="text-xs md:text-[1rem] text-darkGrayishBlue  border-none pr-1 active:text-veryDarkDesaturatedBlue font-bold"
            onClick={showCompletedTasks}
          >
            Completed
          </button>
        </div>
      </div>
      <div className="p-2">
        <button
          onClick={props.onDelete}
          className="text-[1rem] text-darkGrayishBlue border-none pr-1 active:text-veryDarkDesaturatedBlue"
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default TrackingToDos;
