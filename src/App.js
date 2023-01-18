import React from "react";
import "./App.css";
import Header from "./components/Header";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now}`, todo }, ...todos]);
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const deleteTodo = todos.filter((element) => element.id !== id);
    setTodos([...deleteTodo]);
  };

  // const handleCompleted = (id) =>{
  //   const addBg = todos.map((elem)=>{
  //     if(elem.id == id){
  //       document.querySelector("li").classList.toggle("green")
  //     }
  //   })
  // }
  const handleCompletedById = (id) => {
    let index;
    const updated = todos.forEach((todo, index) => {
      if (todo.id === id) {
        index = todos.indexOf(todo);
        let newArr = [
          ...todos.slice(0, index),
          ...todos.slice(index + 1),
          ...todos.slice(index, index + 1),
        ];
      }
      setTodos([updated])
    });
  };

  return (
    <>
      <Header />
      <div className="app">
        <div className="todo-container">
          <form action="" className="todoForm" onSubmit={handleSubmit}>
            <input
              type="text"
              value={todo}
              className="todoInput"
              onChange={(e) => {
                setTodo(e.target.value);
              }}
              placeholder="Add your task 😎"
            />
            <button type="submit" className="add-btn">
              Add
            </button>
          </form>
          <div className="TodoList">
          <h3>Your todos ...</h3>
          <ul className="allTodos">
            {todos.map((t) => (
              <li className="singleTodo" id="">
                <span className="todoText" key={t.id}>
                  {t.todo}
                </span>
                <button
                  className="btn"
                  onClick={() => {
                    handleCompletedById(t.id);
                  }}
                >
                  {" "}
                  ✔{" "}
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    handleDelete(t.id);
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
