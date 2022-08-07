
import express from "express";

import {getkorisnickiProfil,authkorisnik,registerKorisnik,updatekorisnik, getKordinatori, getKorisnici, deleteKorisnici, getKorisnicizaPrijave, verifyEmail, forgotPassword, resetPassword} from "../controllers/korisnickecontrole.js";

import { admin, protect } from "../middleware/authMiddleware.js";
import { isResetPassword } from "../middleware/userMiddleaware.js";
const router=express.Router()

router.route('/profil').get(protect,getkorisnickiProfil).put(protect,updatekorisnik)

router.route('/').post(registerKorisnik).get(protect,admin,getKorisnici)
router.route('/prijave').get(protect,getKorisnicizaPrijave)
router.route('/kordinatori').get(getKordinatori)

router.post('/login',authkorisnik)

router.route('/:id').delete(protect,admin,deleteKorisnici)


router.post("/verify-email",verifyEmail)
router.post("/forgot-password",forgotPassword)
router.post("/reset-password",isResetPassword,resetPassword)
router.get("/verify-token",isResetPassword,(req,res)=>{

    res.json({success:true});

})


export default router