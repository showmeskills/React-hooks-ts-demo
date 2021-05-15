

/**
 * useCallback is used to optimise performance by only re-rendering components when required
 */
import {Switch,Route} from "react-router-dom";
import NavBar from '../Navbar';
import Home from '../pages/Home';
import Other from "../pages/Other";
const UseCallback = ()=>{


    return(
        <div>
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
    )
}

export default UseCallback;