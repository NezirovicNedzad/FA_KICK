import mongoose from "mongoose";



const oceneSchema=mongoose.Schema({
  
    tehnika:{

        type:Number,
      
       },
    
       taktika:{
    
        type:Number,
       
       },
    
       fizika:{
    
        type:Number,
    
       },
       text:{
    
        type:String,
    
       },
       trening:{
           type:Date
       }
  
},{
   timestamps:true
})


const prijaveSchema=mongoose.Schema (
{

kampId:{

    type:mongoose.Schema.Types.ObjectId,
    ref:'Kamp',
  


},
koordinatorId:{

    type:mongoose.Schema.Types.ObjectId,
    ref:'Kamp',
   



},
korisnikId:{

    type:mongoose.Schema.Types.ObjectId,
    ref:'Korisnik',
   
},

ocene :[oceneSchema],

    text:{
    

       type:String,

       },

    slika:{
           type:String
      },
        datum_pocetka:{

            type:String,
        },
        datum_zavrsetka:{

            type:String,
        },
        tip:{

            type:String
        }












},{

    timestamps:true
}
)


const Prijave=mongoose.model('Prijave',prijaveSchema)


export default Prijave


