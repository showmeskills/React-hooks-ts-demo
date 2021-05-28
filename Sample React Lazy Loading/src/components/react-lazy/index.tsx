import {lazy,Suspense,useState,useEffect} from "react";
import Loading from "./Loading";
const Child = lazy(()=>import('./Child'))



const LazyLoading = ()=>{
    const [state,setState] = useState(false);
    //页面挂载完后自动显示
    useEffect(()=>{
        setState(true);
    },[])
    return(
        <div>
            {/* 点击触发loayloading */}
            {/* <button onClick={()=>setState(true)}>loading </button> */}
            <Suspense fallback={<Loading/>}>
                {
                    state&&<Child/>
                }
            </Suspense>
        </div>
    )
}

export default LazyLoading;