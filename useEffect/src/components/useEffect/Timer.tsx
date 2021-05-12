import { useEffect,PropsWithChildren} from "react";
import {NavLink} from "react-router-dom";
interface PropsTimer{

}


//useEffect timer 处理
//useEffect return()=>{}相当于 componentWillUnmount
const Timer = (props:PropsWithChildren<PropsTimer>)=>{
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("timer start")
        },1000)
        return ()=>{
            clearInterval(timer)
        }
    })
    return(
        <div>
            <h1>timer page</h1>
            <NavLink to="/">leave Timer page</NavLink>
        </div>
    )
}

export default Timer;
