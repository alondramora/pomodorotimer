import { useState } from 'react'
import './App.css'
import Button from './Button'

function App() {

  // 1. when the start timer button is clicked, this function will execute and run the startCountdown function
  function handleStart(){
    console.log('start timer')
    startCountdown(5);
  }

  // 2. startCountdown takes a numeber "seconds" and stores it in "counter"
    // we use setInterval to function to console log what the counter value is, and then decrement that by 1,
    // then every 1 second, this function runs again until the value is less than 0
    // once value is less than 0, we clearInterval, stopping the interval function from running
  function startCountdown(seconds){
    let counter = seconds;

    const interval = setInterval(() => {
      console.log(counter);
      counter--;

      if(counter < 0){
        clearInterval(interval)
        console.log('stop timer')
      }
    },1000);
  };


return (
    <>
    <div className="mode-buttons-container">
      <button className="mode-buttons">Pomodoro</button>
      <button className="mode-buttons">Short Break</button>
      <button className="mode-buttons">Long Break</button>
    </div>
    <p id="displayTime">5:00</p>
    <Button onClick={handleStart}>Start Timer</Button>
      
    </>
  )
}

export default App
