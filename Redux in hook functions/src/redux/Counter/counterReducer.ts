import {CounterActionTypes,ActionsTypes} from './models/actions-type';
interface CountState{
    count:number
}

const defaultState:CountState ={
    count:15,
}

export const countReducer = (state=defaultState,action:CounterActionTypes):CountState=>{
    switch(action.type){
        case ActionsTypes.INCREMENT_COUNTER:
            return {
                ...state,
                count:state.count+=action.payload
            };
        case ActionsTypes.DECREMENT_COUNTER:
            return{
                ...state,
                count:state.count-=action.payload
            }
        default:
            return state 
    }
}