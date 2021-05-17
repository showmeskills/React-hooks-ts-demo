
import {usePackageContextState} from "./index";

const MyState = ()=>{
    const {state} = usePackageContextState();
    return(
        <div>
            <h1>there is a display component</h1>
            state:{state}
        </div>
    )
}

export default MyState;