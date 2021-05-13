import{RouteProps} from "react-router-dom";
interface PageOne{
    RouteProps:RouteProps
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
const PageOne:React.FC<PageOne> = ()=>{
    
    return(
        <div>
            <h1>there is page one</h1>
        </div>
    )
}

export default PageOne;