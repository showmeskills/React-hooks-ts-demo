import {createContext,useContext,useState} from "react";


export const PackageContextState = createContext({
    state:0    
});
export const PackageContextFunction = createContext({
    increment(){},
    decrement(){}
})

export const usePackageContextState = ()=>{
    const myState = useContext(PackageContextState);
    return myState
}

export const usePackageContextFunction = ()=>{
    const myFunction = useContext(PackageContextFunction);
    return myFunction
}

export const Container = (props:any)=>{
    const [state,setState] = useState<number>(666)
    const increment = ()=>setState(state+100);
    const decrement = ()=>setState(state-200)
    return(
        <PackageContextState.Provider
            value={{state}}
        >
            <PackageContextFunction.Provider
            value={{
                increment,
                decrement
            }}
            >
                {props.children}
            </PackageContextFunction.Provider>
        </PackageContextState.Provider>
    )
}

