import { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux";
import './App.css';
import {TodoSagaActionTypes,Create_todo} from './redux/actionsType';
function App() {
  const todo = useSelector((state:any)=>state.todo)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch({type:TodoSagaActionTypes.GET_TODOS})
    dispatch({type:TodoSagaActionTypes.CREATE_TODO,id:1})
  },[])
  console.log(todo);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
