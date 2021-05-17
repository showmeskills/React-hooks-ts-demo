import {createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk,{ThunkMiddleware} from "redux-thunk";
import {createLogger} from "redux-logger";
import {rootReducer} from "./rootReducer";
import {AppActions} from './models/appActions';

const logger = createLogger();

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore<AppState,AppActions,{},{}>(rootReducer,
    composeWithDevTools(applyMiddleware(thunk as 
        ThunkMiddleware<AppState,AppActions>,logger)));
