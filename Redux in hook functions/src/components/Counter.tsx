import { useDispatch,useSelector } from "react-redux";
import {AppState} from '../redux/rootState';
import {AppActions} from '../redux/models/appActions';
import {ActionsTypes} from '../redux/Counter/models/actions-type';
import Button from "./Button";
const Counter = ()=>{
    const count = useSelector((state:AppState)=>state.countReducer.count);
    const dispatch = useDispatch();
    const increment = ():AppActions=>dispatch({type:ActionsTypes.INCREMENT_COUNTER,payload:100});
    const decrement = ():AppActions=>dispatch({type:ActionsTypes.DECREMENT_COUNTER,payload:50});
    return(
        <div>
            <Button
            handleClick={increment}
            >Increment</Button>
            <span>count:{count}</span>
            <Button
            handleClick={decrement}
            >Decrement</Button>
        </div>
    )
}

export default Counter