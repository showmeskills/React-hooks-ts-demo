import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoFeeter from './TodoFeeter';
import{TodoProvider} from './TodosProvider';


const TodosConatiner = ()=>{
    return(
        <TodoProvider>
            <TodoHeader/>
            <TodoList/>
            <TodoFeeter/>
        </TodoProvider>
    )
}

export default TodosConatiner;