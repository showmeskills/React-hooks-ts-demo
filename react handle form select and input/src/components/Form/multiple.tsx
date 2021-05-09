import {useState} from 'react';

const state:string[]=[]

const Multiple = ()=>{
    const [select,setSelect] = useState(state)
      //select and options 受控组件
      const handleSelect =(event:React.ChangeEvent<HTMLSelectElement>)=>{
          // "downlevelIteration":true,tsconfig.json中添加
          const newSelect = [event.target.value]
        setSelect(()=>newSelect)
    }
    return(
        <>
 
            city:
            {
                select.map(item=>item)
            }
      
             <select 
                    value={select}
                    onChange={handleSelect}
                    //多选
                    multiple={true}
                >
                    <option value="北京">北京</option>
                    <option value="上海">上海</option>
                    <option value="深圳">深圳</option>
                </select>
        </>
    )
}

export default Multiple;