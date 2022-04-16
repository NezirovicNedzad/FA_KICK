import mongoose from "mongoose"
import bcrypt from "bcrypt"


const  resetTokenSchema=mongoose.Schema ({


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



});

resetTokenSchema.pre('save',async function(next){

if(!this.isModified('token'))
{

    next()
}

    const salt= await bcrypt.genSalt(10)
    this.token=await bcrypt.hash(this.token,salt)
})


resetTokenSchema.methods.compareToken=async function(token){

    const result= await bcrypt.compare(token,this.token)
     return result
}


const resetToken=mongoose.model('resetToken',resetTokenSchema)

export default resetToken