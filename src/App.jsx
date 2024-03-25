import { useState } from 'react'
import './App.css'
import Button from './Button'

function App() {

// const [timerCount, setTimerCount] = useState(10);
const [minutes, setMinutes] = useState(15);
const [seconds, setSeconds] = useState(15)
const [startButtonCopy, setStartButtonCopy] = useState('Start Timer')
const [buttonToggle, setButtonToggle] = useState(true)


  function handleStart(){
    // find a way to toggle the timer button copy when we click
    console.log('start timer')
    // startCountdown(10);
      startCountdownMinsAndSecs(15 , 15)
  }

  function addLeadingZero(n){
    return (n < 10 ? '0': '') + n;
  }

  function startCountdownMinsAndSecs(minutes, seconds){
    let mins = minutes;
    let secs = seconds;

    
    // seconds are counting down and then resetting at 59 when they hit zero
    //Need to figure out how to decrement the minutes when the seconds get to 0
    const interval = setInterval(() => {
     
      secs--;
      setSeconds(secs);

      if (secs < 1){
        setSeconds(59)
      }
    
      // if (secs < 1){
      //   mins--;
      //   setMinutes(mins);
      //   setSeconds(59)
      //   if (mins == 0 && secs == 0){
      //     clearInterval(interval)

      //   }
      // }
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
    <p id="minutes-and-seconds">{minutes}:{addLeadingZero(seconds)}</p>
    <Button onClick={handleStart}>{startButtonCopy}</Button>
      
    </>
  )
}

export default App
