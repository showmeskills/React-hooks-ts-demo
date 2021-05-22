import './App.css';
import {useEffect,useState,Fragment} from "react";
import {BrowserRouter as Router,Route,NavLink,useRouteMatch,Switch,withRouter, useHistory, useLocation} from "react-router-dom";

const Home = ()=><div>Home</div>
const About = ()=><div>About</div>
//children 组件会一直渲染,但是match有在匹配到相同路径时才会显示,不然是null
//通过这点可以做一些高亮，动画
const DashBoard = ()=>{
  const math = useRouteMatch();
  useEffect(()=>{
    console.log(math);
  },[])
  return(
    <div>Dashboard</div>
  )
}


const Profile = withRouter((props:any)=>{
  // console.log(props);
  return(
    <div>Profile</div>
  )
})
const navList = [
  {
    id:"001",
    name:"home",
  },
  {
    id:"002",
    name:"about",
  },
  {
    id:"003",
    name:"dashBoard",
  },
  {
    id:"004",
    name:"profile",
  },
];

const MyNavLink = ()=>{
  const [list] = useState(navList);
  const {pathname} = useLocation();
  const history = useHistory();
  const handleClick = (path:string)=>()=>{
    history.push(`/${path}`)
  }
  return(
    <Fragment>
      {
         list.map(value=>{
           return (
            <li key={value.id}
              onClick ={handleClick(value.name)}
            > 
              {pathname===`/${value.name}`? `>` :''} {value.name}
            </li>
           )
         })
      }
    </Fragment>
  )
}


function App() {
  return (
    <div className="App">
        <Router>
          <ul>
            <MyNavLink/>
          </ul>
          <Switch>
            <Route path="/home" exact component={()=><Home/>}/>
            <Route path="/about" exact render={()=><About/>}/>
            <Route path="/dashBoard" children={()=><DashBoard/>}/>
            <Route path="/profile">
              <Profile></Profile>
            </Route>
          </Switch>
      </Router>
      </div>
  );
}

export default App;
