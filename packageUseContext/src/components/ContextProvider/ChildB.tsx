import {useContext} from "react";
import {ContextProvider} from './index'
import {ContextProvider2}from '../ContextProvider02';

const ChildB = ()=>{
    const {username,age,minusAge} = useContext(ContextProvider);
    const {name,age1,minusAge1} = useContext(ContextProvider2);
    return(
        <div>
            <h1>there is child b component</h1>
            username:{username},age:{age},minusAge
            <button onClick={minusAge}>decrement age</button>
            <br />
            <h1>there are from another provider</h1>
            name:{name},age:{age1}
            <button onClick={minusAge1}>increment age</button>
        </div>
    )
}

export default ChildB;