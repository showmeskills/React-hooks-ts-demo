import {ActionsTypes} from './models/actions-type';
import {AppActions} from '../models/appActions';

export const increment = (payload:number):AppActions=>({
    type:ActionsTypes.INCREMENT_COUNTER,
    payload,
})

export const decrement = (payload:number):AppActions=>({
    type:ActionsTypes.DECREMENT_COUNTER,
    payload,
})