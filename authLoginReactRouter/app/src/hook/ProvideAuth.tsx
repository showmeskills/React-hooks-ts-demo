import {createContext,useContext,PropsWithChildren,ReactNode} from "react";
import {useProvideAuth} from './useProvideAuth';

interface AuthContext{
    user:string,
    signin(cb:Function):void,
    signout(cb:Function):void
}

const authConext = createContext<AuthContext>({
    user:"",
    signin(cb){},
    signout(cb){}
});

export const useAuth = ()=>useContext(authConext);

interface ProvideAuthProps{
    children:ReactNode
}



export const ProvideAuth = (props:PropsWithChildren<ProvideAuthProps>)=>{
    const {user,signin,signout} =useProvideAuth();
    
    return(
        <authConext.Provider
        value={{
            user,
            signin,
            signout
        }}
        >
            {props.children}
        </authConext.Provider>
    )
}