import {useState} from "react";
import {useDispatch} from "react-redux";
import {TodoActionsTypes} from "../../redux/SyncTodos/models/actions-type";
const TodosHeader = ()=>{
    const [todo,setTodo] = useState<string>("")
    const dispatch = useDispatch();
    const handleAdd = ()=>{
        if(!todo){
            alert("please enter a todo");
            return;
        }
        const newTodos = {
            id:Date.now(),
            todo,
            isCompleted:false,
        }
        dispatch({type:TodoActionsTypes.ADD_TODO,todo:newTodos})
        setTodo("");
    }
    return(
        <div className="todo_header">
            <input type="text" value={todo} 
            onChange={(e)=>setTodo(e.target.value)}
            />
            <button onClick={handleAdd}>add todo</button>
        </div>
    )
}

export default TodosHeader;