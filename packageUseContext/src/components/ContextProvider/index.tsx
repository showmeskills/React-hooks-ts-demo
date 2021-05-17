import {createContext,useState} from "react";

interface CreateContext{
    username:string;
    age:number;
    setAge():void;
    minusAge():void;
}

export const ContextProvider = createContext<CreateContext>({
    username:"",
    age:0,
    setAge(){},
    minusAge(){},
});

interface DefaultUser {
    username:string
    age:number
}

const defaultUser:DefaultUser ={
    username:"Terrance",
    age:0,
}

export const User = (props:any)=>{
    const [user,setUser] = useState<DefaultUser>(defaultUser)
    const setAge = ()=>setUser((prevState)=>({
        ...prevState,
        age:prevState.age+1,
    }))
    const minusAge = ()=> setUser((prevState)=>({
        ...prevState,
        age:prevState.age-1,
    }))
    return(
        <ContextProvider.Provider
        value = {{
            ...user,
            setAge,
            minusAge
        }}
        >
            {props.children}
        </ContextProvider.Provider>
    )
}