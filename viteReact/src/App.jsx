//There are rules for Writing components
// 1. Component first letter should be capital
// 2. only single tag can written (wrapped) 
// for multiple tags  use 
// <> 
// <h1> <h2> <h3> .... etc
 // </>
 // <> Wrap your tags in this fragments </> 

import Touch from './Touch'

function App() {
  const name = "Mahiboob"         // It is javascript variable here , when you access this name in render via 
                                // using {} then its called Evaluated Expression .bcoz its the final value.
  return (
    <>
      <h1> Mahiboob with Vite</h1>
      <Touch />
      {name}
    </>
  );
}

export default App;
