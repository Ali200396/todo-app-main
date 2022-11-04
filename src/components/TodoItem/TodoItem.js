import React from "react";
import "./TodoItem.scss";
import Filtering from "./Filtering";
import { TodosContext } from "../../ContextProvider";

const TodoItem = () => {
  const { darkMode, todos, setTodos } = React.useContext(TodosContext);
  const [active, setActive] = React.useState("all");
  const [showAllTasks, setShowAllTasks] = React.useState(true);
  const [showActiveTasks, setShowActiveTasks] = React.useState(false);
  const [showCompletedTasks, setShowCompletedTasks] = React.useState(false);

  const handleDelete = (id) => {
    setTodos(todos.filter((todoItem) => todoItem.id !== id));
  };

  const toggleActiv = (str) => {
    setActive(str);
    if (str === "all") {
      setShowAllTasks(true);
      setShowActiveTasks(false);
      setShowCompletedTasks(false);
    } else if (str === "active") {
      setShowAllTasks(false);
      setShowActiveTasks(true);
      setShowCompletedTasks(false);
    } else {
      setShowAllTasks(false);
      setShowActiveTasks(false);
      setShowCompletedTasks(true);
    }
  };
  const toggleCheck = (id) => {
    const index = todos.findIndex((todoItem) => todoItem.id === id);
    const prevToggle = todos[index].checked;
    setTodos((current) =>
      current.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            id: item.id,
            label: item.label,
            checked: !prevToggle,
          };
        }
        return item;
      })
    );
  };
  const todosRender = (todo) => {
    return (
      <div className={`row flex ${darkMode ? "dark" : "light"}`} key={todo.id}>
        <div>
          <label style={{ display: "none" }}></label>
          <input
            type="checkbox"
            checked={todo.checked}
            aria-label="check-item"
            onChange={() => toggleCheck(todo.id)}
          />
          <label
            htmlFor="checkbox"
            className={`${darkMode ? "dark" : "light"}`}
          >
            {todo.label}
          </label>
        </div>
        <button
          type="submit"
          className={`remove-button ${darkMode ? "dark" : "light"}`}
          onClick={() => handleDelete(todo.id)}
        >
          x
        </button>
      </div>
    );
  };
  const allTasks =
    todos.length > 0 ? (
      todos.map((todo) => todosRender(todo))
    ) : (
      <p style={{ color: "#777" }}>
        {" "}
        Looks like you&apos;re absolutely free today!
      </p>
    );
  const activeTasks = todos.map((todo) =>
    !todo.checked ? todosRender(todo) : null
  );
  const completedTasks = todos.map((todo) =>
    todo.checked ? todosRender(todo) : null
  );
  return (
    <>
      <section className={`section-todo-item ${darkMode ? "dark" : "light"}`}>
        {showAllTasks ? allTasks : null}
        {showActiveTasks ? activeTasks : null}
        {showCompletedTasks ? completedTasks : null}
        <Filtering active={active} toggleActiv={toggleActiv} />
      </section>
    </>
  );
};

export default TodoItem;
