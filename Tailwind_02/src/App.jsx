import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'> Tailwind Test</h1>
      <div><figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img className="w-24 h-24 rounded-full" src="https://images.pexels.com/photos/9217804/pexels-photo-9217804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512" />
            <div className="pt-6 space-y-4">
              <blockquote>
                <p className="text-lg">
                  “Tailwind CSS is the only framework that I've seen scale
                  on large teams. It’s easy to customize, adapts to any design,
                  and the build size is tiny.”
                </p>
              </blockquote>
              <figcaption>
                <div>
                  Sarah Dayan
                </div>
                <div>
                  Staff Engineer, Algolia
                </div>
              </figcaption>
            </div>
          </figure>
      </div>
    </>
  )
}

export default App
