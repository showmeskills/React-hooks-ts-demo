import { PropsWithChildren, useEffect } from "react";
import {RouteComponentProps,useParams,useRouteMatch,useLocation,useHistory}  from "react-router-dom";

interface Params {
   id:string
}  



interface PropsHome {
    
}
/*
RouteProps 传过来后
组件中会有三个对象
history:{
    action: "POP"
    block: ƒ block(prompt)
    createHref: ƒ createHref(location)
    go: ƒ go(n)
    goBack: ƒ goBack()
    goForward: ƒ goForward()
    length: 17
    listen: ƒ listen(listener)
    location: {pathname: "/123", search: "", hash: "", state: undefined}
    push: ƒ push(path, state)
    replace: ƒ replace(path, state)
},
location:{
    hash: "",
    pathname: "/123",
    search: "",
    state: undefined
},
match:{
    isExact: true
    params:{
        id: "123"
    }
    path: "/:id"
    url: "/123"
}
match中的params就是动态路由传值
*/

const Home = (props: PropsWithChildren<PropsHome>) => {
    //使用hook函数获取 match,location,history and id 值
    const {id} = useParams<Params>();//获取 id 值
    const match = useRouteMatch();//获取match 方法
    const location = useLocation();
    const history = useHistory();
    useEffect(() => {
        console.log(match)
        console.log(location)
        console.log(history)

    }, [])
    return (
        <div>
            <h1>{id}</h1>
        </div>
    )
}

export default Home;