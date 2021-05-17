import {useContext} from "react";
import {ContextProvider} from './index'
import {ContextProvider2}from '../ContextProvider02';
const ChildA = ()=>{
    const {username,age,setAge} = useContext(ContextProvider);
    const {name,age1,setAge1} = useContext(ContextProvider2);
    return(
        <div>
            <h1>there is child a component</h1>
            useranme:{username},age:{age}
            <button onClick={setAge}>increment age</button>
            <br />
            <h1>there are from another provider</h1>
            name:{name},age:{age1}
            <button onClick={setAge1}>increment age</button>
        </div>
    )
}

export default ChildA;