import { PropsWithChildren,useState,useContext } from "react";
import {Todos,TodoContext,ActionsType} from './TodosProvider';

interface PropsTodoItem{
    todo:Todos
}


const TodoItem = (props:PropsWithChildren<PropsTodoItem>)=>{
    const {dispatch} = useContext(TodoContext);
    const [show,setShow] = useState<string>("none");
    const handleChange = (todo:Todos)=>():void=>dispatch({type:ActionsType.TODO_ISCOMPLETED,todo,})
    const handleDelete = (id:number)=>():void=>dispatch({type:ActionsType.TODO_DELETE,id})
    return(
        <li
            onMouseEnter={()=>setShow("block")}
            onMouseLeave={()=>setShow("none")}
        >
            <input type="checkbox" checked={props.todo.isCompleted}
            onChange={handleChange(props.todo)}
            />
            <span>{props.todo.todo}</span>
            <button style={{display:show}}
            onClick={handleDelete(props.todo.id)}
            >delete</button>
        </li>
    )
}

export default TodoItem;