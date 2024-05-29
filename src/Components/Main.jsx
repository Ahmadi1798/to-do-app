import { useState } from "react";
import Heading from "./Heading";
import InputArea from "./InputArea";
import NewToDo from "./NewToDo";
import TrackingToDos from "./TrackingToDos";
import Footer from "./Footer";

const Main = (props) => {
  const [allTodos, setToDos] = useState([]);
  const [completedToDos, setCompletedTodo] = useState([]);

  const [isVisible, setIsVisible] = useState(false);

  const showCompleted = (showCompleted) => {
    setIsVisible(!showCompleted);
    console.log(isVisible);
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
    console.log(completedToDos);
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
        <div className="scrollbar md:max-h-96 max-h-64 w-full overflow-y-scroll my-3 px-2 ml-2 ">
          {isVisible
            ? completedToDos.map((todo, index) => {
                return (
                  <InputArea
                    key={index}
                    id={index}
                    todo={todo}
                    onDelete={deletToDo}
                    onAddCompleted={addCompleted}
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
