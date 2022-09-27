import React,{useEffect} from 'react'
import '../components/menu.css'
import {Link} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import { listNovosti } from '../actions/novostactions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Novost from '../components/Novost';
const Kontakt = () => {
    

    const dispatch=useDispatch()
    const novostiList=useSelector(state=>state.novostList)

    const{loading,error,novosti}=novostiList

    useEffect( () =>{
        dispatch(listNovosti())
      
    } ,[dispatch])
  return (
    <>
    
  <div className="jumbotron novi"  style={{padding:"5rem"}}>
  
  <div className="centriraj">  <img className="img-fluid slika" width="210rem" alt="nEKATO" src="/images/logofa.png"/> </div>
  <div className="centriraj">
    <img src="/images/PHOTO.png" width="177rem" className="img-fluid slika2"  alt="nEKATO"/>
   </div>



    

</div>

<div className=" myrow">

 <div className="sadrzaj ">

 <h2 style={{color:"#e70b0b"}}>Kontaktirajte akademiju</h2>

<p>Naša Akademija će uraditi sve što je u njenoj moći da izađe u susret svim vašim zahtevima.U sledećem delu biće prikazani svi načini na koji će te moći da nas kontaktirate.</p>


<div className="row-novi">
   <div className="about-icon">
   
   <h3>Naše središte</h3>
   <a href="https://www.google.com/maps?q=beograd+mapa&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjqiOu9ivr5AhWEX_EDHdFjCFYQ_AUoAnoECAIQBA&hl=sr">
   <i className="fas fa-map-marker-alt"></i>
   </a>
   <h4>Beograd,Srbija</h4>
   </div>
   <div className="about-icon">
   
   
   <h3>Telefon</h3>
   <a href="https://www.google.com/maps/place/%D0%9D%D0%BE%D0%B2%D0%B8+%D0%9F%D0%B0%D0%B7%D0%B0%D1%80/@43.1422279,20.4804034,13z/data=!3m1!4b1!4m5!3m4!1s0x4756283de66eab45:0x2ea7623f36196cd8!8m2!3d43.1406733!4d20.5181368?hl=sr">
   <i className="fas fa-phone"></i>
   </a>
   <h4>+389 691 233 122</h4>
   </div>
   <div className="about-icon">
   <h3>Email</h3>
   <a href="http://www.gmail.com/">
   <i className="fas fa-envelope"></i>
   </a>
   <h4>nwdTeam@gmail.com</h4>
   </div>
   
   
   
   
   </div>
<h3 style={{color:"#e70b0b",margin:" 1rem 0"}}>Dodatne informacije</h3>
<p>  Radno vreme prostorija fudbalske akademije</p> 
<p> Od ponedjeljka do petka od 10.00 do 16.00 (Srb)</p> 
<p>  Subota – zatvoreno </p> 
<p>  Nedjelja – Zatvoreno</p> 
<p>  Državni praznici – Zatvoreno osim ako nije drugačije navedeno</p> 
<p>  Dostupna 24-satna telefonska sekretarica.</p> 
   
<p>  Registrovana kancelarija</p> 
<p>   Fudbalska akademija Jedinstvo</p> 
<p>  Bulevar Vojvode Mišića 17 </p>
   <p>  Beograd,Srbija</p>
  
  </div>
 <div className="sidebar">
  <h3>O Akademiji </h3>
  
 

 <p>Saznaj vise o akademiji :</p>

 <ul >

  <li>
    <i className="fas fa-caret-right"></i>
    <Link to="/poreklo">Nase poreklo</Link>
  </li>
  <li>
    <i className="fas fa-caret-right"></i>
    <Link to="/kontakt">Kontakt</Link>
  </li>
  <li>
    <i className="fas fa-caret-right"></i>
    <Link to='/sponzori'>Naši sponzori</Link>
  </li>
  <li>
    <i className="fas fa-caret-right"></i>
    <Link to='/objekti'>Poseti naše trenazne objekte</Link>
  </li>
  <li>
    <i className="fas fa-caret-right"></i>
    <Link to='/kovid'>Kovid protokoli</Link>
  </li>

 </ul>

 <h3 style={{padding:"1.2rem 0",textAlign:"center"}}> Novosti</h3>
 <p
       style={{padding:"1.2rem 0"}}>
  Novosti se tiču nekih rezultata full time selekcije akademije kao i neke vesti vezane za samo odvijanje rada Akademije.</p>


 {loading? <Loader></Loader> : error ? <Message variant='danger'>{error}</Message> : <> {novosti.map(novost=> (
  <Novost key={novost._id} novost={novost}/>
))


}
</>
}
 
  




  </div>

</div>
    </>
  )
}


export default Kontakt