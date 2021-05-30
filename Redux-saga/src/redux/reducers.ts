
const defaultState = {
    count:0
}


export const reducers = (state=defaultState,action:any)=>{

    switch(action.type){
        case "add":
            console.log(2)
            return {
                count:state.count+action.data
            }
        default:
            return state;
    }
}
