
export interface DefaultState {
    count:number;
}

export const defaultState:DefaultState = {
    count : 0,
}

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

interface CountAction {
    payload:number;
}
interface Increment_Counter extends CountAction{
    type: typeof INCREMENT
}
interface Decrement_Counter extends CountAction{
    type: typeof DECREMENT
}

export type CounterActionType = Increment_Counter | Decrement_Counter;


export const changeState = (action:CounterActionType)=>{
    switch(action.type){
        case INCREMENT:
            defaultState.count +=action.payload;
        break;
        case DECREMENT:
            defaultState.count -=action.payload;
        break;
        default:
            return defaultState;
    }
}

//DOM 操作
export const renderDOM = ()=>{
   let countEle =  document.querySelector("#count")!;
   countEle.innerHTML = defaultState.count.toString();
}

const dispatch = (action:CounterActionType)=>{
    changeState(action)
    renderDOM();
}

export {
    dispatch
}
