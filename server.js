const express =require("express");
const app = express();
const bodyParser = require("body-parser")
app.use(express.json())

app.get("/", (req , res)=>{
    
    res.json(tasks);
    })

    
app.post("/", (req , res)=>{
let task = req.body;

tasks.push(task);

res.json(tasks);
})

app.delete('/:iddd' , (req , res)=>{
let idd = parseInt(req.params.iddd)
tasks = tasks.filter(function(item) { 
    return item !== idd
})

res.json(tasks);
})


const tasks =[
    {
        id : 1,
        title : "rashed",
        isCompleted:true
    },
    {
        id : 2,
        title : "rashed",
        isCompleted:true
    },
    {
        id : 3,
        title : "rashed",
        isCompleted:true
    }
]
const PORT = 9000 ;
app.listen(PORT , ()=>console.log(`it is work ${PORT}`))