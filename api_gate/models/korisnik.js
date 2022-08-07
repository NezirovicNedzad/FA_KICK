import mongoose from "mongoose"
import Prijave from "./prijave.js"
import bcrypt from "bcrypt"


const korisnickaSchema=mongoose.Schema ({


    ime:{

        type:String,
       required:true
    },

    email :{

        type:String,
        required:true
    },

    password:{

     type:String,
     required:true
    },

    slika:{

      type:String
    },
    pozicija:{


        type:String,
        
    },
    licenca:
    {
        type:String
    },
    brgod:{

        type:Number,
        required:true
    },
    isAdmin:{

        type:Boolean,
        required:true ,
        default:false,          
       },
    isKordinator:{

        type:Boolean,
       required:true ,
        default:false,          
    },
    verified:{

        type:Boolean,
        required:true,
        default:false,
    }






},{
    timestamps:true
})

korisnickaSchema.methods.matchPassword=async function(enteredPassword){

    return await bcrypt.compare(enteredPassword,this.password)
}

korisnickaSchema.pre('save',async function(next){

if(!this.isModified('password'))
{

    next()
}

    const salt= await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password,salt)
})

korisnickaSchema.pre('remove',async function(next){

const korisnik=this

await Prijave.deleteMany({korisnikId:korisnik._id})
next()

})

const Korisnik=mongoose.model('Korisnik',korisnickaSchema)

export default Korisnik