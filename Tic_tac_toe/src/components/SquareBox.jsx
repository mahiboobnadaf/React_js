import "../App.css"
import { useState } from "react"

let prev=''

    function Square(count){
        let [value,setValue] = useState('')
    
        function handleClick(){
           if(prev =='X' && value==''){
            setValue(value='O')
            prev=value

           }
           else{
            prev='X'
            setValue(value='X')
            prev=value
           }
        }  
        
        return (
            <button className='Boxheight' value={count.value} onClick={handleClick}>{value}</button>
        )
    }

export default Square