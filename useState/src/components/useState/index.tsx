import {useState} from "react";

const UseState= ()=>{
    const [state,setState] = useState<number>(0);
    const handleClick = ():void=>{
        //setState(state+1);
        //setState(()=>state+1);
        //if new state value depends on previous state, pass a function to the setter function
        setState((prevValue)=>prevValue+1)

    }
    const handleMinus = ():void=>{
        setState(state-1);
    }
    return(
        <div>
            <h1>useState hook demo</h1>
            currentState:{state}
            <button onClick={handleClick}>increment</button>
            <button onClick={handleMinus}>decrement</button>
        </div>
    )
}

export default UseState