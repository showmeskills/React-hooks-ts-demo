import {useState} from 'react';

import Button from './Button';



const HandleEvent = ()=>{
    const [state,setState] = useState<number>(0);
    const handleClick = ():void=>setState(()=>state+1);
    const handleMinus = ():void=>setState(()=>state-1);
    //const handleEvent= ()=>(event:React.MouseEvent<HTMLElement,MouseEvent>):void=>{}
    return(
        <>
            <h1>there is function component</h1>
            state:{state}
            <Button
                handleClick = {handleClick}
            >add</Button>
              <Button
                handleClick = {handleMinus}
            >minus</Button>
        </>
    )
}

export default HandleEvent;