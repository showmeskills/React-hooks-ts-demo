import ChildB from './ChildB';
import {CountConsumer} from './Count';

const ChildA = ()=>{
    return(
        <div>
            <h1>Child A</h1>
            <CountConsumer>
                    {
                        ({state,decrement,increment})=>{
                            return(
                                <div>
                                    state in child A:{state}
                                    <button onClick={decrement}>decrement</button>
                                    <button onClick={increment}>increment</button>
                                </div>
                            )
                        }
                    }
                </CountConsumer>
            <ChildB/>
        </div>
    )
}

export default ChildA