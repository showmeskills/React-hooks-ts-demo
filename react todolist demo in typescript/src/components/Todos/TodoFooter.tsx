import {useState, PropsWithChildren } from 'react';
import {InitialTodo} from './index';


interface PropsTodoFooter{
    todos:InitialTodo[]
    deleteAllCompleted():void
    selectAll(bool:boolean):void
}

const TodoFooter = (props:PropsWithChildren<PropsTodoFooter>)=>{
    const [isTrue,setTrue] = useState<boolean>(false);
    const selectAll = (e:React.ChangeEvent<HTMLInputElement>):void=>{
        props.selectAll(e.target.checked);
        setTrue(e.target.checked)
    }
    return(
        <div>
            select All:<input type="checkbox" 
                checked={isTrue}
                onChange={selectAll}
            />
            <span>completed tasks{props.todos.reduce((pre,todo)=>pre + (todo.isCompleted===true?1:0),0)}
                /All tasks
                {props.todos.length}</span>
            <button onClick={props.deleteAllCompleted}>delete todos</button>
        </div>
    )
}

export default TodoFooter;