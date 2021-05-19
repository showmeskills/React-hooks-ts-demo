import {Todos} from './todos-type'

export enum TodoActionsTypes{
    ADD_TODO = "ADD_TODO",
    CHANG_COMPLETE = "CHANG_COMPLETE",
    DELETE_TODO = "DELETE_TODO",
    SELECT_ALL = "SELECT_ALL",
    DELETE_ALL_IS_COMPLETED = "DELETE_ALL_IS_COMPLETED",
}

interface SyncTodos{
    todo:Todos,
}
interface ID{
    id:number
}
interface CheckAll{
    checkedState:boolean
}



export interface Add_todo extends SyncTodos{
    type:typeof TodoActionsTypes.ADD_TODO
}

export interface Change_complete extends SyncTodos{
    type:typeof TodoActionsTypes.CHANG_COMPLETE
}

export interface Delete_todo extends ID{
    type:typeof TodoActionsTypes.DELETE_TODO
}

export interface Select_All extends CheckAll{
    type:typeof TodoActionsTypes.SELECT_ALL
}

export interface Delete_All_isCompleted{
    type:typeof TodoActionsTypes.DELETE_ALL_IS_COMPLETED
}

export type SyncTodoActionsType = Add_todo | Change_complete | Delete_todo |Select_All |Delete_All_isCompleted;