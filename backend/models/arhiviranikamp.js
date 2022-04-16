import mongoose from "mongoose"


const reviewSchema=mongoose.Schema({
     ime:{

      type:String
     },
    rating:
    {
     type:Number,
     required:true
    }, 
    comment:
    {
    type:String,
    required:true
    } ,
    user:{

        type:mongoose.Schema.Types.ObjectId,
      //  required:true,
        ref:'Korisnik'           
       }
   
},{
    timestamps:true
})


const arhiviranikampSchema = mongoose.Schema({




    tip:{

        type:String,
        //required:true,
        ref:'Kamp'
    },

  
    koordinatorId:{

        type:mongoose.Schema.Types.ObjectId,
        // required:true,
        ref:'Kamp'
                   
       },  
       reviews:[reviewSchema], 
  
      slika:{

        type:String,
       
      },
      rating:{

        type:Number,
        required:true,
        default:0,          
       },
       numReviews:{
    
        type:Number,
        required:true,
        default:0,           
       },

      opis:{

        type:String,
       
    },
    text:{

      type:String,
      ref:'Kamp',
    },
    datum_pocetka:{
      type:String,
      ref:'Kamp'
    },
    datum_zavrsetka:{
      type:String,
      ref:'Kamp'
    },

   
 },{
    timestamps:true
})



 const Arhivirani=mongoose.model('ArhiviraniKamp',arhiviranikampSchema)

 export default Arhivirani