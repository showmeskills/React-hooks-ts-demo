import {takeEvery,put} from "redux-saga/effects";

//put 方法是具体的action 处理异步请求
function * sagaAsync(data:any){
    yield put({type:"add",data:data.data})
}
//takeEvery 监听所有dispatch请求
function * sagas(){
    console.log(0);
    //接受所有dispatch对应的action的请求
    yield takeEvery("sagaAdd",sagaAsync)
}

export default sagas;