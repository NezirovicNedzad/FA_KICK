import mongoose from "mongoose"
import Prijave from "../models/prijave.js"

 const kampSchema = mongoose.Schema({




    tip:{

        type:String,
        //required:true,
    },

  

    cena:{

        type:Number,
        //required:true,
    },
    koordinatorId:{

        type:mongoose.Schema.Types.ObjectId,
        // required:true,
        ref:'Korisnik'
                   
       },   
    datum_pocetka:{

        type:String,
        required:true,

    },

    datum_zavrsetka:
      {

        type:String,
        required:true
      },

      slika:{

        type:String,
      },

      opis:{

        type:String,
       
    },
    text:{

      type:String,
    }
 },{
    timestamps:true
})



kampSchema.pre('remove',async function(next){
  const kamp=this
  await Prijave.deleteMany({kampId:kamp._id})


  next()
})

 const Kamp=mongoose.model('Kamp',kampSchema)




 export default Kamp