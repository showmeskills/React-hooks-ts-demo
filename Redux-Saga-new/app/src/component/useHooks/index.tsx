import { PropsWithChildren } from "react"
import Btn from "./Button"
const withBtn = (Component:()=>JSX.Element)=>{
    return (props:PropsWithChildren<any>)=>{
        return(
            <Component {...props}/>
        )
    }
}
export default withBtn(Btn);