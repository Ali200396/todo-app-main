import React from "react";
import Footer from "./Footer/Footer";
import NewItem from "./Form/NewItem";
import Header from "./Header/Header";
import TodoItem from "./TodoItem/TodoItem";

const Result = () => {
  return (
    <>
      <Header />
      <NewItem />
      <TodoItem />
      <Footer />
    </>
  );
};

export default Result;
