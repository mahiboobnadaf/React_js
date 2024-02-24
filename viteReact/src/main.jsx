import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return (
    <h3>MyApp from Main file</h3>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <> <App />
    <MyApp /> 
     </>
  
)
