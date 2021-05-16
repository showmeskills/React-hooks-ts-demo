import store,{render} from './store'
import {ActionsType} from './reducer';
import {useEffect} from "react";
const Count = ()=>{
    useEffect(()=>{
        render()
    },[])
    return(
        <div>
             <h1>stimulated redux operational procedures2</h1>
            <button onClick={()=>store.dispatch({type:ActionsType.INCREMENT,payload:10})}>increment</button>
            <span id="count1"></span>
            <button onClick={()=>store.dispatch({type:ActionsType.DECREMENT,payload:5})}>decrement</button>
        </div>
    )
}
export default Count;