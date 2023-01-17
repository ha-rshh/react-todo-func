import React from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const App = () => {
  return (
    <>
      <Header />
      <div className="app">
        <div className="container">
          <Form />
          <div className="calendarContainer">
          <Calendar />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
