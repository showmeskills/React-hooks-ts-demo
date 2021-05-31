//useCallback

// import './App.css';
// import { useCallback,useState,PropsWithChildren,memo } from 'react';

// interface SubComponentProps{
//   handleClick():void;
//   count?:number;
// }
// //memo对props没有修改才进行缓存
// //如果count 从父组件传给子组件的父子会一起触发: props没有修改时才会进行memo的缓存处理
// //memo()2个参数 第一个是component,第二个是回掉函数可以处理是否更新组件
// const SubComponent = memo((props:PropsWithChildren<SubComponentProps>)=>{
//   console.log("child sub component run...");
//   return (
//     <div className="sub_component">
//       <button onClick={props.handleClick}>{props.children}</button>
//     </div>
//   )
// },()=>{
//   return true;
// })



// function App() {
//   const [count,setCount] = useState<number>(0);
//   console.log("parent app run...");
//   const handleClick =useCallback(()=>{
//     //console.log("我被subcomponent触发了App");
//     setCount((prevState)=>prevState+1);
//   },[])
//   return (
//     <div className="App">
//        count:{count}
//       <SubComponent handleClick={handleClick} >click me</SubComponent>
//       <button onClick={handleClick}>increment</button>
//     </div>
//   );
// }

// export default App;

//useMemo
export {};
