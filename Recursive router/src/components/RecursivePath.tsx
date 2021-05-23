import {Route, useLocation,useHistory,Link,useRouteMatch, useParams,Switch,Redirect} from "react-router-dom";


interface Peeps{
    id:number;
    name:string;
    friends:number[]
}

const PEEPS:Peeps[] = [
    {id:0,name:"Mike",friends:[1,2,3]},
    {id:1,name:"Sean",friends:[0,3]},
    {id:2,name:"Kim",friends:[0,1,3]},
    {id:3,name:"David",friends:[1,2]},
]


const find =(id:number)=> PEEPS.find(item=>item.id === id);


interface Params{
    id:string;
}

const Person = ()=>{
    const {url} = useRouteMatch();//url 是获取上一级的路径 "访问:localhost:3000/a"返回:url=> "/"
    const {id} = useParams<Params>();
    const item = find(~~id);
    return (
        <>
            <h1>{item?.name}的朋友:</h1>
            <ul>
                {
                    item?.friends.map(id=>{
                        return (
                            <li key={id}><Link to={`${url}/${id}`}>{find(id)?.name}</Link></li>
                        )
                    })
                }
            </ul>

            {/* Recursive Person component */}
            {/* 定义动态路径 */}
            <Route path={`${url}/:id`}>
                <Person></Person>
            </Route>
        </>
    )
}



const RecursivePath = ()=>{
    return (
        <div>
            <Switch>
                <Route path="/:id" render={()=><Person/>}/>
                <Redirect to={`/${PEEPS[0].id}`}/>
            </Switch>
        </div>
    )
}

export default RecursivePath;