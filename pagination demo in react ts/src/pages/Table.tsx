import { useRequest } from '../hook/useRequest';
import {useState} from "react";
const Table = () => {
    let {data, options, setOptions} = useRequest()
    const {list,pageCount} = data;
    const [size,setSize] = useState(10);

    const handleChange = (e:React.ChangeEvent<HTMLSelectElement>)=>{
        setSize(Number(e.target.value))
        setOptions({ currentPage: 1, pageSize: Number(e.target.value)})
    }

    return (
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>name</th>
                    </tr>
                </thead>
                <tbody>
                {
                list.map(item=>{
                    return(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                        </tr>
                    )
                })
            }
                </tbody>
            </table>
            <div>
                <nav >
                    <ul className="pagination">
                        {
                           new Array(pageCount).fill(0).map((item,index)=>{
                               return ( 
                               <li 
                               onClick={()=>{setOptions({...options,currentPage:index+1})}}
                               className="page-item" key={index}>
                                   <button className="page-link">{index+1}</button>
                               </li>
                               )
                           })
                        }
                    </ul>
                </nav>
                <select className="form-select"
                    value={size}
                    onChange ={handleChange}
                >
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
            </div>
        </div>


    )
}

export default Table;