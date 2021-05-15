import { PropsWithChildren,memo } from "react";
interface PropsCounter{
    count: number;
    increment():void;
    comments:number;
    incrementComments():void;
}



const Counter = (props:PropsWithChildren<PropsCounter>)=>{
    console.log(`render counter component${props.children}`);
    return(
        <div>
            <button onClick={props.increment}>increment</button>
            {props.count}-{props.children}    

            <button onClick={props.incrementComments}>incrementComment</button>
            {props.comments}-{props.children}       
        </div>
    )
}

export default memo(Counter);