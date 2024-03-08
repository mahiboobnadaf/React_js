import './App.css'

import { useState } from 'react'

function App({increment}) {
  let [count,setCount]=useState(0)
  
  let add = () =>{
    setCount(count+increment);
  }

  let remove = () =>{
    if(count>=1){
      setCount(count-increment);
    }
    else{
      setCount(count=0)    
    }
  }

  return (
    <>
      <h1>Mahiboob Nadaf</h1>
      <h2>Counter : {count}</h2>
      <button onClick={add}>Increment</button>
      <button onClick={remove}>Decrement</button>
      <h2>Counter : {count}</h2>
      <button onClick={add}>Increment</button>
      <button onClick={remove}>Decrement</button>
      <br />
    </>
  )
}

export default  App
