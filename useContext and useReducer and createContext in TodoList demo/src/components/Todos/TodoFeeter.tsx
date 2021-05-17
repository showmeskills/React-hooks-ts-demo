import {useContext} from 'react';
import {TodoContext,ActionsType} from './TodosProvider'


const TodoFeeter = ()=>{
    const {todos,dispatch} = useContext(TodoContext)
    const total = todos.filter(todo=>todo.isCompleted).length
    const selectAll = (e:React.ChangeEvent<HTMLInputElement>)=>{
        dispatch({type:ActionsType.TODO_CHECK,isChecked:e.target.checked})
    }
    return(
        <div>
            <input type="checkbox" 
            checked={total === todos.length && total !== 0}
            onChange = {selectAll}
            />
            <span>completed {todos.reduce((prev,todo)=>prev+(todo.isCompleted===true? 1 : 0),0)}/all todos {todos.length}</span>
            <button onClick={()=>dispatch({type:ActionsType.DELETE_ALL_COMPLETED})}>delete all complete</button>
        </div>
    )
}

export default TodoFeeter;