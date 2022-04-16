
import mongoose from "mongoose"
import dotenv from "dotenv"
import Korisnik from "./models/korisnik.js";
import Kamp from "./models/kamp.js";
import colors from "colors"
import users from "./data/users.js";
import camps from "./data/camps.js";
import connectDB from "./connect/db.js";
import Novost from "./models/novost.js";
import novosti from "./data/novosti.js"



dotenv.config()

connectDB()

const importData = async()=>{


    try {
        
   
        await Korisnik.deleteMany()
        await Kamp.deleteMany()

       
        const createdUsers= await Korisnik.insertMany(users);

        const kordinator1 = createdUsers[0]._id
        const kordinator2=createdUsers[1]._id;

        const kampovi = camps.map((camp) => {
          return { ...camp,
        
        
            koordinatorId:kordinator1 } 
        })


        await Kamp.insertMany(kampovi)



        console.log('Data imported!'.green.inverse)
        process.exit()  
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}


const deleteData = async() =>{

    try {
        
        await Korisnik.deleteMany()
        await Kamp.deleteMany ()

        console.log("Podaci su unisteni!".red.bold)
        process.exit()
    } catch (error) {
                 console.error(`${error}`.red.inverse)
                  process.exit(1)
    }
   


}


if(process.argv[2]==='-d'){

    deleteData()
}
else{

    importData()
}
