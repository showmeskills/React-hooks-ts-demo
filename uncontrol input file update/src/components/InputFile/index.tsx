
// import {FormEvent, useRef} from "react";

// const InputFile = ()=>{
//     const handleSubmit = (event:FormEvent)=>{
//         event.preventDefault();
//     }
//     const iptRef = useRef<string | null | any>(null);
//     const handleInput = ()=>{
//         console.log(iptRef.current.value)
//     }
//     return(
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="name">
//                 <input type="text" id="name" name="name" ref={iptRef}
//                     onInput={handleInput}
//                 />
//             </label>
//         </form>
//     )
// }

// export default InputFile;


import {useRef} from "react";

const InputFile = ()=>{

    const iptRef = useRef<null | any>(null);

    const handleSubmit = (event:React.FormEvent)=>{
        event.preventDefault();
    }
    const handleClick = ()=>{
        console.log(iptRef.current.files[0].name);//iptRef.current.files[0].name拿到上传的文件
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="file">
                <input type="file" ref={iptRef} id="file" name="file"/>
            </label>
            <input type="submit" value="submit" onClick={handleClick}/>
        </form>
    )
}

export default InputFile;