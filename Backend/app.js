const express=require('express')
const mongoose=require('mongoose')
const router=require('./routes/routes')
const cors=require('cors')

const app=express()

mongoose.connect(
    "mongodb://localhost:27017/mockmachinetest"
)
const database=mongoose.connection;

database.on("error",(error)=>{
    console.log(error)

})
database.once("connected",()=>{
    console.log("database connected");
})
app.use(
    cors({
        orgin:"http://localhost:3001"
    })
)
app.use(express.json())

app.use("/",router)


const port=3000;


app.listen(port,()=>{
    console.log("Server running on port 3000")
})