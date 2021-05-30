import {createStore,applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import {reducers} from "./reducer";
import todoSaga from './saga';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
        reducers,
        applyMiddleware(sagaMiddleware)
    )
    sagaMiddleware.run(todoSaga);

export default store;