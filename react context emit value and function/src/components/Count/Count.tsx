import {useState,createContext,PropsWithChildren} from "react";


interface ProviderProps{
    state:number;
    increment():void;
    decrement():void;
}

const defaultValue:ProviderProps={
    state:0,
    increment(){},
    decrement(){}
}

interface ProviderChildren{

}
const {
    Provider
    ,
    Consumer:CountConsumer //取别名
} = createContext<ProviderProps>(defaultValue);



const CountProvider = (props:PropsWithChildren<ProviderChildren>)=>{
    const [state,setState] = useState<number>(0);

    const increment = ()=>setState(state+1);
    const decrement = ()=>setState(state-1);

    return(
        <Provider 
            value={{
                state,
                increment,
                decrement
            }}
        >
            {props.children}
        </Provider>
    )
}

export {
    CountProvider,
    CountConsumer
};