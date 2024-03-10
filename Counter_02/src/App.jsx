import './App.css'

import { useState } from 'react'

function App() {
  let [count,setCount]=useState(0)
  
  let add = () =>{
      
      setCount(count+1);
    
  }

  let remove = () =>{
    if(count>=1){
      setCount(count-1);
    }
    else{
      setCount(count=0)    
    }
  }
  
  return (
    <>
      <h1>Mahiboob Nadaf</h1>
      <h2>Counter : {count}</h2>
      <h2>Counter : {count}</h2>
      <button onClick={add}>Increment</button>
      <button onClick={remove}>Decrement</button>
      <br />
    </>
  )
}

export default  App
