import './App.css'

import { useState } from 'react'

function App({increment}) {
  let [count,setCount]=useState(0)
  let add = () =>{
    setCount(count+increment);
    console.log("Count :"+count)
  }
  let remove = (i=1) =>{
    setCount(count-increment);
    console.log("Count :"+count)
  }

  return (
    <>
      <h1>Mahiboob Nadaf</h1>
      <h2>Counter : {count}</h2>
      <button onClick={add}>Increment</button>
      <button onClick={remove}>Decrement</button>
      <br />
    </>
  )
}

export default  App
