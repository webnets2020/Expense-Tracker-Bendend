import mongoose from "mongoose";

const connectDB=async()=>{ 
    
   await mongoose.connect(
    "mongodb+srv://chencho:1234@expenses-mern.gjvdyft.mongodb.net/?retryWrites=true&w=majority"
  )
  console.log("MongoDB connection successfull...!")

  
}

export default connectDB