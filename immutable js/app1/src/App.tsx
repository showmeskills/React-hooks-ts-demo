import './App.css';
import { Map, List,Seq,fromJS } from "immutable";
function App() {
  // const map1 = Map({
  //   a:0,
  //   b:1,
  // })
  // //因为他们共享一个内存,所以把map1中修改完值后赋给map2
  // const map2 = map1.set('a',100);
  // // const map2 = map1.set('a',0);
  // console.log(map1.get("a"));//0
  // console.log(map2.get("a"));//100
  // console.log(map2.get("b"));//1
  // console.log(map1 === map2);//false


  // const map1 = Map({x:0,y:1})
  // const map2 = Map({x:0,y: 1})
  // console.log(map1===map2);//内存值比较
  // console.log(map1.equals(map2));//比较内容

  // const map1 = Map({x:0,y:0});
  // const map2 = map1.set('x',0);
  // console.log(map1===map2);//true
  // console.log(map1.equals(map2));//true

  // const map1 = Map({x:0})
  // const map1Copy = map1.set('x',100);
  // console.log(map1Copy.get("x"));




  // const log = (imm: any) => {
  //   console.log(imm.toJS())
  // }
  // const list = List(["a", "b", "c"]);
  // const list2 = list.push('d');
  // const list3 = list.unshift("f");
  // log(list2)
  // log(list3);
  //Map的map(键值,键名)方法 返回一个新的immutable map;而且这个map会把值修改了;
  //使用键名修改
  // const map1 = Map({ x: 0, y: 1, z: 2 });
  // let result = map1.map((v, k) => {
  //   return k.toUpperCase()//返回只能改value
  // })
  // let result2 = result.join(",");
  // //result 最后返回的是个Map,k 是把值修改了
  // console.log(result.toString())//Map { "x": "X", "y": "Y", "z": "Z" }
  // console.log(result2)//加了join()之后 ==>X,Y,Z

  // let result3 = map1.flip().map(v=>v.toUpperCase());
  // console.log(result3.toJS());//{0: "X", 1: "Y", 2: "Z"}

  /*
  使用键值修改
    const map1 = Map({x:0,y:1,z:2});
    let result =map1.map((v,k)=>{
      return v+1
    })
    console.log(result.toString())//Map { "x": 1, "y": 2, "z": 3 }
  */
 //immutable merge 本身是浅merge
    //merge 是返回一个新数据,会把旧数据保留
    //merge 1
    // const map1 = Map({x: 0, y: 1, z: 2 })
    // const map2 = Map({a:100,y:200,z:{w:300}})
    // const map3 = map1.merge(map2);
    // console.log(map3.toJS());//{x: 0, y: 200, z: {w:300}, a: 100}
    //merge 2
    // const map1 = Map({x: 0, y: 1, z: {o:230,w:10} })
    // const map2 = Map({a:100,y:200,z:{w:300}})
    // const map3 = map1.merge(map2);
    // console.log(map3.toJS())//{x: 0, y: 200, z: {w:300}, a: 100}
    //深merge 
    // const map1 = Map({x: 0, y: 1, z: {o:230,w:10} })
    // const map2 = Map<any>({a:100,y:200,z:{w:300}})
    // const map3 = map1.mergeDeep(map2);
    // console.log(map3.toJS());//{x: 0, y: 200, z: {o: 230, w: 300}, a: 100}
    //可以和原生JS的对象一起使用
      // const map1 = Map({x: 0, y: 1, z: {o:230,w:10} })
      // const map2 = Map<any>({a:100,y:200,z:{w:300}})
      // const obj = {y:300};
      // const map3 = map1.mergeDeep(map2,obj);
      // console.log(map3.toJS());//{x: 0, y: 300, z: {o: 230, w: 300}, a: 100}
      //不同数组也可以参与concat的操作
      // const list1 = List(['a','b','c']);
      // const list2 = List(['d','f']);
      // const arr = ['g','h'];
      // const list3 = list1.concat(list2,arr);
      // console.log(list3.toJS());//"a", "b", "c", "d", "f", "g", "h"]

      //原生中没有map方法,通过immutable的Seq 可以有map方法
    //   const obj = {x:0,y:1,z:2}
    //   const seq = Seq(obj).map((v,k)=>{
    //     console.log(v);
    //     console.log(k);
    //     return "www"
    //   })
    //  console.log(seq.toObject());//{x: "www", y: "www", z: "www"}

    //   const map1 = Map(obj);
    //   const result = map1.map((v,k)=>{
    //     console.log("v===>",v);
    //   })
    

  return (
    <div className="App">

    </div>
  );
}

export default App;
