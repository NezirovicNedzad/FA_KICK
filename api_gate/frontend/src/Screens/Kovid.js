import React,{useEffect} from 'react'
import '../components/menu.css'
import {Link} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import { listNovosti } from '../actions/novostactions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Novost from '../components/Novost';
import { Image } from 'react-bootstrap';
const Kovid = () => {
    

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

<div className="col-lg-8 sadrzaj ">
   <p>Naša Akademija,u skladu sa svim merama koje su donete od strane Ministarstva zdravlja Srbije pokušaće da obezbedi redovna kovid testiranja 
     kao i određena pravila u cilju sprečavanja širenja ovog virusa.Testovi će biti dostupni pravovremeno,kao i maske koje će studenti biti obavezni da nose 
     van fudbalskih terena.
   </p>
 <div style={{display:"flex",justifyContent:"center"}}><Image className="img-fluid" style={{width: "80%"}} src="images/kovid.jpg"></Image></div>
  <p style={{paddingTop:"1rem"}}> 
   Kovid protokoli će se odnositi na sve igrače koji će biti testirani svakih 5 dana.Prisustvovati moraju svi članovi akademije osim u sledeća tri slučaja:
  </p>
  <ul>

    <li style={{color:"light-grey"}}>Student je dva puta vakcinisan bilo kojom vakcinom</li>

    <li>Student je preležao korona virus u prethodnih 6 meseci</li>
    <li>Student ima opravdan razlog za ne pojavljvianje na testiranju</li>
  </ul>
  

  
  <p> 
    Sva testiranja i provere će se odvijati u prostorijama fudbalske akademije Jedinstvo i naravno biće prisutni i medicinski radnici koji će izvršiti testove.U slučaj pozitivnog  testa 
    naš tim će sprovesti člana akademije do internata i omogućiti mu izolacioni prostor iz kojeg će mu se pružati odgovarajući medicinski tretman.
     
    </p>
 
  <p> 
    Fudbalska Akademija KICK će se potruditi da svi polaznicima omogući da bezbedno učestvuju u svim našim aktivnostima i 
    svim putovanjima koje obezbeđuje.Zbog toga molimo naše studente da se pridržavaju svih mera kako bi što bolje izašli na kraj sa ovom situacijom.
     
    </p>

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


export default Kovid