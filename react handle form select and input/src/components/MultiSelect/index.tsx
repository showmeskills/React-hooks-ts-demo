import Select from './Select';
import {useState} from "react";
interface OptionType{
    id:number;
    value:string;
    label:string;
}

  const options: OptionType[] = [
    {id:0, value: "chocolate", label: "Chocolate" },
    {id:1, value: "strawberry", label: "Strawberry" },
    {id:2, value: "vanilla", label: "Vanilla" }
  ];


const MultiSelect = ()=>{
    const [select,setSelect] = useState<OptionType>(options[0]);
    const handleChange = (event:React.ChangeEvent<HTMLSelectElement>)=>{
         const newSelect= {
             id:Date.now(),
             value:event.target.value,
             label:event.target.value,
         }
         setSelect(()=>newSelect)
    }


    return(
        <Select
            options={options}
            value ={select}
            onChange={handleChange}
            multiple ={true}
        />
    )
}

export default MultiSelect;