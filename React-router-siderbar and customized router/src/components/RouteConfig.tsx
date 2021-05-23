import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import { PropsWithChildren,Fragment} from "react";
//first level Components
const Sandwiches = () => {
    return (
        <div>
            sandwiches
        </div>
    )
}
//二级路由渲染
const Tacos = () => {
    return (
        <div>
            <h1>Tacos</h1>
            <ul>
                {
                    routes.map((value) => {
                        return (
                            <Fragment key={value.path}>
                                {
                                    value.routes?.map((subvalue) => {
                                        return (
                                            <li key={subvalue.path}>
                                                <NavLink to={subvalue.path}>
                                                    {subvalue.path.slice(7)}
                                                </NavLink>
                                            </li>
                                        )
                                    })
                                }
                            </Fragment>
                        )
                    })
                }
            </ul>
            <div>
                {
                    routes.map((value) => {
                        return (
                            <>
                                {
                                    value.routes?.map((subvalue) => {
                                        return (
                                            <Switch>
                                                <Route
                                                    key={subvalue.path}
                                                    path={subvalue.path}
                                                >
                                                    <RouteWithSubRoutes route={subvalue}></RouteWithSubRoutes>
                                                </Route>
                                            </Switch>
                                        )
                                    })
                                }
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

//sub Components
const Bus = () => (<div>Bus</div>)
const Cart = () => (<div>Cart</div>)


interface Routes {
    path: string;
    component(): JSX.Element
    routes?: Routes[]
}


//route config
const routes: Routes[] = [
    {
        path: '/sandwiches',
        component: Sandwiches,
    },
    {
        path: "/tacos",
        component: Tacos,
        routes: [
            {
                path: "/tacos/bus",
                component: Bus,
            },
            {
                path: "/tacos/cart",
                component: Cart
            }
        ]
    }
]

interface RouteWithSubRoutesProps {
    route: Routes
}


//public route component
const RouteWithSubRoutes = (props: PropsWithChildren<RouteWithSubRoutesProps>) => {

    return (
        <props.route.component></props.route.component>
    )
}

//一级路由渲染
const RouteConfig = () => {
    return (
        <div>
            <ul>
                {
                    routes.map(route => {
                        return (
                            <li key={route.path}>
                                <NavLink to={route.path}>
                                    {route.path.slice(1)}
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <div>
                {
                    routes.map(route => {
                        return (
                            <Switch>
                                <Route
                                    key={route.path}
                                    path={route.path}
                                >
                                    <RouteWithSubRoutes route={route}></RouteWithSubRoutes>
                                </Route>
                            </Switch>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RouteConfig;