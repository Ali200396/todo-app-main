import React from "react";
import { TodosContext } from "../../ContextProvider";
import "./Footer.scss";

const Footer = () => {
  const { darkMode } = React.useContext(TodosContext);
  return (
    <>
      <footer>
        <p className={`${darkMode ? "dark" : "light"}`}>
          Drag and drop to reorder list
        </p>
        <p className={`attribution ${darkMode ? "dark" : "light"}`}>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://www.frontendmentor.io/profile/Ali200396">
            Mohamed Ali
          </a>
          .
        </p>
      </footer>
    </>
  );
};

export default Footer;
