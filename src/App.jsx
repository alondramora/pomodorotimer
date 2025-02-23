import { useState } from "react";
import "./App.css";
import Button from "./Button";
import Timer from "./Timer";

function App() {
  const [timerValue, setTimerValue] = useState(20);

  function handleStart() {
    console.log("start timer");
    setTimerValue(timerValue - 1);
  }
  function handlePause() {
    console.log("pause timer");
  }
  function handleStop() {
    console.log("stop timer");
  }

  return (
    <>
      <h1>Pomodoro Timer 🍅</h1>
      {/* value is a prop that we pass to the Timer component, this holds the
      timerValue value. A prop can be called anything just as long as we
      reference it that same way in the component. See Timer component. */}
      <Timer value={timerValue} />
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
