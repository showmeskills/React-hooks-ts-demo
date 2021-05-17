import { PropsWithChildren } from "react";

interface ButtonProps {
    handleClick():void
}


const Button = (props:PropsWithChildren<ButtonProps>)=>{

    return<button onClick={props.handleClick}>{props.children}</button>
}

export default Button;