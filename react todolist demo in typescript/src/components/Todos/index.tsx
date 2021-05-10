import {useState} from 'react';


import TodoHeader from './TodoHeader';
import TodoBody from './TodoBody';
import TodoFooter from './TodoFooter';

export interface InitialTodo{
    id:number;
    todo:string;
    isCompleted:boolean;
}

const initialTodo:InitialTodo[] = [
    {id:0,todo:"coding",isCompleted:true}, 
    {id:1,todo:"eating",isCompleted:true}, 
    {id:2,todo:"gaming",isCompleted:false},  
    {id:3,todo:"gaming1",isCompleted:false},  
    {id:4,todo:"gaming2",isCompleted:false},  
    {id:5,todo:"gaming3",isCompleted:false},  
]


const TodoList = ()=>{
    const [todos,setTodos] = useState<InitialTodo[]>(initialTodo);
    //添加
    const addTodos = (todo:InitialTodo)=>{
        setTodos(()=>[...todos,todo])
    }
    //回到主组件修改状态
    const toggleTodo = (selectodo:InitialTodo):void=>{
        const newTodo = todos.map((todo):InitialTodo=>{
            if(todo === selectodo){
                //使用结构法{...todo(把todo中的别属性拿过来),isCompleted 覆盖相同字段}
                return{
                    ...todo,
                    isCompleted:!todo.isCompleted
                }
            }
            return todo;
        })
        setTodos(newTodo);
    }
     /**
     * @Description delete todos array
     * @author Terrance
     * @params idx is index
     */
    //删除使用filter方法
    const deleteTodos = (idx:number):void=>{
        const todo = todos.filter((todo,index)=> index !== idx)
        setTodos(todo);
    }

    /**
     * @Description select all functions
     * @author Terrance
     */
    const selectAll = (bool:boolean):void=>{
        const newTodo = todos.map((todo):InitialTodo=>{
            return {
                ...todo,
                isCompleted:bool
            }
        })
        setTodos(newTodo);
    }

     /**
     * @Description delete completed is true
     * @author Terrance
     */
    const deleteAllCompleted = ():void=>{
        const todo = todos.filter((todo)=>!todo.isCompleted)
        setTodos(todo);
    }

    return(
        <div>
            <TodoHeader initialTodo={initialTodo} addTodos={addTodos}/>
            <TodoBody todos={todos} toggleTodo={toggleTodo} deleteTodos={deleteTodos}/>
            <TodoFooter todos={todos} deleteAllCompleted={deleteAllCompleted} selectAll={selectAll}/>
        </div>
    )
}
export default TodoList;