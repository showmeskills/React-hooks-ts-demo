import {useState,useEffect} from "react";

export const useCount = (num:number) =>{
    const [count,setCount] = useState<number>(num)
    useEffect(()=>{
        setTimeout(()=>setCount((prevState)=>prevState+1),2000);
    },[])
    return{
        count,
    }
}