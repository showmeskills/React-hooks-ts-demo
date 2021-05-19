import { PropsWithChildren,useState } from "react";
import {useDispatch} from "react-redux";
import {TodoActionsTypes} from "../../redux/SyncTodos/models/actions-type";
interface TodosItemProps{
        id:number,
        todo:string,
        isCompleted:boolean
}

interface Todo {
    todo:TodosItemProps
}


const TodosItem = (props:PropsWithChildren<Todo>)=>{
    const [show,setShow] = useState<string>("none");
    const dispatch = useDispatch();
   const handleChange=(todo:TodosItemProps)=>()=>dispatch(({type:TodoActionsTypes.CHANG_COMPLETE,todo}));
    const handleDelete=(id:number)=>()=>dispatch(({type:TodoActionsTypes.DELETE_TODO,id}))
    return(
        <li
            onMouseEnter={()=>setShow("block")}
            onMouseLeave={()=>setShow("none")}
        >
            <input type="checkbox" checked={props.todo.isCompleted}
            onChange={handleChange(props.todo)}
            />
            <span>{props.todo.todo}</span>
            <button onClick={handleDelete(props.todo.id)} style={{display:show}}>delete</button>
        </li>
    )
}
export default TodosItem;