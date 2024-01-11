import mongoose, { connect } from "mongoose";

const mongoURI= "mongodb://127.0.0.1:27017/Portfolio"

const connectDB=()=>{
    try{
        mongoose.connect(mongoURI)
        console.log("connected to database Successfully")
    }catch(err){
        console.log(err);
    }
}

export default connectDB;