import { useState,useEffect } from "react";
import Timer from './Timer';
import Request from './Request';
import {Switch,Route,NavLink} from 'react-router-dom';

interface User {
    name:string;
    email:string;
}
const userState:User = {name:"",email:"",}

const UseEffect = ()=>{
    const [count,setCount]=useState<number>(0);
    const [user,setUser]=useState<User>(userState);

    useEffect(()=>{
        console.log('useEffect called');//当页面加载完成后自定触发第一次
        document.title = `you clicked ${count} times`;
    },[count])
    //当添加数组参数时,useEffect 默认触发一次,且不监视当的数据的state
    //当为空数组的时候,useEffect,当页面加载完后默认触发一次
    //当组件中有指定状态时,触发时，默认触发shouldUpdateComponent函数

 

    return(
        <div>
            <h1>useEffect demo</h1>
            count:{count}
            <button onClick={()=>setCount((preState)=>preState+1)}>increment count</button>
            <button onClick={()=>setCount((preState)=>preState-1)}>decrement count</button>
            <div>
                username:<input type="text" 
                value={user.name}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setUser({...user,name:e.target.value})}
                />
                email:<input type="text" 
                 value={user.email}
                 onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setUser({...user,email:e.target.value})}
                />
            </div>
            {/* componentDidMount */}
            <Request/>

            {/* componentWillUnmount */}
            <NavLink to="/timer">To Timer page</NavLink>
            <Switch>
                <Route path='/timer' render={(routeProps)=>{
                    return <Timer {...routeProps}/>
                }}/>
            </Switch>
        </div>
    )
}

export default UseEffect;