import {createContext,useState} from "react";

interface CreateContext{
    name:string;
    age1:number;
    setAge1():void;
    minusAge1():void;
}

export const ContextProvider2 = createContext<CreateContext>({
    name:"",
    age1:0,
    setAge1(){},
    minusAge1(){},
});

interface DefaultUser {
    name:string
    age1:number
}

const defaultUser:DefaultUser ={
    name:"Terry",
    age1:0,
}

export const User2 = (props:any)=>{
    const [user,setUser] = useState<DefaultUser>(defaultUser)
    const setAge1 = ()=>setUser((prevState)=>({
        ...prevState,
        age1:prevState.age1+10,
    }))
    const minusAge1 = ()=> setUser((prevState)=>({
        ...prevState,
        age1:prevState.age1-5,
    }))
    return(
        <ContextProvider2.Provider
        value = {{
            ...user,
            setAge1,
            minusAge1
        }}
        >
            {props.children}
        </ContextProvider2.Provider>
    )
}