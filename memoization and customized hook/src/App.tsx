import memoize from "memoize-one";
import {useState} from "react";
import useCount from './hooks/useCount';
import './App.css';


const Memoization = (props:any)=>{
  console.log(1);
  //当传进来的值没有发生改变的时候,memoize 不会再多次渲染
 const getNewString =  memoize((str)=> {
   console.log(2);
  return str +"world!"
 });
  return (
    <div>
      <h1>memoization demo</h1>
      <h1>{getNewString(props.title)}</h1>
    </div>
  )
}

function App() {
  // const [title,setTitle] = useState("hello");
  // const [count,setCount] = useState(0);

  const {count,increment,decrement} = useCount(0);
  return (
    <div className="App">
      {/* <input type="text" 
      value={title} 
      onChange={e=>setTitle(e.target.value)}
      />
      <div>count:{count}</div>
      <Memoization title={title}/>
      <button onClick={()=>setTitle("hello  ")}>onchange</button>
      <button onClick={()=>setCount(prevState=>prevState+1)}>increment</button> */}
      count:{count}
      <button onClick={()=>increment(2)}>increment</button>
      <button onClick={()=>decrement(5)}>decrement</button>
    </div>
  );
}

export default App;
