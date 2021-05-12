import {Component} from 'react';
import {CountConsumer} from './Count';
import {ProviderShow,ShowConsumer} from './showContext'

class ChildB extends Component{
    render(){
        return(
            <ProviderShow>
                <h1>Child b component</h1>
                <CountConsumer>
                    {
                        ({state,decrement,increment})=>{
                            return(
                                <div>
                                    <ShowConsumer>
                                        {
                                            ({show,isShow})=>{
                                                return(
                                                    <div>
                                                       {
                                                           show&& <div>state in child B:{state}</div> 
                                                       }
                                                       <button onClick={isShow}>show</button>
                                                    </div>
                                                )
                                            }
                                        }
                                    </ShowConsumer>  
                                    <button onClick={decrement}>decrement</button>
                                    <button onClick={increment}>increment</button>
                                </div>
                            )
                        }
                    }
                </CountConsumer>
            </ProviderShow>
        )
    }
}

export default ChildB