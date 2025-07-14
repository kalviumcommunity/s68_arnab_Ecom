const {connect}=require('mongoose');
require('dotenv').config();
const db=async()=>{
    try{
        await connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("Database connected successfully");
    }catch(err){
        console.error("Database connection failed", err);
    }
}

module.exports=db;