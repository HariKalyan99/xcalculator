import React from 'react'

const CalciDisplay = ({displayCalc,keypadValue}) => {
  return (
    <div>
        <input type="text" readOnly value={displayCalc}/>
        <input type="button" name='clear' value='clear' onClick={() => keypadValue("D")}/>
    </div>
  )
}

export default CalciDisplay