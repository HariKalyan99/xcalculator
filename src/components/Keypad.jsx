import React from 'react'

const Keypad = ({keypadValue}) => {
    const keys =  ['7','8','9','+','4','5','6','-','1','2','3','*','C','0','=','/']
  return (
    <div style={{display: "flex", width: "400px", height: "400px", flexWrap: 'wrap'}}>
        {keys.map((key, ind) => (
            <button key={ind} style={{height: "50px", width: "50px", margin: "20px", borderRadius: "8px"}} onClick={() => keypadValue(key)}> <h2>{key}</h2> </button>
        ))}
    </div>
  )
}

export default Keypad