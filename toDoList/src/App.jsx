import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  //date functions
  // how make update ever so often?
  let date = new Date();

  let day = date.getDate();

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let dayOfWeek = days[date.getDay()];

  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let month = months[date.getMonth()];

  return (
    <>
      <div id="container">
        {/* date */}
        <div id="date" class="card">
          <h1>{dayOfWeek}</h1>
          <div id="dateCircle">
            {day}
          </div>
          <h2>{month}</h2>
        </div>

        {/* input field and add button */}
        <div id="input" class="card">
          <form action="POST" name="taskForm" id="taskForm">
            {/* <label for=""></label> */}
            <input type="text" name="task_input" id="task_input" />
            
          </form>
          
        </div>
         <button name="addButton" id="addButton">+</button>
       

        {/* task list (limit it) */}
        <div id="list" class="card"></div>
      </div>
    </>
  );
}

export default App;
