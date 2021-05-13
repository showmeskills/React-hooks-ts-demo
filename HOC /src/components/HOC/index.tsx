import {PropsWithChildren,Component} from "react";

interface AppProps{
    title: string
    msg:string
}
//高阶组件可以接受一个类组件
// const HOC = (Comp:any)=>{
//     return class extends Component<PropsWithChildren<AppProps>>{
//         render() {
//             return (
//                 <Comp {...this.props}></Comp>
//             )
//         }
//     }
// }

const HOC = (Comp:Function)=>{
    return (props:PropsWithChildren<AppProps>)=>{
        return(
            <Comp {...props}>
            </Comp>
        )
    } 
}

export default HOC;