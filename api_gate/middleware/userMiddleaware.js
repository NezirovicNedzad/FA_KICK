import resetToken from "../models/resetToken.js";
import Korisnik from "../models/korisnik.js"
import asyncHandler from "express-async-handler"
import isv from "mongoose"

import { sendError } from "./authMiddleware.js";
const isResetPassword=asyncHandler(async(req,res,next)=>{

    const{token,id}=req.query;
    if(!token || !id)
return sendError(res,"Nepotpun zahtev")
  
    const{isValidObjectId}=isv
  
    if(!isValidObjectId(id))
    return sendError(res,"Nije validan objekt")
  
  
    const user=await Korisnik.findById(id)
  
    if(!user)
    {
      return sendError(res,"Nije pronađen korisnik!")
    }

  const resetTok=await resetToken.findOne({owner:user._id})
  
  if(!resetTok)
  {
    return sendError(res,"Nije validan objekt")
    
  }

  const isVal=await resetTok.compareToken(token)

  if(!isVal)
  {return sendError(res,"Neispravan token!")}

   req.user=user
   next()
  
 
  
  })
  export {isResetPassword}