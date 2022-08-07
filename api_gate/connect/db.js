import mongoose from "mongoose"


const connectDB=async () =>{

    try {

        const conn=await mongoose.connect('mongodb://127.0.0.1:27017/FA_KICK',{
                  })
        console.log(`Mongo db connected on:${conn.connection.host}`.cyan.underline)
    } catch (error) {
         console.error(`Error:${error.message}`.red.underline.bold)
         process.exit(1)
    }
}


export default connectDB