import {AysncTodos} from './todo-types';


export enum AsyncTodoActions {
    TODOS_REQUEST = "TODOS_REQUEST",
    TODOS_SUCCESS = "TODOS_SUCCESS",
    TODOS_FAILURE = "TODOS_FAILURE",
    TODO_ADD = "TODOS_ADD",
    TODO_CHANGE_STATE = "TODO_CHANGE_STATE",
    TODO_DELETE = "TODO_DELETE",
    TODO_SELECT_ALL = "TODO_SELECT_ALL",
    TODO_DELETE_ALL = "TODO_DELETE_ALL",
}

interface RequestTodos {
    loading:boolean,
    todo:AysncTodos[],
    error:string,
}
interface AddTodo{
    loading:boolean,
    todo:AysncTodos,
    error:string,
}

interface SelectAll{
    loading:boolean,
    todo:AysncTodos[],
    error:string,
    isChecked:boolean
}


export interface Todos_Request extends RequestTodos{
    type:typeof AsyncTodoActions.TODOS_REQUEST
}

export interface Todos_Success extends RequestTodos{
    type:typeof AsyncTodoActions.TODOS_SUCCESS
}

export interface Todos_Failure extends RequestTodos{
    type:typeof AsyncTodoActions.TODOS_FAILURE
}

export interface Todo_Add extends AddTodo{
    type:typeof AsyncTodoActions.TODO_ADD
}

export interface Todo_Change_State extends AddTodo{
    type:typeof AsyncTodoActions.TODO_CHANGE_STATE
}

export interface Todo_Delete extends AddTodo{
    type:typeof AsyncTodoActions.TODO_DELETE
}

export interface Todo_Select_All extends SelectAll{
    type:typeof AsyncTodoActions.TODO_SELECT_ALL
}

export interface Todo_Delete_All extends RequestTodos{
    type:typeof AsyncTodoActions.TODO_DELETE_ALL
}

export type AsyncActionsTypes = Todos_Request | Todos_Success | Todos_Failure | Todo_Add | Todo_Change_State | Todo_Delete |Todo_Select_All |Todo_Delete_All;