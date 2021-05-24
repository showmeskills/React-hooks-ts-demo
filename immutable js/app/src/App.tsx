import './App.css';
import {fromJS,Map,List} from "immutable";



function App() {
  // const obj = {
  //   x:0,
  //   y:[
  //     {
  //       z:{
  //         a:100,
  //       }
  //     },
  //     ["100","200",{w:3000}]
  //   ]
  // }
  // const result = fromJS(obj);
  // console.log(result);
  // const obj = {
  //   x:Map({a:0}),
  //   y:List(["a"])
  // }

  // console.log(obj);//{x: Map, y: List} 返回原生中 x是immutableMap,y是immutableList

  // const obj = {
  //   x:0,
  //   y:[
  //     {
  //       z:{
  //         a:100,
  //       }
  //     },
  //     ["100","200",{w:3000}]
  //   ]
  // }
  // const result = fromJS(obj);
  // console.log(result.get("y"))

  // const deep = Map({a:1,b:2,c:List([1,2,3,4])})
  // console.log(deep.toObject());//只转对象 {a: 1, b: 2, c: List}
  // console.log(deep.toJS());// 全转原生 {a: 1, b: 2, c: Array(4)}
  // console.log(deep.toArray());//转为数组 (3) [Array(2), Array(2), Array(2)]

  // const map1 = Map({a:1,b:2})
  // const map2 = {
  //   ...map1.toJS(),//Map 本身是不能展开作为rest对象的;需要使用.toJS()
  //   c:3
  // }
  // console.log(map2);//{a: 1, b: 2, c: 3}
  // const obj = {x:0,y:1}
  // const map3 = Map({
  //   ...obj,
  //   c:3,
  // })
  // console.log(map3.toJS());
  // const list =List(["a", "b", "c"]);
  // const arr =[
  //   "fff",
  //   ...list,
  //   "ggg"
  // ]
  // console.log(arr);// ["fff", "a", "b", "c", "ggg"]


  const map1 = Map<any>({
    x:0,
    y:List(["a", Map({f:900}), "c"]),
    z:Map({
      w:100
    })
  })
  // const result = map1.getIn(["z","w"])
  // const result1 = map1.getIn(["y",2])
  // // const result2 = map1.getIn(["y",1]).get("f");
  // const result2 = map1.getIn(["y",1,"f"])
  // console.log(result)
  // console.log(result1)
  // console.log(result2)
  // const result = map1.set("x",100);
  // const result1 = map1.setIn(["y",1,"f"],90000);
  // console.log(result.toJS())
  // console.log(result1.toJS())
  const result = map1.update("x",(v)=>{
    return v + 101;
  })
  console.log(result.toJS());//{x: 101, y: Array(3), z: {…}}
  const result1 = map1.updateIn(["y",1,"f"],(v)=>{
    return v-891
  })
  console.log(result1.toJS())//{f: 9}
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
