import {Consumer} from './testContext';

const ChildD = ()=>{
    return (
        <div>
            <h1>Child D component,export in C component</h1>
               {/* 对于函数组件需要使用Consumer,因为函数组件没有this */}
               <Consumer>
                   {
                       (value)=><div>{value}</div>
                   }
               </Consumer>
        </div>
    )
}
export default ChildD;