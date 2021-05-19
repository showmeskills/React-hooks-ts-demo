import './App.css';
import{CustomizedHook,CustomizedHook1} from './components';
import Table from "./pages/Table";
function App() {
  return (
    <div className="App">
      <CustomizedHook/>
      <CustomizedHook1/>
      <Table/>
    </div>
  );
}

export default App;
