
const defualtState = {
    todo:{}
}

export const reducers = (state=defualtState,action:any)=>{

    switch(action.type){
        // case "SAGA_GET_TODO":
        // return {
        //     ...state,
        //     todo:state.todo=action.data,
        // };
        case "SAGA_GET_ONE_TODO":
            console.log(action.data)
        return {
            ...state,
            todo:state.todo=action.data,
        }
        default:
            return state;
    }
}