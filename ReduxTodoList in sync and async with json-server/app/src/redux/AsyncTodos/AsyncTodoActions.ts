import {Dispatch} from"redux";
import { AppActions } from "../models/app-actions";
import {AsyncTodoActions} from "./models/todo-actions-types";
import {AysncTodos} from "./models/todo-types";
import axios from "../../server/axios";

const requestTodos = ():AppActions=>({
    type:AsyncTodoActions.TODOS_REQUEST,
    loading:true,
    todo:[],
    error:"",
})

const recieveTodos = (todo:AysncTodos[]):AppActions=>({
    type:AsyncTodoActions.TODOS_SUCCESS,
    loading:false,
    todo,
    error:"",
})

const invalidateTodos = (error:string):AppActions=>({
    type:AsyncTodoActions.TODOS_FAILURE,
    loading:false,
    todo:[],
    error:error,
})

const todoAdd = (todo:AysncTodos):AppActions=>({
    type:AsyncTodoActions.TODO_ADD,
    loading:false,
    todo,
    error:""
})

const ChangeStateTodo = (todo:AysncTodos):AppActions=>({
    type:AsyncTodoActions.TODO_CHANGE_STATE,
    loading:false,
    todo,
    error:"",
})

const TodoDelete = (todo:AysncTodos):AppActions=>({
    type:AsyncTodoActions.TODO_DELETE,
    loading:false,
    todo,
    error:""
})

const TodoSelectAll = (isChecked:boolean):AppActions=>({
    type:AsyncTodoActions.TODO_SELECT_ALL,
    loading:false,
    todo:[],
    error:"",
    isChecked
})

const DeleteTodoAll = ():AppActions=>({
    type:AsyncTodoActions.TODO_DELETE_ALL,
    loading:false,
    todo:[],
    error:"",
})

const baseUrl:string = "http://localhost:3000/todos"

export const boundRequestTodos = ()=> async (dispatch:Dispatch<AppActions>)=>{
    try{
        dispatch(requestTodos())
        const res = await axios.get(baseUrl)
        dispatch(recieveTodos(res.data))
    }catch(e){
        dispatch(invalidateTodos(e));
    }
}

export const dispatchAddTodo = (todo:AysncTodos) => async (dispatch:Dispatch<AppActions>)=>{
    try{
        const res = await axios.post(baseUrl,todo)
        dispatch(todoAdd(res.data))
    }catch(e){
        dispatch(invalidateTodos(e));
    }
}

export const dispatchChangeState = (todo:AysncTodos) => async(dispatch:Dispatch<AppActions>)=>{
    try{
            const newTodo = {...todo,isCompleted:!todo.isCompleted}
            const res = await axios({
                method:"patch",
                url:`${baseUrl}/${todo.id}`,
                data:newTodo
            });
            dispatch(ChangeStateTodo(res.data));
    }catch(e){
            console.log(e);
    }
}

export const dispatchTodoDelete = (todo:AysncTodos) => async (dispatch:Dispatch<AppActions>)=>{
    try{
        await axios({
            method:"delete",
            url:`${baseUrl}/${todo.id}`
        })
        dispatch(TodoDelete(todo));
    }catch(e){
        console.log(e);
    }
}

export const dispatchSelectAll = (isChecked:boolean) => async (dispatch:Dispatch<AppActions>)=>{
    try{
        const res1 = await axios.get(baseUrl)
        const array:AysncTodos[] = res1.data;
        const id = array.map(todo=>todo.id);
        for(let i=0; i<array.length; i++){
            await axios({
                method:"patch",
                url:`${baseUrl}/${id[i]}`,
                data:{
                    isCompleted:isChecked
                }
            })
        }
        dispatch(TodoSelectAll(isChecked));
      
    }catch(e){
        console.log(e);
    }
}

export const dispatchTodoDeletAll = ()=> async (dispatch:Dispatch<AppActions>)=>{
    try{
        const res1 = await axios.get(baseUrl)
        const array:AysncTodos[] = res1.data;
        const id = array.map(todo=>todo.id);
        for(let i=0; i<array.length; i++){
            await axios({
                method:"delete",
                url:`${baseUrl}/${id[i]}`,
            })
        }
        dispatch(DeleteTodoAll());
    }catch(e){
        console.log(e);
    }
}
