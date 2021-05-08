
import ChildOne from "./childOne";
import ChildTwo from "./childTwo";
import { useState } from 'react';

const Father = ()=>{
    const [data,setData] = useState<string>("");
    const handleReceive = (data:string)=>{
        setData(()=>data);
    }
    return(
        <>
        {/* 自定属性 = 一个函数引用 */}
            <ChildOne onReceiveData={handleReceive}/>
            <ChildTwo data={data}/>
        </>
    )
}

export default Father;