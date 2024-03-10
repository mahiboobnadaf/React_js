import "../App.css"
import { useState } from "react"

    function Square(){
        let [value,setValue] = useState(0)
        
        function handleClick(){
            setValue(value+1)
           
            
        }
        
        return (
            <button className='Boxheight' onClick={handleClick}>{value}</button>
        )
    }

export default Square