import { NavLink } from "react-router-dom";
import { UserContext, SubscriptionContext } from '../useContext'
import { useContext } from "react";

const NavBar = () => {
    const {username,add} = useContext(UserContext);
    const {subscription,setSub} = useContext(SubscriptionContext);
 
    return (
        <div>
            <NavLink to="/pageone">page one</NavLink>
            <NavLink to="/pagetwo">page two</NavLink>
            {username}
            {subscription}
            <div>
                <button onClick={add}>btn1</button>
                <button onClick={setSub}>btn2</button>
            </div>
        </div>
    )
}

export default NavBar;