import {Component} from "react";
import withPortal from '../withPortal';
import '../style.css';



@withPortal
class Model extends Component<any>{
    render(){

        return(
            <div className="portal">
                <h1>Portal header</h1>
                <button>add</button>
            </div>
        )
    }
}

export default Model;