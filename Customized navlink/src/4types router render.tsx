// import './App.css';
// import {useEffect} from "react";
// import {BrowserRouter as Router,Route,NavLink,useRouteMatch,Switch} from "react-router-dom";
export {};
// const Home = ()=><div>Home</div>
// const About = ()=><div>About</div>
// //children 组件会一直渲染,但是match有在匹配到相同路径时才会显示,不然是null
// //通过这点可以做一些高亮，动画
// const DashBoard = ()=>{
//   const math = useRouteMatch();
//   useEffect(()=>{
//     console.log(math);
//   },[])
//   return(
//     <div>Dashboard</div>
//   )
// }


// const Profile = ()=>{
//   return(
//     <div>Profile</div>
//   )
// }


// function App() {
//   return (
//     <div className="App">
//         <Router>
//           <ul>
//             <li><NavLink activeStyle={{color:"red",fontSize:"30px"}} exact to="/">Home</NavLink></li>
//             <li><NavLink activeStyle={{color:"red",fontSize:"30px"}} to="/about">About</NavLink></li>
//             <li><NavLink activeStyle={{color:"red",fontSize:"30px"}} to="/dashboard">DashBoard</NavLink></li>
//             <li><NavLink activeStyle={{color:"red",fontSize:"30px"}} to="/profile">Profile</NavLink></li>
//           </ul>
//           <Switch>
//             <Route path="/" exact component={()=><Home/>}/>
//             <Route path="/about" exact render={()=><About/>}/>
//             <Route path="/dashboard" children={()=><DashBoard/>}/>
//             <Route path="/profile">
//               <Profile></Profile>
//             </Route>
//           </Switch>
//       </Router>
//       </div>
//   );
// }

// export default App;
