const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/list',(req,res)=>{
    let currentPage = parseInt(req.query.currentPage);
    let pageSize = parseInt(req.query.pageSize);
    //数据椰树和条数所对应的数据
    let list = [];
    //总的数据条数
    let total = 66;
    //总页书,向上取整
    let pageCount = Math.ceil(total/pageSize);

    //起始索引
    let offset = (currentPage - 1) * pageSize;
    if(currentPage >= pageCount){
        pageSize = total%pageSize
    }


    for(let i = offset; i < offset+pageSize;i++){
        list.push({id:i+1,name:`terrance-${(i+1)}`,})
    }
    res.json({
        currentPage,
        pageSize,
        pageCount,
        total,
        offset,
        list
    })

})

app.listen(8080,()=>{
    console.log('listening on 8080');
})