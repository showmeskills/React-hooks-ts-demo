
import {useState} from "react";

interface InitialData{
    name: string;
    email: string;
}

const initialData:InitialData = {
    name:"",
    email: "",
}

const User = ()=>{
    const [user,setUser] = useState<InitialData>(initialData);


    return(
        <div>
            <div>
                Username:<input type="text" 
                 value={user.name}
                 onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setUser({...user,name:e.target.value})}
                />
            </div>
            <div>
                Email:<input type="text" 
                 value={user.email}
                 onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setUser({...user,email:e.target.value})}
                />
            </div>
            <ul>
                <li>
                    welcome:{user.name}
                    your email address is:{user.email}
                </li>
            </ul>
        </div>
    )
}

export default User;