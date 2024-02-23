//There are rules for Writing components
// 1. Component first letter should be capital
// 2. only single tag can written (wrapped) 
// for multiple tags  use 
// <> 
// <h1> <h2> <h3> .... etc
 // </>
 // <> Wrap your tags in this fragments </> 
 

import Touch from './Touch'

function MyButton(){
  return (
    <button>I am Button</button>
  )
} 

function App() {
  return (
    <>
      <h1>Hello i am Mahiboob</h1>
      <h2>Welcom to React</h2>
      <MyButton />
      <Touch />

    </>
  );
}

export default App;
