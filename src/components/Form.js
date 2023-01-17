import React from "react";
export default function Form() {
  return (
    <div className="todoContainer">
      <div className="todo__left">
        <form action="" className="todoForm">
          <div className="textInputWrapper">
            <input placeholder="Type Here" type="text" className="textInput" />
          </div>
          <button className="cssbuttons-io-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
              ></path>
            </svg>
            <span>Add</span>
          </button>
        </form>
        <ul className="allTodos">
          <li className="singleTodo">
            <span className="todoText">Learn React</span>
            <button>Edit</button>
            <button>Delete</button>
          </li>
          <li className="singleTodo">
            <span className="todoText">Learn React</span>
            <button>Edit</button>
            <button>Delete</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
