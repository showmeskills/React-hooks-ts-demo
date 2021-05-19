import {useDispatch} from "react-redux";
import {useState} from "react";
import {dispatchAddTodo} from "../../redux/AsyncTodos/AsyncTodoActions";
const TodosHeader = ()=>{
    const [todo,setTodo] = useState<string>("");
    const dispatch = useDispatch();
    const handleAdd = ()=>{
        if(!todo){
            alert("please enter todo");
            return;
        }
        const newTodo = {
            id:Date.now(),
            todo,
            isCompleted:false,
        }
        dispatch(dispatchAddTodo(newTodo))
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