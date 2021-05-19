import { PropsWithChildren,useState } from "react";
import { useDispatch } from "react-redux";
import { AysncTodos } from "../../redux/AsyncTodos/models/todo-types";
import {dispatchChangeState,dispatchTodoDelete} from "../../redux/AsyncTodos/AsyncTodoActions";
interface PropsTodosItem {
    todo: AysncTodos
}


const TodosItem = (props: PropsWithChildren<PropsTodosItem>) => {
    const [show,setShow] = useState<string>("none");
    const dispatch = useDispatch();
    const handleChange = (todo:AysncTodos)=>()=>dispatch(dispatchChangeState(todo));
    const handleDelete = (todo:AysncTodos)=>()=>dispatch(dispatchTodoDelete(todo))
    return (
        <li
            onMouseEnter={() => setShow("block")}
            onMouseLeave={() => setShow("none")}
        >
            <input type="checkbox" checked={props.todo.isCompleted}
                onChange={handleChange(props.todo)}
            />
            <span>{props.todo.todo}</span>
            <button style={{display:show}} onClick={handleDelete(props.todo)}>delete</button>
        </li>
    )
}
export default TodosItem;