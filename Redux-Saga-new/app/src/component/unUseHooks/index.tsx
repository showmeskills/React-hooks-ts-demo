import { PropsWithChildren } from "react"
import { ConnectedComponent } from "react-redux"
import Btn2,{IProps} from "./Button2"
const withBtn2 = (Component:ConnectedComponent<(props:IProps) => JSX.Element, Omit<IProps, "loading" | "lists" | "error" | "getAllLists" | "getSpecLists">>)=>{
    return (props:PropsWithChildren<IProps>)=>{
        return(
            <Component {...props}/>
        )
    }
}
export default withBtn2(Btn2);