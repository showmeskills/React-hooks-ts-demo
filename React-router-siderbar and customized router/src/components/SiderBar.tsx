import {Route,Switch,NavLink} from "react-router-dom";
interface Routes{
    path: string;
    exact?: boolean;
    Siderbar():JSX.Element;//函数组件的返回值
    Main(): JSX.Element;
}

const routes:Routes[] = [
    {
        path:"/",
        exact:true,
        Siderbar(){
            return (<div>home!</div>)
        },
        Main:()=><h2>Home</h2>
    },
    {
        path:"/bubblegum",
        Siderbar(){
            return (<div>bubblegum!</div>)
        },
        Main:()=><h2>bubblegum</h2>
    },
    {
        path:"/shoelaces",
        Siderbar(){
            return (<div>shoelaces!</div>)
        },
        Main:()=><h2>Shoelaces</h2>
    },
]




const SiderBar = ()=>{
    return (
        <div>
            <div className="sidebar">
                <ul>
                {
                    routes.map(value=>{
                        return <li key={value.path}>
                                <NavLink to={value.path}>
                                    {value.path==="/"?"home":value.path.slice(1)}
                                </NavLink>
                                </li>
                    })
                }
                </ul>
                <Switch>
                    {
                        routes.map(({path,exact,Siderbar})=>{
                            return (
                                <Route
                                key={path}
                                path={path}
                                exact={exact}
                                render={()=><Siderbar/>}
                                />
                                
                            )
                        })
                    }
                </Switch>
            </div>
            <div className="main">
                {
                    routes.map(({path,exact,Main})=>{
                        return (
                            <Route
                            key={path}
                            path={path}
                            exact={exact}
                            render={()=><Main/>}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SiderBar;