import TodosHeader  from "./TodoHeader"
import TodosList from "./TodosList";
import '../../style/index.scss';
import TodoFeeter from './TodoFeeter';

const AsyncTodos = ()=>{

    return (
        <div className="SyncTodos">
            <h1>Asycn Todos in json-server redux</h1>
            <TodosHeader/>
            <TodosList/>
            <TodoFeeter/>
        </div>
    )
}

export default AsyncTodos;