import React,{useEffect} from 'react';
import './menu.css'
import {Link} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import { listNovosti } from '../actions/novostactions';
import Loader from './Loader';
import Message from './Message';
import Novost from './Novost';

const MainHome = () => {



    const dispatch=useDispatch()
    const novostiList=useSelector(state=>state.novostList)

    const{loading,error,novosti}=novostiList

    useEffect( () =>{
        dispatch(listNovosti())
      
    } ,[dispatch])
  return <>
  
  
  <div className="jumbotron novi"  style={{padding:"1rem"}}>
  
  <div className="centriraj">  <img className="img-fluid slika" width="210rem" alt="nEKATO" src="/images/logofa.png"/> </div>
  <div className="centriraj">
    <img src="/images/PHOTO.png" width="177rem" className="img-fluid slika2"  alt="nEKATO"/>
   </div>



    

</div>

<div className=" myrow">

 <div className="sadrzaj ">

  <img className="img-fluid "  style={{width:'85%'}} src="/images/football-news-37.jpg" alt="nEKATO" />
  
 
  <p style={{padding:"1rem 0"}}>Fudbalska Akademija Jedinstvo je jedna od prvih privatnih fubalskih akademija u okruzenju,koja omogućava razne kurseve kako za mlade fudbalere iznad 14 god tako i za sve oni koji zele postati mladi treneri.
    Kampovi koje mi nudimo se razlikuju na osnovnu vremena kojeg bi ste kao naš član proveli na akademiji,delimo ih na one dvonedeljne koji se fokusiraju na neku fudbalsku disciplinu(taktika,tehnika),full time kurs koji traje tri godine,letnji kamp,kao i jednodnevne probe.Što se tiče opcija za trenere 
    imaće nekoliko kurseva sa različitim stepenom licence.Kvalitet akademije pokazuju naši biši studenti koji već polako zauzimaju mesto u fudbalskom svetu širom Srbije.

   
  </p>
  <h3>Sta mi nudimo?</h3> 
    
  <p> 
    Fudbalska Akademija jedinstvo smeštena je u Tutinu,opštini na jugozapadu Srbije.Akademija omogućava dobre uslove za trening kroz nekoliko pomoćnih
    terena,kao i glavnog terena na kome će se igrati utakmice full time članova akademije.Takođe akademija u saradnji sa našim sponzorima nudi i pomoćne objekte kao što su teretane,
    internate,kao i objekte u kojima će se vršiti obuka trenera.

    Akademija nudi veoma visok nivo fudbalskog znanja kroz naše trenere koji su sa nama dugi niz godina.Broj kampova će varirati u toku godine ali osnovu će činiti
    prethodno navedene kategorije.
     
    </p>



    

 <img className="img-fluid" style={{width:'85%'}} src="/images/football-news-36.jpg"  alt="slika"/>

 <p style={{padding:"1rem 0"}}> 
  Osim kurseva fudbala i edukacije, Akademija nudi niz drugih aktivnosti za studente, kao što su seminari, radionice, posete 
  fudbalskim utakmicama, gostujući govornici uključujući neka od velikih imena fudbala, večernja zabava, vežbe team-buildinga i mnoge druge aktivnosti koje ne samo da će doprineti vašem fudbalskom razvoju, već će vaše vreme ovde u akademiji učiniti zabavnim, ugodnijim i prijatnijim.

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
  
  </>;
};

export default MainHome;
