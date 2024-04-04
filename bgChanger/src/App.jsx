import { useState } from 'react'


function App() {
  const [color, setColor] = useState('olive')
  let whiteColor='flex flex-wrap justify-center gap-3 rounded-xl px-2 py-2 border-2 border-black bg-white'
 

  return (
    
      <div className='h-screen w-full border-2 border-black flex justify-center items-center font-semibold text-xl' style={{backgroundColor: color}}> 
        Mahiboob Nadaf
          <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 rounded  px-2'> 
              <div className='flex flex-wrap justify-center gap-3 rounded-3xl px-2 py-2 border-2 border-black bg-white items-center font-serif font-bold'> 
                Select Color to Change :
                <button onClick={()=>setColor("red")} className='px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>Red</button>
                <button onClick={()=>setColor("green")} className='px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}>Green</button>
                <button onClick={()=>setColor("yellow")} className='px-4 py-1 rounded-full  shadow-lg' style={{backgroundColor:"yellow"}}>Yellow</button>
                <button onClick={()=>setColor("gray")} className='px-4 py-1 rounded-full  shadow-lg' style={{backgroundColor:"gray"}}>Gray</button>
              
              </div>
              {/* <div className={redColor}>red</div>
              <div className={greenColor}>green</div>
              <div className={yellowColor}>yellow</div>
              <div className={silverColor}>silver</div> */}
          </div>
      </div>
    
    
   
  )
}

export default App
