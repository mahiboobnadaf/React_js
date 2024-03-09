import { useState } from 'react'
import './App.css'


function App() {
  let [count,setCount] = useState(0)

  let [timerId,setTimerId] = useState("")

  
  let num = count
  
  let start=()=>{
    let id = setInterval(increment,1000)
    setTimerId(id)
  }
  
  let increment=()=>{
    setCount(count+=1)
    num=num+1
    console.log(num)
  }
  
  let stop=()=>{
    // setCount(count-1)
    clearInterval(timerId)
  }
  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
        
    </>
  )
}

export default App
