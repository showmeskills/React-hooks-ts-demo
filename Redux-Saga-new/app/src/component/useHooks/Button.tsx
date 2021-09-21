import { useSelector,useDispatch } from "react-redux";
import {ListActionsTypes} from "../../redux/interface/saga-type"
import { AppState } from "../../redux/rootStore";
const Btn = ()=>{
    const dispatch = useDispatch();
    const loading = useSelector((state:AppState)=>state.listReducer.loading)
    const lists = useSelector((state:AppState)=>state.listReducer.list)
    const error = useSelector((state:AppState)=>state.listReducer.error)
    const handleRequestLists = ()=>dispatch({type:ListActionsTypes.GET_LISTS});
    const hanldeRequestSpecLists=(length:number)=>dispatch({type:ListActionsTypes.GET_SPEC_LIST,length})
   
    return (
        <>
            <button onClick={handleRequestLists}>Get All Lists</button>
            <br />
            <button onClick={()=>hanldeRequestSpecLists(5)}>Get Spec List</button>
            {
                loading&&<div>Loading......</div>
            }
            {
                lists.length > 0?
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



export default Btn;