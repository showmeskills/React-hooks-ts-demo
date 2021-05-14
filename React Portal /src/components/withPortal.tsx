import React,{Component} from "react";
import {createPortal} from "react-dom";



const withPortal = (WrappedComponent: any)=>{
    return class extends Component{
       decrement123(){
           return(e:any)=>{
               console.log(this.props)
               e.stop();
           }
       }
        render(){
    
            return createPortal(
                <WrappedComponent {...this.props} />,
                document.querySelector("body")!
            )
        }
    }
}

export default withPortal;