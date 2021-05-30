import './App.css';
import {useSelector,useDispatch} from "react-redux";

function App() {
  const count = useSelector((state:any)=>state.count);
  const dispatch = useDispatch();
  const handleClick = ()=>dispatch({type:"sagaAdd",data:5})
  return (
    <div className="App">
      count:{count}
      <button onClick={handleClick}>increment</button>
    </div>
  );
}

export default App;
