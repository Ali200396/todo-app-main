import React from "react";
import "./App.scss";
import { TodosContext } from "./ContextProvider";
import Result from "./components/Result";

const todosTemplate = [
  {
    id: 0,
    label: "Complete online JavaScript course",
    checked: true,
  },
  {
    id: 1,
    label: "Jog around the park 3x",
    checked: false,
  },
  {
    id: 2,
    label: "10 minutes meditation",
    checked: false,
  },
  {
    id: 3,
    label: "Read for 1 hour",
    checked: false,
  },
  {
    id: 4,
    label: "Pick up groceries",
    checked: false,
  },
  {
    id: 5,
    label: "Complete Todo App on Frontend Mentor",
    checked: false,
  },
];
function App() {
  const [todos, setTodos] = React.useState(todosTemplate);
  const [darkMode, setDarkMode] = React.useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main className="App">
      <div className="over"></div>
      <TodosContext.Provider value={{ todos, setTodos, darkMode, toggleTheme }}>
        <Result />
      </TodosContext.Provider>
    </main>
  );
}

export default App;
