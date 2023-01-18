import React from "react";

export default function () {
  return (
    <div>
      <div className="navBar">
        <h1>
          <span className="colorGreen">T</span>odo <span className="colorGreen">H</span>anger<span className="subscript">Your personal todo app</span>
        </h1>
        <div className="login">
          <button className="loginBtn">Login</button>
          <button className="feedbackBtn">Feedback</button>
        </div>
      </div>
    </div>
  );
}
