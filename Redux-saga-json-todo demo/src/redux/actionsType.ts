export enum TodoSagaActionTypes{
    CREATE_TODO = "CREATE_TODO",
    DELETE_TODO = "DELETE_TODO",
    GET_TODOS = "GET_TODOS",
    MARK_COMPLETED = "MARK_COMPLETED",
    MARK_INCOMPLETED = "MARK_INCOMPLETED"
}

interface Todo{
    id:number;
}

export interface Create_todo extends Todo{
    type:typeof TodoSagaActionTypes.CREATE_TODO
}
interface Delete_todo{
    type:typeof TodoSagaActionTypes.DELETE_TODO
    id:string;
}
interface Get_todos{
    type:typeof TodoSagaActionTypes.GET_TODOS
    id:string;
}
interface Mark_completed{
    type:typeof TodoSagaActionTypes.MARK_COMPLETED
    id:string;
}
interface Mark_incompleted{
    type:typeof TodoSagaActionTypes.MARK_INCOMPLETED
    id:string;
}

export type TodoActions = Create_todo | Delete_todo | Get_todos | Mark_completed |Mark_incompleted