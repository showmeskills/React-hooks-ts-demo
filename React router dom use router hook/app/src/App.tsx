import './App.css';
import { Route, Link, Switch, Redirect, useRouteMatch,useParams } from "react-router-dom";

//一级组件
const Home = () => <div>Home</div>

const Topics = () => {
  const {url,path}= useRouteMatch();
  return (
    <div>
      <h1>Topics</h1>
      <hr />
      <ul>
        <li><Link to={`${url}/rendering`}>Rendering</Link></li>
        <li><Link to={`${url}/components`}>Components</Link></li>
        <li><Link to={`${url}/propsState`}>PropsState</Link></li>
      </ul>
      <Switch>
        <Route path={`${path}/:topicId`} render={() => <Rendering />} />
        <Redirect to={`${url}/rendering`} from={`${path}`} />
      </Switch>
    </div>
  )
}
interface TopicId{
  topicId: string
}
//二级组件
const Rendering = () =>{
  const {topicId} = useParams<TopicId>();
  return(
    <div>{topicId}</div>
  )
}
//写法2
//const Rendering = () =><div>{topicId}</div>
// const Components = () => <div>Components</div>
// const PropsState = () => <div>PropsState</div>


//渲染组件
function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>
      <Switch>
        <Route path="/topics" render={() => <Topics />} />
        <Route path="/" exact render={() => <Home />} />
      </Switch>
    </div>
  );
}




export default App;
