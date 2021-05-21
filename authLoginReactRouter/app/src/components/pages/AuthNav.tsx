import { Link} from "react-router-dom"

const AuthNav = ()=>{

    return(
        <ul>
            <li><Link to="/public">public page</Link></li>
            <li><Link to="/protected">protected page</Link></li>
        </ul>
    )
}

export default AuthNav;