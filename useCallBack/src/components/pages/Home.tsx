import {PropsWithChildren,useState,useCallback} from"react";
import Title from "../useCallback/Title";
import Counter from '../useCallback/Count';
interface PropsHome{}


const Home = (props:PropsWithChildren<PropsHome>)=>{
    const [title,setTitle] = useState<string>("From Home page")
    const [count,setCount] = useState<number>(0)
    const [comments,setComments] = useState<number>(25);

    const handleTitle = useCallback(()=>{
        setTitle(prevState => prevState = "there is new title")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[title]);

    const increment =useCallback(()=>{
        setCount(prevState=>prevState+1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[count]);


    const incrementComments = useCallback(()=>{
        setComments(prevState=>prevState+10)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[comments]);
    
    return(
        <div>
            <h1>home page</h1>
            <Title title={title} handleTitle={handleTitle}></Title>
            <Counter count={count} increment={increment} comments={comments} incrementComments={incrementComments}>children</Counter>
        </div>
    )
}
export default Home;