import { useSelector,useDispatch } from "react-redux";
import {AppState} from '../../redux/rooState';
import{Todos} from "../../redux/SyncTodos/models/todos-type";
import{TodoActionsTypes} from "../../redux/SyncTodos/models/actions-type";
const TodoFeeter = ()=>{
    const length = useSelector((state:AppState)=>state.syncTodoReducer.length)
    const isCompletedLength = useSelector((state:AppState)=>state.syncTodoReducer.reduce((prev:number,todo:Todos)=>prev+(todo.isCompleted===true?1:0),0));
    const total = useSelector((state:AppState)=>state.syncTodoReducer.filter((todo:Todos)=>todo.isCompleted).length);
    const dispatch = useDispatch();
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>dispatch({type:TodoActionsTypes.SELECT_ALL,checkedState:e.target.checked})
   return(
        <div className="Todo_feeter">
            <input type="checkbox" checked={total === length && total !== 0}
            onChange={handleChange}
            />
            <span>Completed Todos {isCompletedLength} /All Todos {length} </span>
            <button onClick={()=>dispatch({type:TodoActionsTypes.DELETE_ALL_IS_COMPLETED})}>delete all</button>
        </div>
    )
}

export default TodoFeeter;