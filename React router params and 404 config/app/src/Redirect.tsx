import './App.css';
import {BrowserRouter as Router,Route,NavLink,Redirect} from 'react-router-dom';
const About = ()=>{
  return (
    <div>
      <h1>About page</h1>
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


function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/about"> about</NavLink></li>
        </ul>

        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Redirect to="/home" from="/"/>
      </Router>
    </div>
  );
}

export default App;
