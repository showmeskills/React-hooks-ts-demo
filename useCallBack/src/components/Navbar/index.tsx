import {NavLink} from "react-router-dom";


const NavBar = ()=>{

    return(
        <div>
            <NavLink to="/home">home page</NavLink>
            <br/>
            <NavLink to="/other">other page</NavLink>
        </div>
    )
}

export default NavBar;