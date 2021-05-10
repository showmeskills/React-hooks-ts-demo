import { PropsWithChildren,useState } from "react";
import { InitialTodo } from './index';

interface PropsTodoBody {
    todo: InitialTodo
    toggleTodo:(todo:InitialTodo) =>void;
    deleteTodos:(idx:number)=>void;
    idx:number;
}
const TodoItem = (props: PropsWithChildren<PropsTodoBody>) => {
    const [isShow,setShow] = useState<string>("none")
    const handleChange = (todo:InitialTodo)=>():void=>{
        props.toggleTodo(todo);
    }
    //高阶函数写法
    const handleEnter = (bool:boolean)=>():void=>{
        if(bool === true){
            setShow("block");
        }else{
            setShow("none");
        }
    }
    return (
        <li onMouseEnter={handleEnter(true)}
            onMouseLeave={handleEnter(false)}
        >
            <input type="checkbox" checked={props.todo.isCompleted}
                onChange={handleChange(props.todo)}
            />
            <span>{props.todo.todo}</span>
            <button style={{ display: isShow }}
            onClick={()=>props.deleteTodos(props.idx)}
            >delete</button>
        </li>
    )
}

export default TodoItem;