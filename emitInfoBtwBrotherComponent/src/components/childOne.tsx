import {PropsWithChildren,useState} from "react";

type HandleReceive = (data:string)=>void
interface Props{
    onReceiveData:HandleReceive;
}


const ChildOne = (props:PropsWithChildren<Props>)=>{
    const [data] = useState<string>("我来自childOne")

    return(
        <>
            <h1>child one</h1>
            <button onClick={()=>props.onReceiveData(data)}>调用的方法在父组件上</button>
        </>
    )
}
export default ChildOne;