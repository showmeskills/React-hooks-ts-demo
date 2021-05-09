import {useState} from "react";
import axios from 'axios';
const Form = ()=>{
    const [name,setName] = useState<string>("");
    const [value,setValue] = useState<string>("")
    const [select,setSelect] = useState<string>("北京")
    const [city,setCity] = useState<string>("北京")
    const handleSubmit = (event:React.FormEvent)=>{
        handleFeedBack();
        event.preventDefault();
    }

    
    const handleFeedBack = ()=>{
        //get request input
        axios.get('http://localhost:3001/api/form')
        .then(res=>{
            setName(()=>res.data.title)
        })
        //post request textarea
        axios.post("http://localhost:3001/api/text")
        .then(res=>{
            setValue(()=>res.data)
        })
        //post select post
        let params = new URLSearchParams();
        params.append("select",select);
        axios.post("http://localhost:3001/api/city",params)
        .then(res=>{
            setCity(()=>res.data.select)
        })
    } 
    //input 受控组件
    const hanldeChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setName(()=>event.target.value);
    }  
    //textarea 受控组件
    const handleTextChange = (event:React.ChangeEvent<HTMLTextAreaElement>)=>{
        setValue(()=>event.target.value);
    }
    //select and options 受控组件
    const handleSelect =(event:React.ChangeEvent<HTMLSelectElement>)=>{
        setSelect(()=>event.target.value)
    }
    return(
        <div>
             <h1>form demo</h1>
              <form onSubmit={handleSubmit} >
                <label htmlFor="name">
                    name:
                    <input type="text" 
                        value={name}
                        onChange={hanldeChange}
                        id="name"
                    />
                </label>
                <br />
                <textarea name="" id="" cols={30} rows={10}
                    value={value}
                    onChange={handleTextChange}
                >
                </textarea>
                <br/>
                city:{city}
                <select 
                    value={select}
                    onChange={handleSelect}
                >
                    <option value="北京">北京</option>
                    <option value="上海">上海</option>
                    <option value="深圳">深圳</option>
                </select>
                <input type="submit" value="submit"/>
                {/* <button onClick={handleFeedBack}>click</button> */}
              </form>
        </div>
    )
}

export default Form;
