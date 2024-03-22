import { useState } from 'react'
import './App.css'
import Button from './Button'

function App() {

// const [timerCount, setTimerCount] = useState(10);
const [minutes, setMinutes] = useState(15);
const [seconds, setSeconds] = useState(0)


  function handleStart(){
    console.log('start timer')
    // startCountdown(10);
      startCountdownMinsAndSecs(15 , 0)
  }

  function startCountdownMinsAndSecs(minutes, seconds){
    let mins = minutes;
    let secs = seconds;

    const interval = setInterval(() => {
      console.log(mins + ':' + secs)
    },1000)
  }

  // function startCountdown(seconds){
  //   let counter = seconds;

  //   const interval = setInterval(() => {
  //     console.log(counter);
  //     counter--;
  //     setTimerCount(counter);
  //     if(counter < 1 ){
  //       clearInterval(interval)
  //       setTimerCount('Time is up!')
  //       console.log('stop timer')

  //       setTimeout(() => {
  //         setTimerCount(10);
  //       }, 3000)
  //     }
  //   },1000);
  // };

  /*
  PSUEDOCODE
  - Create a string that holds the minutes and seconds
    {minutes}:{seconds} example: 15:00
  - When we start the timer, start counting down the seconds until they reach zero
    once they reach zero, reset them to '00' AND decrrement the minutes by 1
    Once minutes == 0, then stop the timer and show the times up message
  */


return (
    <>
    <h1>Pomodoro Timer 🍅</h1>
    <div className="mode-buttons-container">
      <button className="mode-buttons">Pomodoro</button>
      <button className="mode-buttons">Short Break</button>
      <button className="mode-buttons">Long Break</button>
    </div>
    {/* <p id="displayTime">{timerCount}</p> */}
    <p id="minutes-and-seconds">{minutes}:{seconds}</p>
    <Button onClick={handleStart}>Start Timer</Button>
      
    </>
  )
}

export default App
