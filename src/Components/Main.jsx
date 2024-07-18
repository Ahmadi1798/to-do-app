import { useState } from "react";
import Heading from "./Heading";
import InputArea from "./InputArea";
import NewToDo from "./NewToDo";
import TrackingToDos from "./TrackingToDos";
import Footer from "./Footer";

const Main = (props) => {
  const [allTodos, setToDos] = useState([]);
  const [completedToDos, setCompletedTodo] = useState([]);
  const [cross, setCross] = useState(true);

  const [isVisible, setIsVisible] = useState(false);

  const showCompleted = (showCompleted) => {
    setIsVisible(!showCompleted);
    setCross(!cross);
    console.log(cross);
  };

  const onAddNewToDo = (newToDo) => {
    setToDos((preValue) => {
      return [...preValue, newToDo];
    });
  };
  const addCompleted = (newCompleted) => {
    setCompletedTodo((preValue) => {
      return [...preValue, newCompleted];
    });
  };

  const deletToDo = (id) => {
    setToDos((preValue) => {
      return preValue.filter((todo, index) => {
        return index !== id;
      });
    });
    setCompletedTodo((preValue) => {
      return preValue.filter((todo, index) => {
        return index !== id;
      });
    });
  };
  const editToDoById = (id, Editedtodo) => {
    const editedToDo = allTodos.map((todo, index) => {
      if (id === index) return { ...todo, input: Editedtodo };
      return todo;
    });
    setToDos(editedToDo);
    console.log("Edit todo with id " + id + " edited to", Editedtodo);
  };
  const deleteCompleted = () => {
    setToDos([]);
    setCompletedTodo([]);
  };
  const transferToMain = (isLight) => {
    props.toHeader(isLight);
  };

  return (
    <div className="main-container">
      {/* Flex Container */}
      <div className="flex flex-col">
        <Heading onChangeBgImage={transferToMain} />
        <NewToDo onAdd={onAddNewToDo} />

        <div className=" scrollbar md:max-h-96 max-h-72 overflow-y-scroll my-3 ml-4">
          {isVisible
            ? completedToDos.map((todo, index) => {
                return (
                  <InputArea
                    key={index}
                    id={index}
                    todo={todo}
                    onDelete={deletToDo}
                    onAddCompleted={addCompleted}
                    cross={cross}
                  />
                );
              })
            : allTodos.map((todo, index) => {
                return (
                  <InputArea
                    key={index}
                    id={index}
                    todo={todo.input}
                    onDelete={deletToDo}
                    onAddCompleted={addCompleted}
                    cross={cross}
                    onEdit={editToDoById}
                  />
                );
              })}
        </div>

        {allTodos.length !== 0 && (
          <TrackingToDos
            items={allTodos.length - completedToDos.length}
            onDelete={deleteCompleted}
            showCompletedTasks={showCompleted}
          />
        )}
        {allTodos.length !== 0 && <Footer showCompletedTasks={showCompleted} />}
      </div>
    </div>
  );
};

export default Main;
