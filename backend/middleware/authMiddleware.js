import jwt, { decode } from "jsonwebtoken"
import Korisnik from "../models/korisnik.js"
import asyncHandler from "express-async-handler"
const protect = asyncHandler(async(req,res,next) =>{

let token

if(req.headers.authorization &&
     req.headers.authorization.startsWith('Bearer'))
{


    try {

        token=req.headers.authorization.split(' ')[1]
        const decoded=jwt.verify(token,process.env.JWT_SECRET)

        req.user=await Korisnik.findById(decoded.id).select('-password')
        next()
    } catch (error) {
        console.error(error)
      
        res.json({success:false}).status(401)
        throw new Error('Not authorized,token failed')
    }
}

if(!token)
{
    res.status(401)//unauthorized

    throw new Error('Not authorized,no token!')

}


})


const admin =(req,res,next)=>{

    if(req.user && req.user.isAdmin)
    {
        next()
    }
    else
    {
        res.status(401)
        throw new Error("Korisnik nije admin!")
    }
}
const kordinator =(req,res,next)=>{

    if(req.user && req.user.isKordinator)
    {
        next()
    }
    else
    {
        res.status(401)
        throw new Error("Korisnik nije koordiantor!")
    }
}


const sendError=(res,error)=>{

    res.status(401).json({success:false,error})
}


export {protect,admin,kordinator,sendError}