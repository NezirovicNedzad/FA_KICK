import nodemailer from "nodemailer"

export const generateOTP =()=>{
    let otp=''
  for(let i=0; i<=3; i++)
  {

    const randVal=Math.round(Math.random()*9)
     otp=otp+randVal
  }
  return otp;
}




export const  plainEmailTemplate =(heading,message) =>{

 return `
 
 <!DOCTYPE html>
 <html lang="en">
 <head>
 <meta charset="UTF-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <style>
 @media only screen and (max-width:620px){
     h1{
         font-size:20px;
         padding:5px;
     }
 }
 </style>
 </head>
 <body>
 <div>
 <div style="max-width:620px;margin:0 auto;font-family:sans-serif;color:#272727"> 
  <div style="background-color:#39c900;">
  <p id="gornji" style="background:#0be74d;;font-weight:600;font-size:1rem;padding:10px;text-align:center;color:#272727;">
    ${heading}
     </p>
  </div>
  
  
  <p style="color:#272727;text-align:center;font-size:1rem;"> ${message}</p>
  
  </div>
 </div>
 </body>
 </html>
 `


}



export const  genereateEmailTemplate =(code) =>{

    return `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <style>
    @media only screen and (max-width:620px){
        .gornji{
            font-size:20px;
            padding:5px;
        }
    }
    </style>
    </head>
    <body>
    <div>
    <div style="max-width:620px;margin:0 auto;font-family:sans-serif;color:#272727"> 
     <p id="gornji" style="background:#f6f6f6;font-weight:600;font-size:1rem;padding:10px;text-align:center;color:#272727;">
    Postao si deo naše akademije FA KICK.Dobrodošao!
     </p>
     <p>Molimo vas da verifikujete vaš email da bi nastavili sa daljom saradnjom.Vaš verifikacioni kod je:</p>
     <p style="width:80px;margin:0 auto;font-weight:bold;text-align:center;background:#f6f6f6;border-radius:5px;font-size:25px;">
     ${code}
     </p>
     </div>
    </div>
    </body>
    </html>
    `
   
   
   }

export const  genereatePasswordResetTemplate =(url) =>{

    return `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <style>
    @media only screen and (max-width:620px){
        .h1{
            font-size:20px;
            padding:5px;
        }
    }
    </style>
    </head>
    <body>
    <div>
    <div style="max-width:620px;margin:0 auto;font-family:sans-serif;color:#272727"> 
     <h1 style="background:#f6f6f6;font-weight:600;font-size:1rem;padding:10px;text-align:center;color:#272727;">
     Zaboravili ste password?
     </h1>
     <p style="color:#272727;">Link ispod vas vodi do promene passworda:</p>
     <div style="width:100%;text-align:center;"><a href="${url}" style="font-family:sans-serif;margin:0 auto;text-align:center;padding:10px;background:#e63946;border-radius:4px;font-size:20px 10px;color:#fff;cursor:pointer;text-decoration:none;display:inline-block;">
     Resetuj password
     </a>
     </div>
    </div>
    </body>
    </html>
    `
   
   
   }