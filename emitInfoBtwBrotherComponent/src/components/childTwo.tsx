import {PropsWithChildren } from "react";

interface Props{
    data:string
}

const ChildTwo= (props:PropsWithChildren<Props>)=>{

    return(
        <>  

            <h1>ChildTwo{props.data}</h1>
        </>
    )
}

export default ChildTwo;