import Novost from "../models/novost.js";
import mongoose from "mongoose"
import asyncHandler from "express-async-handler";


const  getNovosti=asyncHandler(async(req,res)=>{


const novosti=await Novost.find({})

res.json(novosti)

})

const  getNovostiById=asyncHandler(async(req,res)=>{


const novost=await Novost.findById(req.params.id)

if(novost)
{




    res.json(novost)
}
else{

    res.status(404)
    throw new Error ('Nije pronadjena novost')
}

})



// @desc Delete kamp
//@route Delete /api/kampovi/:id
//@acces Private admin 
const deleteNovost= asyncHandler(async(req,res)=>{



    const novost=await Novost.findById(req.params.id)

    if(novost)
    {

        await novost.remove()
        res.json({message:"Kamp je uklonjen!"})
    }
    else{

        res.status(404)
        throw new Error ('Nije pronadjen kamp')
    }
}
)

const createNovosti= asyncHandler(async(req,res)=>{

    const {naslov,kratkitext,slika,text}=req.body
    
    const naslovpostoji=await Novost.findOne({naslov,kratkitext,slika,text})

    if(naslovpostoji)
    {

             res.status(400)
            throw new Error("Vec poctoji takkva novost!")

    }

    const novost=await Novost.create({
     
      naslov,
      kratkitext,
      slika,
      text

    })


    res.json(novost)
    
    })


export{getNovosti,getNovostiById,deleteNovost,createNovosti}