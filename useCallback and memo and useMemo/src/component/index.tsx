import { PropsWithChildren,memo } from 'react';

interface SubComponentProps{
  handleClick():void;
  count:number;
}

const SubComponent = (props:PropsWithChildren<SubComponentProps>)=>{
  console.log("child sub component run...");
  return (
    <div className="sub_component">
      count:{props.count}
      <button onClick={props.handleClick}>{props.children}</button>
    </div>
  )
}
export default memo(SubComponent);