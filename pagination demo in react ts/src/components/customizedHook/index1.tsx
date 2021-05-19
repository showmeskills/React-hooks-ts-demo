import {useCount} from "../../hook/useCount";
const CustomizedHook1 = ()=>{
    const {count} = useCount(20);
    return(
        <div>
            <h1>component two</h1>
            count:{count}
        </div>
    )
}



export default CustomizedHook1;