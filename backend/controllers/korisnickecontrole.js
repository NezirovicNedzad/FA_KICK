import mongoose from "mongoose"
import Korisnik from "../models/korisnik.js"
import generateToken from "../utils/generatetoken.js"
import verificationToken from "../models/verificationToken.js"
import isv from "mongoose"
import resetToken from "../models/resetToken.js"
import nodemailer from "nodemailer"
import asyncHandler from "express-async-handler"
import { generateOTP,genereatePasswordResetTemplate,genereateEmailTemplate, plainEmailTemplate } from "../utils/mail.js"
import { createRandomBytes } from "../utils/forgetpassword.js"


const authkorisnik=asyncHandler(async(req,res)=>{

    const {email,password}=req.body


   const user=await Korisnik.findOne({email})

//pronalazimo email i password
   if(user && (await user.matchPassword(password)))

   {
       res.json({


        _id:user._id,
        ime:user.ime,
        email:user.email,
        slika:user.slika,
        pozicija:user.pozicija,
        licenca:user.licenca,
        brgod:user.brgod,
        verified:user.verified,
        isAdmin:user.isAdmin,
        isKordinator:user.isKordinator,
        token:generateToken(user._id)
       })
   }

   else {
 //status 401 ne autorizovan pristup
    res.status(401)

    throw new Error("Pogrešna šifra ili lozinka!")
   }
}
)

//@desc Post registracija
//@route POST/api/korisnici
//access Public

const registerKorisnik=asyncHandler(async(req,res)=>{

    const {ime,email,password,slika,pozicija,brgod}=req.body


   const userExists=await Korisnik.findOne({email})

   if(ime==='' || email==='' || password===''|| slika==='' || pozicija==='' || brgod==='')
   {
    res.status(400)
    throw new Error("Sva polja moraju biti popunjena!")
   }

   if(
    /^([A-Z])([a-z]){2,15}\s([A-Z])([a-z]){2,30}((\-[A-Z])([a-z]){2,30})?$/.test(ime)===false
   )
   {

    res.status(400)
    throw new Error("Ime i prezime nisu validni!")
   }

   if(
    /^([A-Z])?([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/.test(email)===false
   )
   {
    res.status(400)
    throw new Error("Email nije validnog formata!")

   }
   if(userExists)
   {
       res.status(400)
       throw new Error("Korisnik sa ovakvim e-mailom vec postoji!")
   }
   if(
     brgod<8 || brgod>20
   )
   {
    res.status(400)
    throw new Error("Starost mora biti izmedju 8 i 20!")

   }
   if(
     password<=8 && password >=20
   )
   {
    res.status(400)
    throw new Error("Password mora duzine biti izmedju 8 i 20 karaktera!")

   }
//pronalazimo email i password




const user =await Korisnik.create({

    ime,
    email,
    password,
    slika,
    pozicija,
    brgod
})


const OTP=generateOTP()
const verToken=new verificationToken({

  owner:user._id,
  token:OTP
  
})

if(user)
{
  
 
    await verToken.save();
   

    process.env['NODE_TLS_REJECT_UNAUTHORIZED']=0;
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
    port: 465,
    secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.SIFRA
      }
    });


  var mailOptions = {
    from: process.env.EMAIL,
    to: user.email,
    subject: 'Verifikacija naloga',
    html:genereateEmailTemplate(OTP),
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  }); 
  res.json({
    _id:user._id,
    ime:user.ime,
    email:user.email,
    slika:user.slika,
    pozicija:user.pozicija,
    brgod:user.brgod,
    isAdmin:user.isAdmin,
    verified:user.verified,
    isKordinator:user.isKordinator,
    token:generateToken(user._id)
    })
    

}
else{

    res.status(400)
    throw new Error("Invalid user data")
}

}
)


const verifyEmail =asyncHandler(async(req,res)=>{

  const{isValidObjectId}=isv
 const {userId,otp}=req.body
 if(!userId || !otp.trim()) 
   throw new Error("Nepotpun zahtev za verifikaciju!")
   if(!isValidObjectId(userId))
   {
    throw new Error("Nepotpun zahtev za verifikaciju!")
   }

  const user= await Korisnik.findById(userId)
  if(!user)
  {
    throw new Error("Korisnik nije pronađen!")
   }
   if(user.verified)
   {
    throw new Error("Već verifikovan!")
   }

 const token=await verificationToken.findOne({owner:user._id})

 if(!token)
 {
  throw new Error("Korisnik nije pronađen!")
 }
const isMatched=await token.compareToken(otp)
if(!isMatched)
 {
  throw new Error("Unesite ispravan kod!")
 }

 user.verified=true;
 await verificationToken.findByIdAndDelete(token._id)

 await user.save()
 process.env['NODE_TLS_REJECT_UNAUTHORIZED']=0;
 var transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
port: 465,
secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.SIFRA
  }
});


var mailOptions = {
from: process.env.EMAIL,
to: user.email,
subject: 'Verifikacija Naloga',
html:plainEmailTemplate("Email je uspešno verifikovan","Želimo vam uspešnu saradnju u ime FA KICK tima!"),
};

transporter.sendMail(mailOptions, function(error, info){
if (error) {
  console.log(error);
} else {
  console.log('Email sent: ' + info.response);
}
}); 

res.json({success:true,message:"Vaš email je verifikovan!",user:{ime:user.ime,email:user.email,password:user.password}})
})



const forgotPassword=asyncHandler(async(req,res)=>{

  const{email}=req.body;

  if(!email)
  throw new Error("Molimo vas unesite email!")

 const user= await Korisnik.findOne({email});

 if(!user)
 throw new Error("Pogrešan zahtev!")


const token= await resetToken.findOne({owner:user._id})

if(token)
throw new Error("Već je poslat mail!")

const randomBytes=await createRandomBytes()

const resetTOKEN=new resetToken({owner:user._id,token:randomBytes})
await resetTOKEN.save()


process.env['NODE_TLS_REJECT_UNAUTHORIZED']=0;
var transporter = nodemailer.createTransport({
 service: 'gmail',
 host: 'smtp.gmail.com',
port: 465,
secure: false,
 auth: {
   user: process.env.EMAIL,
   pass: process.env.SIFRA
 }
});


var mailOptions = {
from: process.env.EMAIL,
to: user.email,
subject: 'Resetovanje Šifre',
html:genereatePasswordResetTemplate(`https://fa-kickapp.herokuapp.com/login/reset-password?token=${randomBytes}&id=${user._id}`),
};

transporter.sendMail(mailOptions, function(error, info){
if (error) {
 console.log(error);
} else {
 console.log('Email sent: ' + info.response);
}
}); 

res.json({

  success:true,
  message:"Passwor resset link is sent to your email!"
})
})

const resetPassword = asyncHandler(async(req,res)=>{
  
  
  
  const {password}=req.body
  

 const user= await Korisnik.findById(req.user._id)

 if(!user)
 {
   throw new Error("Korisnik nije pronadjen!")
 }
 
const isSamePassword= await user.matchPassword(password)


if(isSamePassword)
{
  throw new Error("Novi password mora biti drugaciji")
}

if(password.trim().length<8 || password.trim().length>20)
{
throw new Error("Password mora da sadrži od 8-20 karaktera!")
}

user.password=password
await user.save()

await resetToken.findOneAndDelete({owner:user._id})



process.env['NODE_TLS_REJECT_UNAUTHORIZED']=0;
var transporter = nodemailer.createTransport({
 service: 'gmail',
 host: 'smtp.gmail.com',
port: 465,
secure: false,
 auth: {
   user: process.env.EMAIL,
   pass: process.env.SIFRA
 }
});


var mailOptions = {
from: process.env.EMAIL,
to: user.email,
subject: 'Resetovanje Šifre Uspešno',
html:plainEmailTemplate("Uspešno ste resetovali vašu lozinku!","Sada se možete prijaviti sa novim passwordom!")
};

transporter.sendMail(mailOptions, function(error, info){
if (error) {
 console.log(error);
} else {
 console.log('Email sent: ' + info.response);
}
}); 

res.json({success:true,message:"Uspešno resetovan password"})

})

//@desc get korisnicki profil kad je ulogovona
//@route GET/api/korisniic
//access Public
const getkorisnickiProfil= asyncHandler(async(req,res) =>{

  const user=await Korisnik.findById(req.user._id)

  if(user)
  {
    res.json({


      
      _id:user._id,
      ime:user.ime,
      email:user.email,
      slika:user.slika,
      pozicija:user.pozicija,
      licenca:user.licenca,
      brgod:user.brgod,
    
      isAdmin:user.isAdmin,
      isKordinator:user.isKordinator,
     
 
       })


  }
  else{

    res.status(404)
    throw new Error("User not found")
  }


})


//@desc update korisnicki profil kad je ulogovona
//@route put/api/korisnici
//access Private
const updatekorisnik= asyncHandler(async(req,res) =>{

  const user=await Korisnik.findById(req.user._id)

  if(user)
  {
 
    user.ime=req.body.ime || user.ime
    user.email=req.body.email || user.email
    user.slika=req.body.slika || user.slika
    if(req.body.password){

        user.password=req.body.password
    }


    const updatedUser=await user.save()


    res.json({


     
      _id:user._id,
      ime:user.ime,
      email:user.email,
      slika:user.slika,
      pozicija:user.pozicija,
      licenca:user.licenca,
      brgod:user.brgod,
      verified:true,
      isAdmin:user.isAdmin,
      isKordinator:user.isKordinator,
      token:generateToken(user._id)
       })
  }
  else{

    res.status(404)
    throw new Error("User not found")
  }


})

const getKordinatori=asyncHandler(async(req,res)=>{

const koordinator=await Korisnik.find({isKordinator:true})


res.json(koordinator)

})






//@desc get korisnicki profil kad je ulogovona
//@route GET/api/korisnici
//access private admin
const getKorisnici= asyncHandler(async(req,res) =>{

  const pageSize=6
  const page=Number(req.query.pageNumber) || 1

  
  const count =await Korisnik.countDocuments()
  const users=await Korisnik.find({}).limit(pageSize).skip(pageSize*(page-1))
  

  
     
res.json({users,page,pages:Math.ceil(count/pageSize)})

 

})
//@desc get korisnicki profil kad je ulogovona
//@route GET/api/korisnici
//access private admin
const getKorisnicizaPrijave=asyncHandler(async(req,res) =>{

  const count =await Korisnik.countDocuments()
  const users=await Korisnik.find({})
  

  
     
res.json({users,count})

 

})




//@desc izbrisi korisnicki
//@route delelte/api/korisnici:id
//access private admin
const deleteKorisnici= asyncHandler(async(req,res) =>{

  const user=await Korisnik.findById(req.params.id)

  if(user)
  {
await user.remove()
res.json({message:"Korisnik uklonjen!"})
  }
  else
  {
    res.status(404)
    throw new Error("Korisnik nije pronađen!")
  }
     
res.json(user)

 

})



export  {getkorisnickiProfil,authkorisnik,registerKorisnik,updatekorisnik,getKordinatori,getKorisnici,deleteKorisnici,getKorisnicizaPrijave,verifyEmail,forgotPassword,resetPassword}