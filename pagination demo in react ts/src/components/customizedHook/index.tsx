import {useCount} from "../../hook/useCount";
const CustomizedHook = ()=>{
    const {count} = useCount(10);
    return(
        <div>
            <h1>component one</h1>
            count:{count}
        </div>
    )
}



export default CustomizedHook;
