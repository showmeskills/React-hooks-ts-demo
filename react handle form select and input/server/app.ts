import express,{Application,Request,Response,NextFunction} from 'express';
import bodyParser  from 'body-parser';

const app:Application = express();
const port = process.env.PORT || 3001;

app.all('*', function (req, res:Response, next:NextFunction) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
  });
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

interface Data{
    title: string
}



app.get('/api/form',(req:Request,res:Response)=>{
    const data:Data = {
        title:"hello react",
    }
    res.json(data)
})

app.post('/api/text',(req:Request,res:Response)=>{
    const data:string = "data has been received";
    if(req.body){
        res.json(data)
    }
})

app.post('/api/city',(req:Request,res:Response)=>{
    if(req.body){
        res.json(req.body);
    }
})


app.listen(port,()=>console.log("serve is listening"));