
import {changeState,ActionCounter} from './reducer';
export interface DefaultState{
    count: number;
}


let state:DefaultState = {
    count:0
}


const createStore = ()=>{
    //改变发布订阅模式
    const getState = ():DefaultState=>state
    //dom 渲染的发布模式,监视状态,观察者模式
    const listeners:Array<Function> = [];
    //订阅
    const subscribe = (listener:Function)=>listeners.push(listener);
    
    const dispatch = (action:ActionCounter)=>{
        changeState(state,action)
        //这里的listener相当与publish 发布
        listeners.forEach(listener=>listener())//run listener 函数
    }
    return{
        dispatch,
        getState,
        subscribe
    }
}
const store = createStore();

export const render=()=>{
    document.querySelector("#count1")!.innerHTML = store.getState().count.toString();
}

//这个就是为什么可以回有很多个状态
store.subscribe(render);
export default store;


