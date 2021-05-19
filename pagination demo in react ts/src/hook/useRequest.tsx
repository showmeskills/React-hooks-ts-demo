import {useState,useEffect} from "react";

interface State{
    currentPage: number;
    pageSize: number;
}

const state:State = {
    currentPage:1,
    pageSize:10,
}

type List = {
    id:number,
    name:string
}

interface OtherState{
    total:number;
    list:List[],
    pageCount:number;
}

const otherState:OtherState= {
    total:0,
    list:[],
    pageCount:0
}

export const useRequest=()=>{
    const [options,setOptions] = useState(state);
    const [data,setData] = useState(otherState);

    //请求数据
    const request = ()=>{
        let {currentPage,pageSize} = options;
        fetch(`http://localhost:8080/list?currentPage=${currentPage}&pageSize=${pageSize}`)
        .then(res=>res.json())
        .then(res=>setData({...res}));
    }

    useEffect(()=>{
        request();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[options])

    return{data,options,setOptions}
}