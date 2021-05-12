import {testContext} from "./testContext";
import { Component } from "react";


class ChildA extends Component{
    //对于类组件可以使用 static contextType = testContext,也可以使用consumer
    static contextType = testContext
    render(){
        return(
        <div>
            <h1>Child A component</h1>
            from Provider value:{this.context}
        </div>
        )
    }
}
export default ChildA;