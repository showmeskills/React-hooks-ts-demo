/* eslint-disable react-hooks/exhaustive-deps */
import {useDispatch,useSelector} from "react-redux";
import {useEffect} from "react";

import TodosItem from './TodosItem';
import {boundRequestTodos} from "../../redux/AsyncTodos/AsyncTodoActions";
import {AppState} from "../../redux/rooState";
const TodosList = ()=>{
    const loading = useSelector((state:AppState)=>state.asyncTodoReducers.loading);
    const todos = useSelector((state:AppState)=>state.asyncTodoReducers.todos);
    const error = useSelector((state:AppState)=>state.asyncTodoReducers.error);
    const dispatch = useDispatch();
    const handleRequest = ()=>dispatch(boundRequestTodos())
    useEffect(()=>{
        handleRequest();
    },[])
    return(
        <div className="todos_list_containers">
            <ul className="todos_list_wrapper">
                {   
                    loading
                    ?
                    <li>loading...</li>
                    :
                    error?
                    <li>{error}</li>
                    :
                    todos.map(todo=><TodosItem key={todo.todo} todo={todo}/>)
                }
            </ul>
        </div>
    )
}

export default TodosList;