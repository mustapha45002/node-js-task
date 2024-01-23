let mongoose=require("mongoose")
let cors=require("cors")
let express=require("express")



let {createblog}=require("./controller/appcontroller");
let{homerouter}=require("./homerouter/homerouter")
const { urlencoded } = require("body-parser");
const { log } = require("console");


mongoose.connect('mongodb://127.0.0.1:27017/myblog').then(()=>{console.log("connected to db");})

let app=express()
app.use(express.json())
app.use(cors({origin:true,credentials:true}))
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))

// routing  

app.use("/home",homerouter)






app.listen(5000,()=>{console.log("app now listening");})









// createblog("b","bb","lordddsdfsfsedddddddd","action")
// createblog("c","cc","lorddddddddddfsd","drama")
// createblog("d","dd","lordddddddddd","romantic")
// createblog("e","ee","lordddddddddd","drama")



