
import {dispatch,INCREMENT,DECREMENT,renderDOM} from './store';
import {useEffect} from 'react';
const Counter = ()=>{
    useEffect(()=>renderDOM(),[])
    return(
        <div>
            <h1>stimulated redux operational procedures</h1>
            <button onClick={()=>dispatch({type:INCREMENT,payload:10})}>increment</button>
            <span id="count"></span>
            <button onClick={()=>dispatch({type:DECREMENT,payload:5})}>decrement</button>
        </div>
    )
    
}


export default Counter;