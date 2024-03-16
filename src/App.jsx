import { useState } from 'react'
import './App.css'
import Button from './Button'

function App() {
  // start timer
  function handleStart(){
    console.log('timer started')
  }
  //end timer
  function handleEnd(){
    console.log('timer ended')
  }

return (
    <>
      <h1>Pomodoro Timer</h1>
      <Button onClick={handleStart}>Start Timer</Button>
      <Button onClick={handleEnd}>End Timer</Button>
      
    </>
  )
}

export default App
