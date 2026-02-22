import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleSubmit() {
    //whats max length?
    if (
      tasks.length >= 12 ||
      inputValue.trim() === "" ||
      inputValue.trim().length > 200
    )
      return;
    //add error message?

    setTasks([...tasks, { text: inputValue, done: false }]);
    setInputValue("");
  }

  function toggleTask(index) {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, done: !task.done } : task,
      ),
    );
  }

  function clearTasks() {
    setTasks([]);
  }

  let total = 0;
  let done = 0;
  tasks.map((task) => {
    total = task.text != "" ? total + 1 : total;
    done = task ? (task.done ? done + 1 : done) : done;
  });
  console.log("total: ", total);
  console.log("done: ", done);
  let progressedBarHeight = total == 0 ? 0 : (done / total) * 100;

  //date functions
  // how make update ever so often? i think it does automatically?
  let date = new Date();

  let day = date.getDate();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayOfWeek = days[date.getDay()];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[date.getMonth()];

  return (
    <>
      <div id="container">
        {/* date */}
        <div id="date" class="card">
          <h1>{dayOfWeek}</h1>
          <div id="dateCircle">{day}</div>
          <h2>{month}</h2>
        </div>

        {/* input field and add button */}
        <div id="input" class="card">
          <form action="POST" name="taskForm" id="taskForm">
            {/* <label for=""></label> */}
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
              id="task_input"
              placeholder="Type task here!"
            />
          </form>
        </div>
        <button onClick={handleSubmit} name="addButton" id="addButton">
          +
        </button>
        <button id="clearButton" onClick={clearTasks}>
          Clear Tasks
        </button>

        {/* task list (limit it) */}
        <div id="list" class="card">
          <ul>
            {Array.from({ length: 12 }, (_, index) => (
              <li
                key={index}
                onClick={() => toggleTask(index)}
                style={{
                  borderRadius:
                    index === 0
                      ? "4rem 4rem 0 0"
                      : index === 11
                        ? "0 0 4rem 4rem"
                        : "0",
                  textDecoration: tasks[index]?.done ? "line-through" : "none",
                  color: tasks[index]?.done ? "grey" : "#3D3D3D",
                }}
              >
                {tasks[index] ? tasks[index].text : ""}
              </li>
            ))}
          </ul>
        </div>
        <div id="progress" class="card">
          <div id="progressBar">
            <div id="fullBar" class="card">
              <div
                id="progressedBar"
                class="card"
                style={{ height: `${progressedBarHeight}%` }}
              ></div>
              <span id="progressTitle">Progress</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
