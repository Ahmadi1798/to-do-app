import React from "react";
import { useState } from "react";
import cross from "../images/icon-cross.svg";
import tick from "../images/icon-check.svg";
import edit from "../images/icons8-edit-192.png";
import EditTodo from "./EditTodo";

const InputArea = (props) => {
  const [isDone, setIsDone] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const clickHandler = () => {
    setIsDone(true);
    let completedTodo = props.todo;
    props.onAddCompleted(completedTodo);
  };
  const editClickHandler = () => {
    setIsEditing(!isEditing);
  };

  const deleteToDo = () => {
    props.onDelete(props.id);
  };

  const handleSubmit = (id, editedtodo) => {
    setIsEditing(false);
    props.onEdit(id, editedtodo);
  };

  return (
    <div className="inputArea-container">
      <div className=" flex flex-row items-center space-x-4 p-2">
        {/* IsDone Circle  */}
        <div
          onClick={clickHandler}
          className="isDone-circle"
          style={{
            border: isDone && "none",
          }}
        >
          {isDone && (
            <div className="tick-container">
              <div className="absolute bottom-2 left-2">
                <img src={tick} alt="" width="10px" height="10px" />
              </div>
            </div>
          )}
        </div>
        {isEditing ? (
          <EditTodo todo={props.todo} onsubmit={handleSubmit} id={props.id} />
        ) : (
          <p
            className=" text-sm capitalize md:text-md text-veryDarkDesaturatedBlue dark:text-varyLightGrayishBlue"
            style={{
              textDecoration: isDone && "line-through",
              color: isDone && "hsl(233, 11%, 84%)",
            }}
          >
            {props.todo}
          </p>
        )}
      </div>
      <div>
        {props.cross ? null : (
          <button
            className="p-1  duration-200 hover:scale-125 hover:rotate-90"
            onClick={deleteToDo}
          >
            <img src={cross} alt="" />
          </button>
        )}
        {props.cross && (
          <button
            onClick={editClickHandler}
            className="p-1  duration-200 hover:scale-125"
          >
            <img src={edit} className="h-6" alt="" />
          </button>
        )}
      </div>
    </div>
  );
};

export default InputArea;
