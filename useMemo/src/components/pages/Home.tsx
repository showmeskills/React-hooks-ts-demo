import { PropsWithChildren, useState, useCallback,useMemo } from "react";
import Title from "../useCallback/Title";
import Counter from '../useCallback/Count';
interface PropsHome { }

const subscribers = [
    { id: 1, name: 'Barry' },
    { id: 2, name: 'Terry' },
    { id: 3, name: 'Larry' },
]

const Home = (props: PropsWithChildren<PropsHome>) => {
    const [title, setTitle] = useState<string>("From Home page")
    const [count, setCount] = useState<number>(0)
    const [comments, setComments] = useState<number>(25);

    const [string, setString] = useState<string>("");
    const [searchString, setSearchString] = useState<string>("");


    const changeString = (e: React.ChangeEvent<HTMLInputElement>) => {
        setString(e.target.value)
    }
    const searchName = () => {
        setSearchString(string);
    }
    const filterSubscriberNames = useMemo(
        ()=>
        subscribers.filter(subscriber => {
        console.log("FiltersubscriberNames fired!")
        return subscriber.name.toLowerCase().includes(searchString.toLowerCase());
    }),[searchString])

    const handleTitle = useCallback(() => {
        setTitle(prevState => prevState = "there is new title")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [title]);

    const increment = useCallback(() => {
        setCount(prevState => prevState + 1)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count]);


    const incrementComments = useCallback(() => {
        setComments(prevState => prevState + 10)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [comments]);

    return (
        <div>
            <h1>home page</h1>
            <Title title={title} handleTitle={handleTitle}></Title>
            <Counter count={count} increment={increment} comments={comments} incrementComments={incrementComments}>children</Counter>
            <div>
                <input type="text" value={string} onChange={changeString} />
                <button onClick={searchName}>Fired name</button>
                <ul>
                    {
                        filterSubscriberNames.map(subscriber => <li key={subscriber.id}>{subscriber.name}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}
export default Home;