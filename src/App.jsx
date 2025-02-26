import { useState, useEffect } from "react";
import "./App.css";
import Button from "./Button";
import Timer from "./Timer";

function App() {
  const [timerMins, setTimerMins] = useState(0);
  const [timerSecs, setTimerSecs] = useState(5);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (timerSecs === 0 && timerMins === 0) return;
    if (!isRunning) return; // if isRunning is false this will not run
    const interval = setInterval(function () {
      setTimerSecs((prevTimerSecs) => {
        if (prevTimerSecs > 0) return prevTimerSecs - 1;
        if (prevTimerSecs === 0 && timerMins > 0) return 59;
        return 0;
      });

      setTimerMins((prevTimerMins) => {
        if (timerSecs === 0) return prevTimerMins - 1;

        return prevTimerMins;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, timerMins, timerSecs]);

  function handleStart() {
    setIsRunning(true);
    if (isRunning == true || (timerMins == 0 && timerSecs == 0)) return;
    if (timerMins < 0 || timerSecs < 0) return;
    // Reference video https://www.youtube.com/watch?v=kqK3tD7XHxA
  }
  function handlePause() {
    if (isRunning == false) return;
    setIsRunning((prev) => !prev);
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
