import {AsyncActionsTypes,AsyncTodoActions} from "./models/todo-actions-types";
import {AysncTodos} from "./models/todo-types";

interface TodoState{
    loading: boolean;
    todos:AysncTodos[];
    error:string;
}




const defaultState:TodoState = {
    loading:false,
    todos:[],
    error:"",
}

export const asyncTodoReducers = (state = defaultState,action:AsyncActionsTypes):TodoState=>{
    switch(action.type){
        case AsyncTodoActions.TODOS_REQUEST:
            return {loading:action.loading,todos:action.todo,error:action.error}
        case AsyncTodoActions.TODOS_SUCCESS:
            return {loading:action.loading,todos:action.todo,error:action.error}
        case AsyncTodoActions.TODOS_FAILURE:
            return {loading:action.loading,todos:action.todo,error:action.error}
        case AsyncTodoActions.TODO_ADD:
            return {loading:action.loading,todos:[...state.todos,action.todo],error:action.error};
        case AsyncTodoActions.TODO_CHANGE_STATE:
            const newTodo = state.todos.map(todo=>{
                if(todo.id === action.todo.id){
                    return {
                        ...todo,
                        isCompleted:action.todo.isCompleted
                    }
                }
                return todo
            })
            return{loading:action.loading,todos:newTodo,error:action.error};
        case AsyncTodoActions.TODO_DELETE:
            const leftTodo = state.todos.filter(todo=>todo.id !== action.todo.id);
            return{loading:action.loading,todos:leftTodo,error:action.error}
        case AsyncTodoActions.TODO_SELECT_ALL:
            const isCheckedTodos = state.todos.map(todo=>({...todo,isCompleted:action.isChecked}))  
            return {loading:action.loading,todos:isCheckedTodos,error:action.error};
        case AsyncTodoActions.TODO_DELETE_ALL:
            return {loading:action.loading,todos:action.todo,error:action.error};
        default:
            return state;
    }
}




