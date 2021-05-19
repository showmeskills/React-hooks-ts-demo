import TodosItem from './TodosItem';
import {useSelector} from "react-redux";
import {AppState} from '../../redux/rooState'
const TodosList = ()=>{
    const todos = useSelector((state:AppState)=>state.syncTodoReducer)

    return(
        <div className="todos_list_containers">
            <ul className="todos_list_wrapper">
                {
                    todos.map(todo=><TodosItem key={todo.id} todo={todo}/>)
                }
            </ul>
        </div>
    )
}

export default TodosList;