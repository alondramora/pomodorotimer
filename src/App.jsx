import { useState } from "react";
import "./App.css";
import Button from "./Button";
import Timer from "./Timer";

function App() {
  function handleStart() {
    // find a way to toggle the timer button copy when we click
    console.log("start timer");
    // startCountdown(10);
  }
  function handlePause() {
    // find a way to toggle the timer button copy when we click
    console.log("pause timer");
    // startCountdown(10);
  }
  function handleStop() {
    // find a way to toggle the timer button copy when we click
    console.log("stop timer");
    // startCountdown(10);
  }

  return (
    <>
      <h1>Pomodoro Timer 🍅</h1>
      <Timer />
      <div className="mode-buttons-container">
        <Button onClick={handleStart} className="mode-buttons">
          Start Timer
        </Button>
        <Button onClick={handlePause} className="mode-buttons">
          Pause Timer
        </Button>
        <Button onClick={handleStop} className="mode-buttons">
          Stop Timer
        </Button>
      </div>
    </>
  );
}

export default App;
