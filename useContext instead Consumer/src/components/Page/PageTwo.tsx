import { PropsWithChildren } from "react";
import{RouteProps} from "react-router-dom";
interface PageTwo{
    RouteProps:RouteProps
}


// eslint-disable-next-line @typescript-eslint/no-redeclare
const PageTwo = (props:PropsWithChildren<PageTwo>)=>{
    return(
        <div>
            <h1>there is page two</h1>
        </div>
    )
}

export default PageTwo;