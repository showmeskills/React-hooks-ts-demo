
import ChildA from "./ChildA";
import ChildB from "./ChildB";
import {Provider} from "./testContext";


const Context = ()=>{


    return (
        <Provider
            value="hello"
        >
            <h1>context demo</h1>
            <ChildA/>
            <ChildB/>
        </Provider>
    )
}

export default Context;