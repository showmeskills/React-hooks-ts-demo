
import { useState } from 'react';
import Modal from '../Modal/index';

const Portal = ()=>{
    const [count,setCount] = useState<number>(0);
    const handleClick = ()=>{
        setCount(count+1);
    }

    return(
        <div onClick={handleClick}>
            count:{count}
            <Modal/>
        </div>
    )
}

export default Portal;