import {SyncTodoActionsType,TodoActionsTypes} from './models/actions-type';

interface Todos {
    id:number;
    todo:string;
    isCompleted:boolean;
}



const defaultTodos:Todos[] = [
        {id:0,todo:"coding",isCompleted:false},
        {id:1,todo:"eating",isCompleted:false},
        {id:2,todo:"hiking",isCompleted:false},
        {id:3,todo:"fucking",isCompleted:false},
    ]


export const syncTodoReducer = (state=defaultTodos,action:SyncTodoActionsType):Todos[]=>{

    switch(action.type){
        case TodoActionsTypes.ADD_TODO:
            return [...state,action.todo]
        case TodoActionsTypes.CHANG_COMPLETE:
            const newTodos = state.map(todo=>{
                if(todo === action.todo){
                    return{
                        ...todo,
                        isCompleted:!action.todo.isCompleted
                    }
                }
                return todo;
            })
            return newTodos;
        case TodoActionsTypes.DELETE_TODO:
            const todo = state.filter(todo=> todo.id !== action.id)
            return todo
        case TodoActionsTypes.SELECT_ALL:
            const SelectAllTodo = state.map(todo=>({...todo,isCompleted:action.checkedState}))
            return SelectAllTodo;
        case TodoActionsTypes.DELETE_ALL_IS_COMPLETED:
            const todos = state.filter(todo=>!todo.isCompleted);
            return todos;
        default:
            return state;
    }
}