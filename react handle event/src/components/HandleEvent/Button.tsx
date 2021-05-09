import { PropsWithChildren } from "react";

interface ButtonProps{
    handleClick():void;
}
const Button = (props:PropsWithChildren<ButtonProps>)=>{
    return (
        <>
          {
              props.children === "add"? 
              <button onClick={props.handleClick}>++</button> 
              :
              <button onClick={props.handleClick}>--</button>
          }
        </>
    )
}

export default Button;