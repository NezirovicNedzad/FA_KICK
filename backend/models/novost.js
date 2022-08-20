import mongoose from "mongoose"



const novostSchema=mongoose.Schema({

naslov:{


    type:String,
    required:true,
},

uvod:{


    type:String,
    
},

kratkitext:{

    type:String,
    required:true,
},
citat:{
    type:String,
    
},
text:{
    type:String
},

slika:{

    type:String
},




},{

    timpestamps:true
})

const Novost=mongoose.model('Novost',novostSchema)


export default Novost
