import mongoose from "mongoose"
import bcrypt from "bcrypt"


const  verificationTokenSchema=mongoose.Schema ({


   owner:{
     type:mongoose.Schema.Types.ObjectId,
     ref:'Korisnik',
     required:true
   },
   token:{
       type:String,
       required:true,
   },
   createdAt:{
       type:Date,
       expires:3600,
       default:Date.now()
   }



})

verificationTokenSchema.methods.compareToken=async function(token){

    return await bcrypt.compare(token,this.token)
}

verificationTokenSchema.pre('save',async function(next){

if(!this.isModified('token'))
{

    next()
}

    const salt= await bcrypt.genSalt(10)
    this.token=await bcrypt.hash(this.token,salt)
})



const verificationToken=mongoose.model('verificationToken',verificationTokenSchema)

export default verificationToken