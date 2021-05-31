

//useMemo
import './App.css';
import {useState,PropsWithChildren,useMemo,useCallback,memo } from 'react';

interface ChildSubComponentAProps{
  a?:number;
  b?:number;
}
const ChildSubComponentA = (props:PropsWithChildren<ChildSubComponentAProps>)=>{
  console.log("ChildSubComponentA run....");
  return (
    <div>hello a:{props.a} b:{props.b}</div>
  )
}
const ChildSubComponentB = (props:PropsWithChildren<ChildSubComponentAProps>)=>{
  console.log("ChildSubComponentB run....");
  return (
    <div>hello b:{props.b}</div>
  )
}
interface SubComponentAProps{
  a:number;
  b:number;
}
const SubComponent = memo(({a,b}:PropsWithChildren<SubComponentAProps>)=>{
    console.log("a is running...");
    const Child1 = useMemo(()=><ChildSubComponentA a={a} b={b}/>,[a])//没有监视b 所有当触发b的时候ChildSubComponentA没有更新
    const Child2 = useMemo(()=><ChildSubComponentB b={b}/>,[b]);
    return (
      <div>
        {Child1}
        <hr />
        {Child2}
      </div>
    )
})






function App() {
  const [a,setA] = useState<number>(0);
  const [b,setB] = useState<number>(10);

  const handleA = useCallback(()=>setA((preState)=>preState+5),[]);
  const handleB = useCallback(()=>setB(preState=>preState+10),[]);
  return (
    <div className="App">
      <SubComponent a={a} b={b}  />
      <button onClick={handleA}>add in a component</button>
      <button onClick={handleB}>add in b component</button>
    </div>
  );
}

export default App;
