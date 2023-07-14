import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; //use to update and track data wheen needed
import Buttons from './components/Buttons'


function App() {
  //initializing the useState
  const [count, setCount] = useState(0)
  const [evenCount, setEvenCount] = useState(0)
  const[color, setColor] = useState('even')
  //count is the variable that tells us what will return once the fxn runs while setCount updates the data in the counter
  console.log(count)
// now create any fxns needed. Fxns always come before the return portion
  const addOne = () => {
    setCount(count +1)
    if((count +1) %2 === 0){
       setEvenCount(evenCount +1)
       setColor('even')
    }else {
      setColor('odd')
    }
  }

  const minusOne = () => {
    setCount(count -1)
    if((count +1) %2 === 0){
      setEvenCount(evenCount +1)
      setColor('even')
   }else{
    setColor('odd')
   }
   
  }

  return (
    <div className="App">
      <h1>Counter</h1>
      <h3> Single Count: <p id={color}> {count} </p> 

       </h3>
      
      <h3> Even Count :{evenCount} </h3>
      <Buttons addOne={addOne} minusOne={minusOne}/>
    </div>
  );
}

export default App;

//
{/* <h3> Single Count: {count %2 === 0 ? <p id='even' > {count} </p>: <p id='odd' > {count} </p>} 
</h3> */}

{/* <button onClick={addOne} > Add One </button>
      <button onClick={minusOne} > Minus One </button> */}