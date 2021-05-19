import {createStore,applyMiddleware} from "redux";

import {composeWithDevTools} from "redux-devtools-extension";

import thunk,{ThunkMiddleware} from "redux-thunk";

import {rootReducers} from './rootReducers';

import {createLogger} from "redux-logger";

import {AppActions} from './models/app-actions';

const logger = createLogger();

export type AppState = ReturnType<typeof rootReducers>;

export const store = createStore<AppState,AppActions,{},{}>(rootReducers,
    composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<AppState,AppActions>,logger)))