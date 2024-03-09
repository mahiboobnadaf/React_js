import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return (
    <h3>MyApp from Main file</h3>
  )
}

const anotherElement = (<a href='https://google.com' target='_blank'>Visit for Google</a>);

const reactElement = React.createElement(
      'a',
      {href:'https://google.com',target:'_blank'},
      "Click me Click me Now"
      )

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // MyApp()          //We can also call it like this,if there is no fragment.In
                        // render we can acces only one member if ther is no fragments
    // anotherElement      //Then we can also access a function expression also it works only if no fragments are used 
    
    reactElement      // Via this method we can access directly through objects provided by React. 
                      // the same this happens when we create tags in components , tags will be converted into TreeGraph structure

)


