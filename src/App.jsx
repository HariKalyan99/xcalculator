import { useState } from 'react'
import './App.css'
import Keypad from './components/Keypad'
import CalciDisplay from './components/CalciDisplay';

function App() {

  const [displayCalc, setDisplayCalc] = useState("");
  const [showResult, setShowResult] = useState("");


  const keypadValue = (key) => {
      if(key !== "=" && key !== "C" && key !== "D"){
        setDisplayCalc((prev) => prev + key)
      }else if(key === "="){
        if(!displayCalc){
          setShowResult("Error");
        }else {
          setShowResult(eval(displayCalc))
        }
      }else if (key === "C"){
        setDisplayCalc("");
        setShowResult("");
      }else if(key === "D"){
        setDisplayCalc((prev) => prev.slice(0, prev.length-1));
      }
  }
  return (
    <center>
      <h1>React Calculator</h1>
      <CalciDisplay displayCalc={displayCalc} keypadValue={keypadValue}/>
      {showResult && <h1>{showResult}</h1>}
      <Keypad keypadValue={keypadValue}/>
    </center>
  )
}

export default App
