
import ChildA from './ChildA';
import {CountProvider} from './Count';

const Index = ()=>{
    return(
        <CountProvider>
            <h1>this is main component</h1>
            <ChildA/>
        </CountProvider>
    )
}

export default Index;