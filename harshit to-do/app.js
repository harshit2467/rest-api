const express =require("express")
const mongoose=require('mongoose')

const app=express()
//connection to mongodb
mongoose.connect("mongodb://localhost/todo_express",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});
 
//
app.use(express>urlencoded({extended:true}))
app.use(express.static("public"))
app.set("viewengine","ejs");
app.listen(3000, ()=>console.log("server started listening on port:3000"))