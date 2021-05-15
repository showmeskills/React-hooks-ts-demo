import {PropsWithChildren,memo} from "react";

interface TitleProps{
    title:string;
    handleTitle():void;
}
/**
 * React.memo will prevent a functional component from being re-rendered if it's props dont't change;
 * if props has changed, it still works; 适用于children component
 */

const Title = (props:PropsWithChildren<TitleProps>)=>{
    console.log("Title has been rendered")
    return(
        <div>
            <h1>{props.title}</h1>
            <button onClick={props.handleTitle}>change</button>
        </div>
    )
}

export  default memo(Title);