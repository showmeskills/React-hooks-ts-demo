import './App.css';
import {useContext,createContext,useState} from "react";
import {BrowserRouter as Router,Route,NavLink,Redirect,useHistory,useLocation} from 'react-router-dom';


const RouteContext = createContext({
  isAuthenticated:false,
  signout(){},
  signin(){},
})

const useAuth = ()=>useContext(RouteContext);

const RouteContextProvider = (props:any)=>{
  const [auth,setAuth]= useState(false);
  const signout = ()=>setAuth(false);
  const signin = ()=>setAuth(true);
  return (
    <RouteContext.Provider
      value={{
        isAuthenticated:auth,
        signout,
        signin,
      }}
    >
      {props.children}
    </RouteContext.Provider>
  )
}



interface ProspRouteAbout {
  path: string;
}

const RouteAbout:React.FC<ProspRouteAbout> = ({children,...rest})=>{
  const {isAuthenticated} = useAuth();
  const {pathname} = useLocation();
  return (
   <Route
    {...rest}
   >
     {
       isAuthenticated ?
        (children)
       :
       <Redirect to={{pathname:"/login",state:{from:pathname}}}/>
     }
    </Route>
  )
}

const About = ()=>{
  const {signout} = useAuth();
  const history = useHistory();

  const handleClick =()=>{
    signout();
    history.push("/home");
  }
  return(
    <div>
      <h1>About -- signout to home </h1>
      <button onClick={handleClick}>signout</button>
    </div>
    
  )
}


const Home = ()=>{
  return(
    <div>
      <h1>Home page</h1>
    </div>
  )
}
interface Location{
  from:{
    path: string;
  }
}


const Login = ()=>{
  const {signin}= useAuth()
  const history = useHistory();
  const {state:{from}}=useLocation<Location>();
  const handleClick = ()=>{
    signin()
    history.push('/about');
  };
  return (
    <div>
      <h1>Login page --- login to {from}</h1>
      <button onClick={handleClick}>login</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
      <RouteContextProvider>
        <ul>
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/about"> about</NavLink></li>
        </ul>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <RouteAbout path="/about">
          <About></About>
        </RouteAbout>
        <Redirect to="/home" from="/"/>
      </RouteContextProvider>
        <Redirect to="/home" from="/"/>
      </Router>
    </div>
  );
}





export default App;
