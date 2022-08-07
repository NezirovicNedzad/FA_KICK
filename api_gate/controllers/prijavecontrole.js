import asyncHandler from "express-async-handler"
import Prijave from "../models/prijave.js"




const createPrijave= asyncHandler(async(req,res)=>{

    const {kampId,koordinatorId,korisnikId,ocene,slika,text,tip,datum_pocetka,datum_zavrsetka}=req.body
    
    const prijavapostoji=await Prijave.findOne({kampId,koordinatorId,korisnikId})

    if(prijavapostoji)
    {

             res.status(400)
            throw new Error("Korisnik je vec prijavljen na kamp!")

    }

    const prijava=await Prijave.create({
       kampId,
       koordinatorId,
       korisnikId,
       ocene,
       slika,
       text,
       tip,
       datum_pocetka,
       datum_zavrsetka
  


    })


    res.json(prijava)
    
    })




    const getPrijave= asyncHandler(async(req,res)=>{



        const prijave=await Prijave.find({})
    
        res.json(prijave)
    })
    const getPrijavePoKampu= asyncHandler(async(req,res)=>{

      const pageSize=5
      const page=Number(req.query.pageNumber) || 1

    
        const kampovId=req.params.id
        const prijave=await Prijave.find({kampId:kampovId}).limit(pageSize).skip(pageSize*(page-1))
        const count=await Prijave.countDocuments({kampId:kampovId})
    
        res.json({prijave,page,pages:Math.ceil(count/pageSize),count})
    })
    const getPrijavezaKamp= asyncHandler(async(req,res)=>{

    
    
        const kampovId=req.params.id
        const prijave=await Prijave.find({kampId:kampovId})
        const count=await Prijave.countDocuments({kampId:kampovId})
    
        res.json({prijave,count})
    })



    const getPrijavePoKorisniku= asyncHandler(async(req,res)=>{
      const pageSize=5
      const page=Number(req.query.pageNumber) || 1

      const kampovId=req.params.kampovId
       const prijave=await Prijave.find({kampId:kampovId}).limit(pageSize).skip(pageSize*(page-1))

     const count=await Prijave.countDocuments({kampId:kampovId})
        res.json({prijave,count,page,pages:Math.ceil(count/pageSize)})
    })
    
    const getPrijaveById=asyncHandler(async(req,res)=>{



        const prijava=await Prijave.findById(req.params.id)
    
        if(prijava)
        {
            res.json(prijava)
        }
        else{
            res.status(404)

            throw new Error("Prijava nije pronadjena!")
        }
    })
    
    const DeletePrijave=asyncHandler(async(req,res)=>{
    

            const prijava=await Prijave.findById(req.params.id)
          
            if(prijava)
            {
          await prijava.remove()
          res.json({message:"Korisnik uklonjen!"})
            }
            else
            {
              res.status(404)
              throw new Error("Korisnik nije pronađen!")
            }
               
          res.json(prijava)
          
           
          
          })


    const createOcena=asyncHandler(async(req,res)=>{
    

           const {tehnika,taktika,fizika,text,trening}=req.body

const prijava= await Prijave.findById(req.params.id)

      if (prijava)
      {
          
        const ocena={

          tehnika,
          taktika,
          fizika,
          text,
          trening

       }

       prijava.ocene.push(ocena)

       await prijava.save()
       res.status(201).json({message:"Ocena je dodata"})
      }
      else
      {
        res.status(404)
        throw new Error("Nije pronadjena prijava")
      }
          
          })


        




    
    

    
    
    export {createPrijave,getPrijave,getPrijaveById,DeletePrijave,createOcena,getPrijavePoKampu,getPrijavePoKorisniku,getPrijavezaKamp}