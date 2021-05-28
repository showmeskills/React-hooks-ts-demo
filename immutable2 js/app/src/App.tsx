import {Map,is,Set,List,Seq,Range} from "immutable";

import './App.css';



function App() {
  // const obj = Map({a:1,b:2,c:3})
  // const obj1 = Map({a:1,b:2,c:3})
  // console.log(is(obj,obj1));

  // const obj2 = Map({a:2,b:4,c:6})
  // const newObj = Set().add(obj2);
  // console.log(newObj.toJS())//返回一个数组的集合在转js之后Set是不可以重复的es6的特性(去重)
  // console.log(newObj.has(obj1))//判断obj1是否在 newObj中
  // const set = Set(["a", "b", "c","a"]);
  // console.log(set.toJS());

  // console.log(list.toJS());


  // const list2 = list.updateIn([2],(v)=>{
    //   console.log(v)
    // })
    //withMutations 类似watch 获取值,但是可以在里面进行get和set操作
    // const list3 = list.withMutations((v)=>{
      //   console.log(v.toJS());
      // })
  // const list = List<any>(["a", "b", Map({x:0,y:1}),"a"]);
  // const list4 = list.get(2).withMutations((v:any)=>{
  //   v.set("x",9)
  //   console.log(v.toJS());//{x: 9, y: 1}
  //   return 0;
  // })
  // console.log(list4.toJS());//{x: 9, y: 1}
  // const list2 = list.setIn([2,"y"],200);
  // console.log(list2.toJS());//["a", "b", {x:0,y:200}, "a"]
  // const list = [1,2,3,4,5,6,7,8];
  // //原生js 会处理所有的数据
  // const list1 = list.filter(item=>{
  //   console.log(item)
  //   return item%2===0
  // }).map(item=> {
  //   console.log(item)
  //   return item*item
  // });
  // console.log(list1[0]);
  // //只会运算 当前需要的数据/惰性
  // const list2 = Seq(list).filter(item=>{
  //   console.log(item)//1,2,3,4
  //   return item%2===0
  // }).map(item=>{
  //   console.log(item)//4
  //   return item*item
  // });
  // console.log(list2.get(1));//16

  // const map = Map({a:1,b:2,c:3});
  // const lazySeq = Seq(map);
  // const newMap = lazySeq.flip()//{1:a,2:b,3:c}
  //               .map(value=>value.toLocaleUpperCase())//{1:A,2:B,3:C}
  //               .flip();//{A: 1, B: 2, C: 3}
  // console.log(newMap.toJS());//{A: 1, B: 2, C: 3}

  const aRange = Range(1,Infinity)
  .skip(1000)//从1000开始
  .map(n=>-n)//取负数
  .filter(n=> n %2 === 0)
  .take(2)//取两个
  .reduce((r,n)=>r*n,1)
  console.log(aRange);
  
  
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
