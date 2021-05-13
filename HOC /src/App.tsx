import './App.css';
import {HOC} from './components';
import React,{PropsWithChildren,Component} from "react";



interface AppProps{
  title: string
  msg:string
}


function App(props:PropsWithChildren<AppProps>) {
  return (
    <div className="App">
      title:{props.title}
      msg:{props.msg}
    </div>
  );
}

//export interface AppInterface extends App{}
// @HOC
// class App extends Component<PropsWithChildren<AppProps>>{
//   render() {
//     return(
//         <div className="App">
//           world:{this.props.msg}
//           hello:{this.props.title}
//         </div>
//     )
//   }
// }

export default HOC(App);
// export default App;
