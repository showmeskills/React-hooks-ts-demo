import {PropsWithChildren} from"react";
interface PropsOther{}


const Other = (props:PropsWithChildren<PropsOther>)=>{

    return(
        <div>
            <h1>Other page</h1>
        </div>
    )
}
export default Other;