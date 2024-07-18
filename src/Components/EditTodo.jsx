import React, { useState } from "react";

const EditTodo = ({ todo, onsubmit, id }) => {
  const [editTodo, setEditTodo] = useState(todo);

  const changeHandler = (event) => {
    setEditTodo(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    onsubmit(id, editTodo);
    // Update the todo
  };
  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-row items-center space-x-3"
    >
      <label className="text-brightBlue font-bold text-sm">Edit Mode: </label>
      <input
        type="text"
        onChange={changeHandler}
        value={editTodo}
        className="bg-varyLightGray dark:bg-veryDarkDesaturatedBlue text-sm capitalize md:text-md text-veryDarkDesaturatedBlue dark:text-varyLightGrayishBlue focus:outline-none"
        placeholder="Edit todo ..."
      />
    </form>
  );
};

export default EditTodo;
