import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  
  let increment = ()=>{
    
    setCount(count+1)
  } 

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // });

  let stop = ()=>{
    setCount(count-1)
  }

  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={increment}>Start</button>
      <button onClick={stop}>Stop</button>
        
    </>
  )
}

export default App
