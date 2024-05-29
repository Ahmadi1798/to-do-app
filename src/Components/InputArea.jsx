import React from "react";
import { useState } from "react";
import cross from "../images/icon-cross.svg";
import tick from "../images/icon-check.svg";

const InputArea = (props) => {
  const [isDone, setIsDone] = useState(false);

  const clickHandler = () => {
    setIsDone(true);
    let completedTodo = props.todo;
    props.onAddCompleted(completedTodo);
  };

  const deleteToDo = () => {
    props.onDelete(props.id);
  };
  return (
    <div className="inputArea-container ">
      <div
        onClick={clickHandler}
        className=" flex flex-row items-center space-x-4 p-2"
      >
        {/* IsDone Circle  */}
        <div
          className="isDone-circle"
          style={{
            border: isDone && "none",
          }}
        >
          {isDone && (
            <div className="tick-container">
              <div
                className="absolute bottom-2 left-2
              "
              >
                <img src={tick} alt="" width="10px" height="10px" />
              </div>
            </div>
          )}
        </div>
        <p
          className=" text-xs capitalize md:text-md text-veryDarkDesaturatedBlue dark:text-varyLightGrayishBlue"
          style={{
            textDecoration: isDone && "line-through",
            color: isDone && "hsl(233, 11%, 84%)",
          }}
        >
          {props.todo}
        </p>
      </div>
      <button
        className="p-1  duration-200 hover:scale-125 hover:rotate-90"
        onClick={deleteToDo}
      >
        <img src={cross} alt="" />
      </button>
    </div>
  );
};

export default InputArea;
