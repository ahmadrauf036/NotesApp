import mongoose from "mongoose"

const connectDb = async()=>{
    try{
        await mongoose.connect(process.env.DB)
        console.log("db connected!")
    }
    catch(e){
        console.log("db not connected!")
        process.exit(1)
    }
}
export default connectDb