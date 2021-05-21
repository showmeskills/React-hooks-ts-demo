import {useHistory} from "react-router-dom";
import {useAuth} from '../../hook/ProvideAuth';

const AuthButton = ()=>{
    const histroy = useHistory();
    const {signout,user} = useAuth();
    return user?(
        <p>
            Welcome!{" "}
            <button
            onClick={()=>signout(()=>histroy.push('/'))}
            >
                signout
            </button>
        </p>
    ):(
        <p>you are not logged in.</p>
    )
}

export default AuthButton;