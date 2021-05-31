import {useState} from 'react';


const useCount = (value: number)=>{
    const [count,setCount] = useState(value);
    const increment = (num: number)=>setCount(count+num);
    const decrement = (num: number)=>setCount(count-num);
    return{
        increment,
        decrement,
        count
    }
}

export default useCount;