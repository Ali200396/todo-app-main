import React from "react";
import { TodosContext } from "../../ContextProvider";

const Filtering = (props) => {
  const { darkMode, todos, setTodos } = React.useContext(TodosContext);
  const { active, toggleActiv } = props;

  const deleteAll = () => {
    setTodos(todos.filter((todoItem) => todoItem.checked !== true));
  };

  return (
    <div className="row flex control">
      <span className={`number-item ${darkMode ? "dark" : "light"}`}>
        {" "}
        {todos.filter((todo) => todo.checked === false).length} Items left
      </span>
      <div className={`filter-item ${darkMode ? "dark" : "light"}`}>
        {["all", "active", "completed"].map((control) => (
          <React.Fragment key={Math.random()}>
            <button
              type="button"
              className={`${darkMode ? "dark" : "light"} ${
                active === control ? "active" : "nn"
              }`}
              onClick={() => toggleActiv(control)}
            >
              {control}
            </button>
          </React.Fragment>
        ))}
      </div>
      <button
        className={`clear-all ${darkMode ? "dark" : "light"}`}
        type="butoon"
        onClick={deleteAll}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default Filtering;
