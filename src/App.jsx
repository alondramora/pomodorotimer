import { useState } from "react";
import "./App.css";
import Button from "./Button";
import Timer from "./Timer";

function App() {
  const [timerMins, setTimerMins] = useState(20);
  const [timerSecs, setTimerSecs] = useState("00");
  const [isRunning, setIsRunning] = useState(false);

  function handleStart() {
    setIsRunning(true);
  }
  function handlePause() {
    console.log("pause timer");
  }
  function handleReset() {
    setTimerMins(20);
    setTimerSecs("00");
    setIsRunning(false);
  }

  return (
    <>
      <h1>Pomodoro Timer 🍅</h1>
      {/* mins/secs are props that we pass to the Timer component, this holds the
      timerMins/timerSecs values. A prop can be called anything just as long as we
      reference it that same way in the component. See Timer component. */}
      <Timer mins={timerMins} secs={timerSecs} />
      <div className="mode-buttons-container">
        <Button onClick={handleStart} className="mode-buttons">
          Start Timer
        </Button>
        <Button onClick={handlePause} className="mode-buttons">
          Pause Timer
        </Button>
        <Button onClick={handleReset} className="mode-buttons">
          Reset Timer
        </Button>
      </div>
    </>
  );
}

export default App;
