import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return (
    <h3>MyApp from Main file</h3>
  )
}

const anotherElement = (<a href='https://google.com' target='_blank'>Visit for Google</a>);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // MyApp()          //We can also call it like this,if there is no fragment.In
                        // render we can acces only one member if ther is no fragments
    anotherElement      //Then we can also access a function expression also it works only if no fragments are used 
  
)
