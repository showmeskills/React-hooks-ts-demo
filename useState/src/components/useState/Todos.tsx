import { useState } from "react";

interface PropsTodos{
    id:number;
    todo:string
}

const Todos = ()=>{
    const [todo,setTodo] = useState<string>("");
    const [todos,setTodos] = useState<PropsTodos[]>([]);

    return(
        <div>
            <input type="text" 
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
            />
            <button onClick={()=>{
                    setTodos(()=>[...todos,{id:todos.length+1,todo:todo}])
                    setTodo(()=>"");
                }}>add todo</button>
            <ul>
                {
                    todos.map(item=><li key={item.id}>{item.todo}</li>)
                }
            </ul>
        </div>
    )
}

export default Todos;
