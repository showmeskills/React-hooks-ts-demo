import { ProvideAuth } from "../../hook/ProvideAuth"
import { Switch, Route} from "react-router-dom";

import { PublicPage } from "./PublicPage";
import { ProtectedPage } from "./ProtectedPage";
import LoginPage from "./LoginPage";
import AuthButton from './AuthButton';
import AuthNav from './AuthNav';
import PrivateRoute from './PrivateRoute';
const AuthExample = () => {

    return (
        <ProvideAuth>
                <AuthButton />
                <AuthNav />
                <Switch>
                    <Route path="/public" render={() => <PublicPage></PublicPage>} />
                    <Route path="/login" render={() => <LoginPage></LoginPage>} />
                    <PrivateRoute path="/protected">
                        <ProtectedPage />
                    </PrivateRoute>
                </Switch>
        </ProvideAuth>
    )
}

export default AuthExample;