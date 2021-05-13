import {createContext,useState,PropsWithChildren} from 'react';
import {Route,Switch} from "react-router-dom";
import NavBar from "../NavBar"
import PageOne from '../Page/PageOne';
import PageTwo from '../Page/PageTwo';
interface DefaultUserContextValue{
    username:string
    add():void
}
const defaultUserContextValue:DefaultUserContextValue = {
    username:"",
    add(){}
};
export const UserContext = createContext(defaultUserContextValue);

interface DefaultSubscriptionValue{
    subscription:number
    setSub():void
}

const defaultSubscriptionValue:DefaultSubscriptionValue = {
    subscription:0,
    setSub(){}
};
export const SubscriptionContext = createContext(defaultSubscriptionValue);



interface ProviderChildren{

}

const UseContext = (props:PropsWithChildren<ProviderChildren>)=>{
    const [username,setUsername] = useState<string>("Terrance");
    const [subscription,setSubscription] = useState<number>(260);
    const add = ()=>setUsername("Terry");
    const setSub = ()=>setSubscription((pre)=>pre+1);
    return(
        <div>
            <h1>demo for useContext</h1>
            <UserContext.Provider value={{
                username,
                add
                }}>
                <SubscriptionContext.Provider value={{
                    subscription,
                    setSub
                    }}>
                  <NavBar/>
                 
                </SubscriptionContext.Provider>
            </UserContext.Provider>

            <Switch>
                <Route path="/pageone" render={RouteProps=>{
                    return <PageOne RouteProps={RouteProps}/>
                }}/>
                 <Route path="/pagetwo" render={RouteProps=>{
                    return <PageTwo RouteProps={RouteProps}/>
                }}/>
            </Switch>
        </div>
    )
}

export default UseContext;