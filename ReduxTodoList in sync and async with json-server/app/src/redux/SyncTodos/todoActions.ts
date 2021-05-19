import {AppActions} from '../models/app-actions';
import {TodoActionsTypes} from './models/actions-type';
import {Todos} from './models/todos-type'

export const AddTodo = (todo:Todos):AppActions=>({type:TodoActionsTypes.ADD_TODO,todo})
export const changeState = (todo:Todos):AppActions=>({type:TodoActionsTypes.CHANG_COMPLETE,todo})
export const deleteTodo = (id:number):AppActions=>({type:TodoActionsTypes.DELETE_TODO,id})
export const deleteAllTodo = ():AppActions=>({type:TodoActionsTypes.DELETE_ALL_IS_COMPLETED})