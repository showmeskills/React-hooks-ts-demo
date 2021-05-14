import { PropsWithChildren,useContext } from "react";
import {userContext,DECREMENT,INCREMENT} from "../useReducer";

interface HomeProps{

}

const Home =(props:PropsWithChildren<HomeProps>)=>{
    const {setCount}= useContext(userContext)
    return(
        <div>
            this is a Home page
            <button onClick={()=>setCount({type:DECREMENT})}>add</button>
            <button onClick={()=>setCount({type:INCREMENT})}>minus</button>
        </div>
    )
}

export default Home;