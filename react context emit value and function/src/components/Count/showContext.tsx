import { createContext,useState,PropsWithChildren } from "react";

interface PropsCreateContext{
    show:boolean;
    isShow():void
}
const defaultValue:PropsCreateContext = {
    show:false,
    isShow(){}
}

const {
    Provider,
    Consumer:ShowConsumer
} = createContext<PropsCreateContext>(defaultValue);

interface PropsProviderShow{}

const ProviderShow = (props:PropsWithChildren<PropsProviderShow>)=>{
    const [show,setShow] = useState<boolean>(false);
    const isShow = ()=>setShow(!show)
    return(
        <Provider
            value={{
                show,
                isShow
            }}
        >
            {props.children}
        </Provider>
    )
}

export {
    Provider,
    ShowConsumer,
    ProviderShow
}