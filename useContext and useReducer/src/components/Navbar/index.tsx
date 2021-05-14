import {useContext} from "react";
import {NavLink} from "react-router-dom";
import {userContext} from "../useReducer";


const NavBar = ()=>{
    const {name,count} = useContext(userContext);
    return(
        <div>
            <div>
            name:{name}<NavLink to="/home">home page</NavLink>
            </div>
            <div>
            count:{count}<NavLink to="/other">other page</NavLink>
            </div>
        </div>
    )
}
export default NavBar;