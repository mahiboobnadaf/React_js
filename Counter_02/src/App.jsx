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

  let start = (cond) =>{
    console.log(cond)
    // while(cond){
    //   setInterval(add,100)
    // }
  }
  let stop = ()=>{
    for(let i=count;count>=0)
  }
  return (
    <>
      <h1>Mahiboob Nadaf</h1>
      <h2>Counter : {count}</h2>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      {/* <h2>Counter : {count}</h2>
      <button onClick={add}>Increment</button>
      <button onClick={remove}>Decrement</button> */}
      <br />
    </>
  )
}

export default  App
