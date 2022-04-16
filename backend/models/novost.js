import mongoose from "mongoose"



const novostSchema=mongoose.Schema({

naslov:{


    type:String,
    required:true,
},

kratkitext:{

    type:String,
    required:true,
},

slika:{

    type:String
},

text:{
    type:String
}


},{

    timpestamps:true
})

const Novost=mongoose.model('Novost',novostSchema)


export default Novost
