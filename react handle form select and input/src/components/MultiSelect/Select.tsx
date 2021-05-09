import { PropsWithChildren,Fragment } from "react";

type OptionType = {
    id:number
    value: string;
    label:string;
}

interface SelectProps{
    options:OptionType[];
    onChange(event:React.ChangeEvent<HTMLSelectElement>):void;
    value:OptionType;
    multiple:boolean;
}


const Select = (props:PropsWithChildren<SelectProps>)=>{

    return(
        <Fragment>
        value={
            props.value.value
        }
         <select
             onChange={props.onChange}
             multiple={props.multiple}
         >
             {
                 props.options.map(item=>
                 <option key={item.id}
                     value={item.value}
                 >
                     {item.value}
                 </option>
                 )
             }
         </select>
     </Fragment>
    )
}

export default Select;

