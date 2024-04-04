import { useState } from 'react'


function App() {
  const [color, setColor] = useState('olive')

  return (
    
      <div className='h-screen w-full border-2 border-black' style={{backgroundColor: color}}> 
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 rounded border-2 border-black'> Rasool </div>
      </div>
    
    
   
  )
}

export default App
