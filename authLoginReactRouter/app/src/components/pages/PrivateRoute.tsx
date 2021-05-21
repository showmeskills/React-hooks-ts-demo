import {ReactNode} from "react";
import {Redirect,Route} from "react-router-dom";
import {useAuth} from "../../hook/ProvideAuth";

interface PrivateRouteProps{
    children:ReactNode,
    path:string,
}

const PrivateRoute:React.FC<PrivateRouteProps> = ({children,...rest})=>{
    const {user} = useAuth();
    return(
        <Route    
            {...rest}
            render={({location})=>
            user?(
                children
            ):(
                <Redirect
                    to={{
                        pathname:"/login",
                        state:{from:location}
                    }}
                />
            )
        }
        />
    )
}

export default PrivateRoute;