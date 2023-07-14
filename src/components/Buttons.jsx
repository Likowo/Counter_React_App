import React from 'react'

function Buttons(props) {
    // props is a placeholder and the actual props are addone and minusOne.
     // To destructure, pass the props in to the parenthesis within curly braces i.e Function Button ( {addOne, minusOne})
  return (
    <div>
      <button onClick={props.addOne} > Add One </button>
      <button onClick={props.minusOne}> Minus One </button>
    </div>
  )
}

export default Buttons