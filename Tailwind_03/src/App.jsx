
import './App.css'
import Compo from './comp1'
import Cards from './cards'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'> Tailwind Test</h1>
      <Compo />
      <Cards username="Natasha"  />
      <Cards username="Wonda"/>

    </>
  )
}

export default App
