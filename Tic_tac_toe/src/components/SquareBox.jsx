import "../App.css"
import { useState } from "react"

    function Square(){
        let [value,setValue] = useState(null)
        let [turn,setTurn] = useState(null)

        
        function handleClick(){
            if(value=='X'){
                setValue('0')
            }
            else if(value=='O'){
                setValue('X')
            }
            else{
                setValue(value='X')
            }
            console.log(value)
           
        }  
             
        
        
        return (
            <button className='Boxheight' onClick={handleClick}>{value}</button>
        )
    }

export default Square