import mongoose from "mongoose"
import asyncHandler from "express-async-handler"
import Kamp from "../models/kamp.js"



const getKampovi= asyncHandler(async(req,res)=>{

    const keyword=req.query.keyword ?{
 

        tip:{

            
            $regex:req.query.keyword,
            $options:'i'
        }
    }: 
    {}
    
    const kampovi=await Kamp.find({...keyword})

    res.json(kampovi)

})



const getKampById= asyncHandler(async(req,res)=>{



    const kamp=await Kamp.findById(req.params.id)

    if(kamp)
    {

        res.json(kamp)
    }
    else{

        res.status(404)
        throw new Error ('Nije pronadjen kamp')
    }
}
)

// @desc Delete kamp
//@route Delete /api/kampovi/:id
//@acces Private admin 
const deleteCamps= asyncHandler(async(req,res)=>{



    const kamp=await Kamp.findById(req.params.id)

    if(kamp)
    {

        await kamp.remove()
        res.json({message:"Kamp je uklonjen!"})
    }
    else{

        res.status(404)
        throw new Error ('Nije pronadjen kamp')
    }
}
)

// @descc create kamp
//@route post /api/kampovi
//@acces Private admin 

const createCamp= asyncHandler(async(req,res)=>{



    const camp=new Kamp({

           tip:"Dvonedeljni Kamp",
           cena:0,
           koordinatorId:'61f7538689519c5907e2e728',
           datum_pocetka:'Dodaj datum',
           datum_zavrsetka:'Dodaj datum',
           slika:'/images/kamp3.jpg',
           opis:'Kratki opis',
           text:'Duzi opis'




    })


    const createdCamp=await camp.save()
    res.status(201).json(createdCamp)
})

const updateCamp= asyncHandler(async(req,res)=>{

const {tip,cena,koordinatorId,slika,datum_pocetka,datum_zavrsetka,opis,text}=req.body


const camp=await Kamp.findById(req.params.id)
if(camp)
{
    camp.tip=tip,
    camp.cena=cena,
    camp.koordinatorId=koordinatorId,
    camp.slika=slika,
    camp.datum_zavrsetka=datum_zavrsetka,
    camp.datum_pocetka=datum_pocetka,
    camp.opis=opis,
    camp.text=text

    


    const updatedCamp=await camp.save()
    res.json(updatedCamp)

}
else{


    res.status(404)
    throw new Error("Nije pronadjen kamp")
}

})

export {getKampovi,getKampById,deleteCamps,createCamp,updateCamp}