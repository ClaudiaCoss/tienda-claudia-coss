import {useState} from "react"
const Contador = ()=>{
    const [count, setCount]= useState(1)
    const sumar = () =>{
        setCount(count + 1)
    }
    const restar = () =>{
        setCount(count - 1)
    }
    return (
        <div>
            <button onClick={sumar}> + </button>
            <span> {count} </span>
            <button onClick={restar}> - </button>
        </div>

    )
}

export default Contador 