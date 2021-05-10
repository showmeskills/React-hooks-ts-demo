
import {useState,PropsWithChildren} from "react";

import {InitialTodo} from './index';
interface PropsTodoHeader{
    addTodos(todo:InitialTodo):void;
    initialTodo:InitialTodo[];
}

const TodoHeader = (props:PropsWithChildren<PropsTodoHeader>)=>{
    const [todo,setTodo]=useState<string>("");
    const addTodo = ():void=>{
        if(!todo.trim()){
            alert("please enter");
            return;
        }
    
        const newTodo = {
            id:Date.now(),
            todo:todo,
            isCompleted:false,
        }
        props.addTodos(newTodo);
        setTodo("");
    }
    return(
        <div>
            <input type="text" 
                value={todo}
                onChange={(e)=>setTodo(()=>e.target.value)}
            />
            <button type="button" className="btn btn-primary"
                onClick = {addTodo}
            >Primary</button>
        </div>
    )
}
export default TodoHeader;