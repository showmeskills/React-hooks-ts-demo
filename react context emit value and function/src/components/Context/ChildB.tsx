import ChildC from "./ChildC";
import {Consumer} from './testContext';

const ChildB = ()=>{
    return (
        <div>
            <h1>Child B component</h1>
            <Consumer>
                {
                    value=><div>{value}</div>
                }
            </Consumer>
            <ChildC/>
        </div>
    )
}
export default ChildB;