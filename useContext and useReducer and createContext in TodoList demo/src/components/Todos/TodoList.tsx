import {useContext} from 'react';
import {TodoContext} from './TodosProvider';

import TodoItem from './TodoItem';

const TodoList = ()=>{
    const {todos} = useContext(TodoContext);
    return(
        <ul style={{listStyle:"none"}}>
            {
                todos.map(todo=><TodoItem key={todo.id} todo={todo}/>)
            }
        </ul>
    )
}

export default TodoList;