import { put,takeEvery,call,take,StrictEffect } from "redux-saga/effects";
import todoApi from './api';
import {AxiosResponse} from "axios";
import {TodoSagaActionTypes,Create_todo} from './actionsType';

//watchers
function * todoSaga():Generator<StrictEffect>{
    yield takeEvery(TodoSagaActionTypes.CREATE_TODO,createTodoWorker)
    yield takeEvery(TodoSagaActionTypes.DELETE_TODO,deleteTodoWorker)
    yield takeEvery(TodoSagaActionTypes.GET_TODOS,getTodoWorker)
    yield takeEvery(TodoSagaActionTypes.MARK_COMPLETED,markTodoWorker)
    yield takeEvery(TodoSagaActionTypes.MARK_INCOMPLETED,markInCompletedTodo)
}

//workers to do api request
function * createTodoWorker({id}:Create_todo){
    //create todo using api
    try{
        const reponse:AxiosResponse = yield call(todoApi.get,`/todos?id=${id}`);
        yield put({type:"SAGA_GET_ONE_TODO",data:reponse.data})
    }catch(e){

    }
    //update our redux store by dispatching a new action
}

function * deleteTodoWorker(){

}

function * getTodoWorker(){
    try{
        const reponse:AxiosResponse = yield call(todoApi.get,"/todos")
        yield put({type:"SAGA_GET_TODO",data:reponse.data})
    }catch(err){

    }
}

function * markTodoWorker(){

}

function * markInCompletedTodo(){

}


export default todoSaga;