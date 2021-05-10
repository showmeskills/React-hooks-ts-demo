
// import {useState} from "react";



// const CheckBox = ()=>{
//     const [join,setJoin] = useState<boolean>(true);
//     const [candidiates,setCandidates] = useState<number>(0);

//     const handleSubmit = (event:React.FormEvent)=>{
//         event.preventDefault();
//     }
//     const handleJoin = ()=>setJoin(()=>!join)

//     const handleCandidate = (event:React.ChangeEvent<HTMLInputElement>)=>{
//         setCandidates(()=>Number(event.target.value))
//     }
//     const handleClick = ()=>{
//         console.log(join,candidiates);
//     }
//     return(
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="join">
//                 join:<input type="checkbox" id="join" 
//                         checked={join}
//                         onChange={handleJoin}
//                     />
//             </label>
//             <br/>
//             <label htmlFor="candidiates">
//                 candidiates:<input type="number" id="candidiates"
//                     value={candidiates}
//                     onChange={handleCandidate}
//                 />
//             </label>
//             <input type="submit" value="submit" onClick={handleClick}/>
//         </form>
//     )
// }

// export default CheckBox;



import {useState} from "react";



const CheckBox = ()=>{
    const [join,setJoin] = useState<boolean>(true);
    const [candidiates,setCandidates] = useState<number>(0);

    const handleSubmit = (event:React.FormEvent)=>{
        event.preventDefault();
    }
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        if(event.target.name === "join"){
            setJoin(()=>event.target.checked);
        }else{
            setCandidates(()=>Number(event.target.value))
        }
    }

    const handleClick = ()=>{
        console.log(join,candidiates);
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="join">
                join:<input type="checkbox" id="join"
                        name="join" 
                        checked={join}
                        onChange={handleChange}
                    />
            </label>
            <br/>
            <label htmlFor="candidiates">
                candidiates:<input type="number" id="candidiates"
                    name="candidiates"
                    value={candidiates}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" value="submit" onClick={handleClick}/>
        </form>
    )
}

export default CheckBox;