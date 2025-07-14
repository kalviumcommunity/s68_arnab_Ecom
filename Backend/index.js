const express=require("express")
const cors=require('cors')
const db = require("./Src/Database/db")
const AuthRoute = require("./Src/Router/userRouter")
const productroute = require("./Src/Router/productRoute")

const app=express()
const PORT=process.env.PORT||8080

app.use(express.json())
app.use(cors())
require('dotenv').config()

app.get('/',(res,req)=>{
     res.send("Hello Customer")
})

app.use('/auth',AuthRoute)
app.use('/product',productroute)


app.listen(PORT,async()=>{
    try{
        await db()
         console.log(`port is connected at ${PORT}`)
    }
    catch(err){
        console.error("Error connecting to the database", err);
    }   
   
})