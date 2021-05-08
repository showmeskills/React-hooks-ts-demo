import React,{useState} from "react";
const ControlIpt = ()=>{
    const [val,seVal] = useState<string>("hello");

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>):void=>{
        const val = event.target.value;
        seVal(()=>val)
    }
    const handleKeyDon = (event:React.KeyboardEvent<HTMLInputElement>):void=>{
         if(event.keyCode === 13){
             console.log(val);
         }
    }
    const handleBlur = (event:React.FocusEvent<HTMLInputElement>):void=>{
        console.log(val);
    }
    return(
        <>  
        <h1>control input</h1>
            data:{val}
           <input type="text" value={val} 
           onChange={handleChange}
           onKeyDown={handleKeyDon}
           onBlur={handleBlur}
           /> 
        </>
    )
}

export default ControlIpt;