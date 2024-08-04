import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://rajeshlnv16:Rajesh767401@zwiggy.r2de0a2.mongodb.net/mydb").then(()=>console.log("db connected"));
}