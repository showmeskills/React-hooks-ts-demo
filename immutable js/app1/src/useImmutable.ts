import {Map,List} from "immutable";


const log = (imm:any)=>{
  console.log(imm.toJS())
}


const list = List(["a", "b", "c"]);
const list2 = list.push('d');
const list3 = list.unshift("f");
log(list2)
log(list3);