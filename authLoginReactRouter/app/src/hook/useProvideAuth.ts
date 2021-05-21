import {useState} from "react";

interface FakeAtuh{
    isAuthenticated:boolean,
    signin(cb:Function):void;
    signout(cb:Function):void;
}


const fakeAuth:FakeAtuh = {
    isAuthenticated:false,
    signin(cb){
        fakeAuth.isAuthenticated = true;
        setTimeout(cb,100);
    },
    signout(cb){
        fakeAuth.isAuthenticated = false;
        setTimeout(cb,100);
    }
}

export const useProvideAuth = ()=>{
    const [user,setUser] = useState<string>("");
    const signin = (cb:Function)=>{
        return fakeAuth.signin(()=>{
            setUser("user");
            cb();
        })
    }
    const signout = (cb:Function)=>{
        return fakeAuth.signout(()=>{
            setUser("");
            cb();
        })
    }

    return{
        user,
        signin,
        signout
    }
}

