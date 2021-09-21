
import {connect} from "react-redux";
import {} from "redux-saga";
import {List, ListActionsTypes} from "../../redux/interface/saga-type"
import { AppState } from "../../redux/rootStore";
interface IMapStateToProps{
    loading:boolean;
    lists:List[]
    error:string;
}
interface IMapDispatchToProps{
    getAllLists():void;
    getSpecLists(length:number):void;
}
export interface IProps {
    loading?:boolean;
    lists?:List[]
    error?:string;
    getAllLists?():void;
    getSpecLists?(length:number):void;
}


const Btn2 = (props:IProps)=>{
    const {loading,lists,error,getAllLists,getSpecLists} = props;
    
    return (
        <>
             <button onClick={getAllLists}>Get All Lists</button>
            <br />
            <button onClick={()=>getSpecLists!(2)}>Get Spec List</button>
            {
                loading&&<div>Loading......</div>
            }
            {
                lists&&lists.length > 0?
                <ul>
                    {
                        lists.map((list)=>{
                            return(
                                <li key={list.id}>
                                    <div>
                                        userId = {list.userId}
                                    </div>
                                    <div>
                                        title = {list.title}
                                    </div>
                                    <div>
                                        body = {list.body}
                                    </div>

                                </li>
                            )
                        })
                    }
                </ul>
                :
                <div>{error}</div>
            }  
        </>
    )
}


const mapStateToProps = (state:AppState):IMapStateToProps=>({
    loading:state.listReducer.loading,
    lists:state.listReducer.list,
    error:state.listReducer.error
})

const mapDispatchToProps = (dispatch:Function):IMapDispatchToProps=>({
    getAllLists:()=>dispatch({type:ListActionsTypes.GET_LISTS}),
    getSpecLists:(length:number)=>dispatch({type:ListActionsTypes.GET_SPEC_LIST,length})
})



export default connect(mapStateToProps,mapDispatchToProps)(Btn2);