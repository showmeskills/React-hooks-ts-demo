import {usePackageContextFunction} from './index';
const MyFunction = ()=>{
    const {increment,decrement} = usePackageContextFunction();
    return(
        <div>
            <h1>there is a function component</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}

export default MyFunction;