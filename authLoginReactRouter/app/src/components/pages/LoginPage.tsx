import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../../hook/ProvideAuth";
interface Location {
    from: {
        pathname: string
    }
}

const LoginPage = () => {
    const history = useHistory();
    const location = useLocation<Location>();
    const { signin } = useAuth();
    const { from } = location.state || { from: { pathname: "/" } }
    const login = () => {
        signin(() => {
            history.replace(from);
        });
    }

    return (
        <div>
            <p>You must log in to view the page at {from.pathname}</p>
            <button onClick={login}>Log in</button>
        </div>
    )
}

export default LoginPage;