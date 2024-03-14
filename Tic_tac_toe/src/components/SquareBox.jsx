import "../App.css"
import { useState } from "react"

let prev=''
    function Square(){
        let [value,setValue] = useState(null)
    
        function handleClick(){
           if(prev =='X'){
            // prev='O'
            setValue(value='O')
            prev=value
            // console.log(prev)

           }else{
            prev='X'
            setValue(value='X')
            prev=value
            console.log(prev)

           }
        }  
            
        return (
            <button className='Boxheight' onClick={handleClick}>{value}</button>
        )
    }

export default Square