import { PropsWithChildren } from 'react';
import TodoItem from './TodoItem';
import {InitialTodo} from './index';



interface PropsTodoBody{
    todos:InitialTodo[]
    toggleTodo:(todo:InitialTodo) =>void;
    deleteTodos:(idx:number)=>void;
}


const TodoBody = (props: PropsWithChildren<PropsTodoBody>)=>{
    return(
        <ul style={{listStyle:"none"}}>
            {
                props.todos.map((item,idx)=><TodoItem todo={item} key={item.id} toggleTodo={props.toggleTodo}
                deleteTodos={props.deleteTodos}
                idx={idx}
                />)
            }
        </ul>
    )
}

export default TodoBody;