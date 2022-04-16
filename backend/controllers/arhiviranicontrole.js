import mongoose from "mongoose"
import asyncHandler from "express-async-handler"
import Arhivirani from "../models/arhiviranikamp.js"



const getArhivirani= asyncHandler(async(req,res)=>{



    const akampovi=await Arhivirani.find({})

    res.json(akampovi)
    res.status(200)
})



const getArhiviraniById= asyncHandler(async(req,res)=>{



    const akamp=await Arhivirani.findById(req.params.id)

    if(akamp)
    {

        res.json(akamp)
    }
    else{

        res.status(404)
        throw new Error ('Nije pronadjen kamp')
    }
}
)

const createArhivirani= asyncHandler(async(req,res)=>{

    const {tip,koordinatorId,reviews,slika,rating,numReviews,opis,text,datum_pocetka,datum_zavrsetka}=req.body
    
 
    const arhivirani=await Arhivirani.create({
        tip,koordinatorId,reviews,slika,rating,numReviews,opis,text,datum_pocetka,datum_zavrsetka}

    )


    res.json(arhivirani)
    
    })


    
// @desc Create review
//@route Delete /api/arhivirani/:id/review
//@acces Private 

const createNewReview= asyncHandler(async(req,res)=>{

    const {rating,comment}=req.body
    
    
    const acamp=await Arhivirani.findById(req.params.id)
    if(acamp)
    {
        
        const alreadyReviewed=acamp.reviews.find(r=>
           r.user.toString()===req.user._id.toString()
            )
       
            if(alreadyReviewed)
            {
                res.status(400)
                throw new Error ("Kamp ste vec ocenili!")
            }
    
     const review={
         ime:req.user.ime,
         rating:Number(rating),
         comment,
         user:req.user._id
     }

     acamp.reviews.push(review)
     acamp.numReviews=acamp.reviews.length

     acamp.rating=acamp.reviews.reduce((acc,item)=>
     item.rating+acc,0) / acamp.reviews.length

     await acamp.save()
     res.status(201).json({message:'Review je dodat'})
    
    }
    else{
    
    
        res.status(404)
        throw new Error("Nije pronadjen kamp")
    }
    
    })





export {getArhivirani,getArhiviraniById,createArhivirani,createNewReview}