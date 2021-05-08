import {useRef,createRef, useState,useEffect} from "react";

const UnControlIpt = ()=>{

    const [val,setVal] = useState("")
    //触发事件使用onInput={handleChange}
    const iptRef = useRef<any>("");//hook 函数 ref={iptRef}
    const inputRef = createRef<any>();//普通函数 ref={inputRef}
    
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(event.target.value)
        setVal(()=>event.target.value);
    }
    //使用生命周期
    useEffect(()=>{
        setTimeout(()=>{
            console.log(val);
        },5000)
    },[val])

    return(
        <>
        <h1>uncontrol input</h1>
            {val}
            <input type="text" onInput={handleChange} ref={iptRef}/>
        </>
    )
}

export default UnControlIpt;