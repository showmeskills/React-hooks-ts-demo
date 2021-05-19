import {combineReducers} from "redux";
import {syncTodoReducer} from './SyncTodos/todoReducers';
import {asyncTodoReducers} from "./AsyncTodos/AsyncTodoReducers";
export const rootReducers = combineReducers ({
    syncTodoReducer,
    asyncTodoReducers,
})