import { useState } from 'react'
import './App.css'
import Button from './Button'

function App() {

const [timerCount, setTimerCount] = useState(10);


  function handleStart(){
    console.log('start timer')
    startCountdown(10);
  }

  function startCountdown(seconds){
    let counter = seconds;

    const interval = setInterval(() => {
      console.log(counter);
      counter--;
      setTimerCount(counter);
      if(counter < 1 ){
        clearInterval(interval)
        setTimerCount('Time is up!')
        console.log('stop timer')

        setTimeout(() => {
          setTimerCount(10);
        }, 3000)
      }
    },1000);
  };


return (
    <>
    <h1>Pomodoro Timer 🍅</h1>
    <div className="mode-buttons-container">
      <button className="mode-buttons">Pomodoro</button>
      <button className="mode-buttons">Short Break</button>
      <button className="mode-buttons">Long Break</button>
    </div>
    <p id="displayTime">{timerCount}</p>
    <Button onClick={handleStart}>Start Timer</Button>
      
    </>
  )
}

export default App
