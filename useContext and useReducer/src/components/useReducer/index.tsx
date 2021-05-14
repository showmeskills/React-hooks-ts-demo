import NavBar from '../Navbar';
import Home from './Home';
import Other from './Other';
import {Switch,Route} from "react-router-dom";
import {useReducer,createContext,Dispatch,SetStateAction} from "react";

interface UserContext{
    name:string;
    count:number;
    setCount:Dispatch<SetStateAction<any>>;
}

export const userContext = createContext<UserContext>({
    name:"",
    count:0,
    setCount(){}
})

interface State{
    name:string;
    count:number;
}
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

interface TodoAction{
    count:number;
}
export interface Sync_Increment extends TodoAction{
    type:typeof INCREMENT;
}

export interface Sync_Dncrement extends TodoAction{
    type:typeof DECREMENT;
}

export type ActionTypes = Sync_Increment | Sync_Dncrement;

const reducer=(state:State,action:ActionTypes)=>{
    switch(action.type){
        case INCREMENT:
            return{...state,count:state.count+1};
        case DECREMENT:
            return {...state,count:state.count-1};
        default:
            return state;
    }
}

const UseReducer = ()=>{
    const [user,setCount] = useReducer(reducer,{
        name:"Terrance Yan",
        count:260,
    })


    return(
        <userContext.Provider
            value={{
                name:user.name,
                count:user.count,
                setCount
            }}
        >
        <div>
            <h1>demo useReducer</h1>
            <NavBar/>

            <Switch>
                <Route path="/home" render={RouteProps=>{
                    return <Home {...RouteProps}/>
                }}/>
                <Route path="/other" render={RouteProps=>{
                    return <Other {...RouteProps}/>
                }}/>
            </Switch>
        </div>
        </userContext.Provider>
    )
}

export default UseReducer;