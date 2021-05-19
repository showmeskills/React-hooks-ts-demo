import {SyncTodoActionsType} from "../SyncTodos/models/actions-type";
import {AsyncActionsTypes} from "../AsyncTodos/models/todo-actions-types";
export type AppActions = SyncTodoActionsType | AsyncActionsTypes;