

interface Person{
    id:number;
    name:string;
    job:string;
}

const person:Array<Person>= [
   {id:0,name:"Terrance",job:"web developer"},
   {id:1,name:"Terry",job:"react developer"},
   {id:2,name:"Erick",job:"vue developer"},
   {id:3,name:"Loong",job:"java developer"},
]

const Persons = ()=>{
    return (
        <div>
            <ul>
                {
                    person.map(item=><li key={item.id}>
                        <span>{item.name}</span>
                        <span>{item.job}</span>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default Persons;