import { createContext, Dispatch, SetStateAction, useReducer, PropsWithChildren } from "react";


export interface Todos {
    id: number;
    todo: string;
    isCompleted: boolean;
}

interface DefaultState {
    todos: Todos[];
    dispatch: Dispatch<SetStateAction<any>>
}


const defaultState: DefaultState = {
    todos: [],
    dispatch() { }
}

export const TodoContext = createContext(defaultState);



export enum ActionsType {
    ADD_TODO = "ADD_TODO",
    TODO_ISCOMPLETED = "TODO_ISCOMPLETED",
    TODO_DELETE = "TODO_DELETE",
    TODO_CHECK = "TODO_CHECK",
    DELETE_ALL_COMPLETED = "DELETE_ALL_COMPLETED"
}

interface TodoActions {
    addTodos: Todos
    todo:Todos,
    id:number,
    isChecked:boolean,
}

interface Add_todo extends TodoActions {
    type: typeof ActionsType.ADD_TODO
}
interface Todo_isCompleted extends TodoActions{
    type: typeof ActionsType.TODO_ISCOMPLETED
}
interface Todo_delete extends TodoActions {
    type:typeof ActionsType.TODO_DELETE
}
interface Todo_check extends TodoActions{
    type:typeof ActionsType.TODO_CHECK
}
interface Delete_All_Completed {
    type:typeof ActionsType.DELETE_ALL_COMPLETED
}

export type TodoActionsTypes = Add_todo | Todo_isCompleted | Todo_delete | Todo_check | Delete_All_Completed

const reducer = (state=todoList, action: TodoActionsTypes) => {
    switch (action.type) {
        case ActionsType.ADD_TODO:      
            return [...state, action.addTodos]
        case ActionsType.TODO_ISCOMPLETED:
            const newTodo = state.map((todo)=>{
                if(todo === action.todo){
                    return{
                        ...todo,
                        isCompleted:!todo.isCompleted
                    }
                }
                return todo;
            })
            return newTodo;
        case ActionsType.TODO_DELETE:
            const todo = state.filter((todo)=>todo.id !== action.id)
            return todo;
        case ActionsType.TODO_CHECK:
            const isCheckedAll = state.map((todo)=>({...todo,isCompleted:action.isChecked}))
            return isCheckedAll;
        case ActionsType.DELETE_ALL_COMPLETED:
            const deleteAllCompleted = state.filter((todo)=>!todo.isCompleted);
            return deleteAllCompleted;
        default:
            return state;
    }
}


const todoList:Todos[] =[
        { id: 0, todo: "coding", isCompleted: false },
        { id: 1, todo: "eating", isCompleted: false },
        { id: 2, todo: "hiking", isCompleted: false },
        { id: 3, todo: "dinning", isCompleted: false },
    ]


interface TodoProviderProsp {

}



export const TodoProvider = (props: PropsWithChildren<TodoProviderProsp>) => {
    const [todos, dispatch] = useReducer(reducer,todoList)


    return (
        <TodoContext.Provider
            value={{
                todos,
                dispatch
            }}
        >
            {props.children}
        </TodoContext.Provider>
    )
}