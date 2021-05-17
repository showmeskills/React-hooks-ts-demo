import {useState,useContext} from "react";
import {Todos,TodoContext,ActionsType} from "./TodosProvider";


const TodoHeader = ()=>{
    const {dispatch} =useContext(TodoContext);
    const [todo,setTodo] = useState<string>("");

    const addTodo = ()=>{
        if(!todo.trim()){
            alert("can not be empty");
            return;
        }
        const newTodo:Todos = {
            id:Date.now(),
            todo,
            isCompleted:false,
        }
        dispatch({type:ActionsType.ADD_TODO,addTodos:newTodo})
        setTodo("");
    }
    return(
        <div>
            <input type="text" value={todo}
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setTodo(e.target.value)}
            />
            <button onClick={addTodo}>add todo</button>
        </div>
    )
}
export default TodoHeader;