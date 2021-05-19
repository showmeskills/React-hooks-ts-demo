
import TodosHeader  from "./TodoHeader"
import TodosList from "./TodosList";
import '../../style/index.scss';
import TodoFeeter from './TodoFeeter';
const SyncTodos = ()=>{

    return (
        <div className="SyncTodos">
            <h1>Sync Todos in redux</h1>
            <TodosHeader/>
            <TodosList/>
            <TodoFeeter/>
        </div>
    )
}

export default SyncTodos