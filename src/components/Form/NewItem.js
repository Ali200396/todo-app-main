import React from "react";
import "./NewItem.scss";

import { TodosContext } from "./../../ContextProvider";

const NewItem = () => {
  const { setTodos, darkMode } = React.useContext(TodosContext);
  const [newTodo, setNewTodo] = React.useState("");

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };
  const addNewItem = () => {
    let newItem = {};
    if (newTodo !== "") {
      newItem.id = Math.random();
      newItem.label = newTodo;
      newItem.checked = false;
      setTodos((current) => [...current, newItem]);
      setNewTodo("");
    }
  };
  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      addNewItem();
    }
  };
  return (
    <>
      <section className={`section-form flex ${darkMode ? "dark" : "light"}`}>
        <div>
          <input
            type="text"
            placeholder="Create a new todo..."
            className={`${darkMode ? "dark" : "light"}`}
            value={newTodo}
            onChange={handleChange}
            onKeyUp={handleKeyUp}
          />
        </div>

        <button
          className={`add ${darkMode ? "dark" : "light"}`}
          onClick={addNewItem}
        >
          add
        </button>
      </section>
    </>
  );
};

export default NewItem;
