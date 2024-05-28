import React, { useState } from "react";
import { Fab, Zoom } from "@mui/material";
import { Add } from "@mui/icons-material";

const NewToDo = (props) => {
  const [newToDo, setNewToDo] = useState({
    input: "",
  });

  const changeHandler = (event) => {
    const value = event.target.value;
    setNewToDo((preValue) => {
      return {
        ...preValue,
        input: [value],
      };
    });
  };

  const clickHandler = () => {
    props.onAdd(newToDo);
    setNewToDo(() => {
      return {
        input: "",
      };
    });
  };
  return (
    <div className="newtodo-container">
      <input
        onChange={changeHandler}
        className="w-full bg-varyLightGray text-veryDarkGrayishBlue1 capitalize dark:text-varyLightGrayishBlue
       focus:outline-none placeholder:text-veryLightGray placeholder:text-xs md:placeholder:text-sm pl-2 dark:bg-veryDarkDesaturatedBlue"
        placeholder="Create a new todo..."
        type="text"
        value={newToDo.input}
      />
      <Zoom in="true">
        <Fab onClick={clickHandler} size="small" color="secondary">
          <Add />
        </Fab>
      </Zoom>
    </div>
  );
};

export default NewToDo;
