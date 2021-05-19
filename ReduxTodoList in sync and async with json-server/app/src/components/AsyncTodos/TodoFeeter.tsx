import {useSelector,useDispatch} from "react-redux";
import {AppState} from "../../redux/rooState";
import {dispatchSelectAll,dispatchTodoDeletAll} from "../../redux/AsyncTodos/AsyncTodoActions";
const TodoFeeter = ()=>{
    const length = useSelector((state:AppState)=>state.asyncTodoReducers.todos.length)
    const isCompletedLength = useSelector((state:AppState)=>state.asyncTodoReducers.todos.reduce((prev,todo)=>prev+(todo.isCompleted===true?1:0),0))
    const total = useSelector((state:AppState)=>state.asyncTodoReducers.todos.filter(todo=>todo.isCompleted).length)
    const dispatch = useDispatch();

    return(
        <div className="Todo_feeter">
            <input type="checkbox" 
                checked ={total === length && total !== 0}
                onChange={(e)=>dispatch(dispatchSelectAll(e.target.checked))}
            />
            <span>Completed Todos {isCompletedLength} /All Todos {length}</span>
            <button onClick={()=>dispatch(dispatchTodoDeletAll())}>delete all</button>
        </div>
    )
}

export default TodoFeeter;