
import ChildA from './ChildA';
import ChildB from './ChildB';
import {User} from './index';
import {User2} from '../ContextProvider02';
const Father = ()=>{

    return(
        <User2>
            <User>
                <ChildA/>
                <ChildB/>
            </User>
        </User2>
    )
}

export default Father;