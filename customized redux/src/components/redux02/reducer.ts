import {DefaultState} from './store';

export enum ActionsType{
    INCREMENT = "INCREMENT",
    DECREMENT = "DECREMENT"
}

interface PayLoad{
    payload:number;
}

interface Action_Increment extends PayLoad{
    type:typeof ActionsType.INCREMENT
}

interface Action_Decrement extends PayLoad{
    type:typeof ActionsType.DECREMENT
}

export type ActionCounter = Action_Increment | Action_Decrement;
//纯函数:
//1.相同的入参,得到相同的输出
//2.不能修改入参, 意思就是返回一个新state(不修改原有的参数)
export const changeState = (state:DefaultState,action:ActionCounter)=>{
    switch(action.type){
        case ActionsType.INCREMENT:
            return{
                ...state,
                count:state.count+=action.payload
            }
        case ActionsType.DECREMENT:
            return{
                ...state,
                count:state.count-=action.payload
            }
        default:
            return state.count;
    }
}