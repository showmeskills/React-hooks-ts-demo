import { useState,useEffect } from "react";
import axios from "axios";
type Data = 
    {
        userId:number,
        id:number,
        title:string,
        completed:false,
    }

interface RequestData{
    loading: boolean;
    data:Array<Data>
}

const requestData:RequestData={
    loading:false,
    data:[]
}


const Request = ()=>{
    const [data,setData] = useState<RequestData>(requestData)
    const [userId,setUserId] = useState<string>("");
     /**
     * @Description initial request user data;
     * @author Terrance
     */
    const requestAll = ()=>{
        setData({loading:true,data:[]});
        axios("http://jsonplaceholder.typicode.com/todos")
        .then(res=>{
            if(res.data.length > 0){
                setData({loading:false,data:res.data});
            }
        })
    }
    /**
     * @Description initial request user data;
     * @author Terrance
     */
    useEffect(()=>{
        requestAll();
    },[])

    /**
     * @Description filter user data depends on userId
     * @author Terrance
     */
    const handleSearch = (id:string)=>():void=>{
        if(!id){
            requestAll();
        }else{
            setData({loading:true,data:[]});
            axios(`http://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res=>{
                setData({loading:false,data:[res.data]});
            })
        }
    }
    return(
        <div>
           <input type="text" 
            placeholder="enter userid"
            value={userId}
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setUserId(e.target.value)}
            onKeyUp={handleSearch(userId)}
           />
           <h1>display</h1>
           <ul>
               {
                   data.loading?
                   <li>loading....</li>
                   :
                   data.data.map(item=>
                   <li key={item.id}>
                       {item.title}
                   </li>
                   )
               }
           </ul>
        </div>
    )
}

export default Request;