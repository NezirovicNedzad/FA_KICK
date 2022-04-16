import React,{useEffect} from 'react'
import './menu.css'
import {Link} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import { listNovosti } from '../actions/novostactions';
import Loader from './Loader';
import Message from './Message';
import Novost from './Novost';
const MainObjekti = () => {
    

    const dispatch=useDispatch()
    const novostiList=useSelector(state=>state.novostList)

    const{loading,error,novosti}=novostiList

    useEffect( () =>{
        dispatch(listNovosti())
      
    } ,[dispatch])
  return (
    <>
    
  <div className="jumbotron novi"  style={{padding:"1rem"}}>
  
  <div className="centriraj">  <img className="img-fluid slika" width="210rem" alt="nEKATO" src="/images/logofa.png"/> </div>
  <div className="centriraj">
    <img src="/images/photo.png" width="177rem" className="img-fluid slika2"  alt="nEKATO"/>
   </div>



    

</div>

<div className=" myrow">

 <div className="sadrzaj ">


  
 
 <p>     Naš cilj je da osposobimo naše studente za život nakon Akademije, tako da gde god da stignu, bilo da je to život na Univerzitetu ili u fudbalskom klubu, moći će se lako prilagoditi. Svi zaposleni na Akademiji imaju isti cilj, a to je da našim studentima pruže sjajno iskustvo, bilo da je to na fudbalskom terenu, fakultetskom životu ili jednostavno da postanu mladi ljudi koji uživaju uju životu i sklap doživotne prijateljstva iz cele Srbije.</p>
    
  <p>
      
      Fudbalska Akademija Jedinstvo je jedna od prvih privatnih fubalskih akademija u okruzenju,koja omogućava razne kurseve kako za mlade fudbalere iznad 14 god tako i za sve oni koji zele postati mladi treneri.
      Kampovi koje mi nudimo se razlikuju na osnovnu vremena kojeg bi ste kao naš član proveli na akademiji,delimo ih na one dvonedeljne koji se fokusiraju na neku fudbalsku disciplinu(taktika,tehnika),full time kurs koji traje tri godine,letnji kamp,kao i jednodnevne probe.Što se tiče opcija za trenere 
      imaće nekoliko kurseva sa različitim stepenom licence.Kvalitet akademije pokazuju naši biši studenti koji već polako zauzimaju mesto u fudbalskom svetu širom Srbije.   
      
    </p>

    <p>
      Naš internat nudi dvokrevetne sobe za smeštaj koje služe za smeštanje korisnika koji su na full time kampu kao i korisnika koji su na dvonedeljnom kampu.
      Sobe sadrže nov nameštaj uz pomoć naših sponzora i opremljene su da potpomognu rad naših članova.Sadrže dva kreveta,orman radni sto i kupatilo i sve
      je urađeno po zadovoljavajućim standardima.Grejanje se pušta od 1 oktobra sa početkom grejne sezone na gas.</p>
 
      <img className="img-fluid" style={{width:'85%'}} src="/images/kreveti.webp"  alt="slika"/>
  <h3 style={{margin:"0.8rem 0"}}>Sta mi nudimo?</h3> 
  <p style={{margin:"0.8rem 0px"}}> 

Verujemo da mladim sportistima treba omogućiti najbolju moguću ishranu stoga se u našim menzama nalaze profesionalni kuvari koji će obezbediti našim studentima dobre obroke.Hrana će se posluživati u menzi,gde će svi članovi imati 
tri obroka dnevno koja će uvek pratiti njihove treninge.Uz redovne obroke studenti će dobijati i određene suplemente u ishrani koji će pratiti njihovo fizičko stanje.
  
 </p>

    



    

 

 <p style={{margin:"1rem 0"}}> 
  Osim kurseva fudbala i edukacije, Akademija nudi niz drugih aktivnosti za studente, kao što su seminari, radionice, posete 
  fudbalskim utakmicama, gostujući govornici uključujući neka od velikih imena fudbala, večernja zabava, vežbe team-buildinga i mnoge druge aktivnosti koje ne samo da će doprineti vašem fudbalskom razvoju, već će vaše vreme ovde u akademiji učiniti zabavnim, ugodnijim i prijatnijim.

 </p>
 <p style={{margin:"1rem 0"}}> 

Osim kurseva fudbala i edukacije, Akademija nudi niz drugih aktivnosti za studente, kao što su seminari, radionice, posete 
fudbalskim utakmicama, gostujući govornici uključujući neka od velikih imena fudbala, večernja zabava, vežbe team-buildinga i mnoge druge aktivnosti koje ne samo da će doprineti vašem fudbalskom razvoju, već će vaše vreme ovde u akademiji učiniti zabavnim, ugodnijim i prijatnijim.

<p>
Akademija nudi veoma visok nivo fudbalskog znanja kroz naše trenere koji su sa nama dugi niz godina.Broj kampova će varirati u toku godine ali osnovu će činiti
prethodno navedene kategorije.
</p>
 
</p>

<img className="img-fluid" style={{width:'85%'}} src="/images/igranje.jpg"  alt="slika"/>
   <p style={{margin:"1rem 0"}}> 
    
  Studenti treba da budu sigurni da ćemo uraditi sve što je u našoj moći da se osećaju kao kod kuće!
   </p>
  

  </div>
 <div className="sidebar">
  <h3>O Akademiji </h3>
  
 

 <p>Saznaj vise o akademiji :</p>

 <ul >

  <li>
    <i className="fas fa-caret-right"></i>
    <Link to="/">Nase poreklo</Link>
  </li>
  <li>
    <i className="fas fa-caret-right"></i>
    <Link to="/">Kontakt</Link>
  </li>
  <li>
    <i className="fas fa-caret-right"></i>
    <Link to='/'>Naši sponzori</Link>
  </li>
  <li>
    <i className="fas fa-caret-right"></i>
    <Link to='/'>Poseti naše trenazne objekte</Link>
  </li>
  <li>
    <i className="fas fa-caret-right"></i>
    <Link to='/'>Kovid protokoli</Link>
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


export default MainObjekti