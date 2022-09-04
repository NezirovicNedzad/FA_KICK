import React,{useEffect} from 'react'
import '../components/menu.css'
import {Link} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import { listNovosti } from '../actions/novostactions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Novost from '../components/Novost';
import { Image } from 'react-bootstrap';
const Poreklo = () => {
    

    const dispatch=useDispatch()
    const novostiList=useSelector(state=>state.novostList)

    const{loading,error,novosti}=novostiList

    useEffect( () =>{
        dispatch(listNovosti())
      
    } ,[dispatch])
  return (
    <>
    
  <div className="jumbotron novi"  style={{paddingTop:"5rem"}}>
  
  <div className="centriraj">  <img className="img-fluid slika" width="210rem" alt="nEKATO" src="/images/logofa.png"/> </div>
  <div className="centriraj">
    <img src="/images/PHOTO.png" width="177rem" className="img-fluid slika2"  alt="nEKATO"/>
   </div>



    

</div>

<div className=" myrow">


<div className="col-lg-8 sadrzaj ">
   
   <img className="img-fluid" src="images/o-22.jpg"></img>
   <p style={{marginTop:"1.7rem"}}>
       FA-KICK je prva privatna fudbalska akademija u ovom regionu Srbije. Mi brinemo za razvoj fudbala, istovremeno pružajući priliku za stecanje obrazovnih kvalifikacija. Kursevi fudbala uključuju intenzivne fudbalske treninge, FA iznajmljene utakmice, intenzivnu psihoterapiju i fitnes režime, kao i učenje o drugim aspektima igre. Uspjeh Akademije doveo je do toga da su mnogi igrači upoznati sa igrom od njenog početka 2007. godine, a mnogi od njih će uspjeti igrati profesionalno i poluprofesionalno u Srbiji i inostranstvu.
  
   </p><p style={{margin:" 1.4rem 0.2rem"}}> Pročitajte o tome kako smo postali vodeća privatna fudbalska akademija u ovom delu Srbije  ispod:</p>
  
    
  <h3 style={{color:"#e70b0b"}}>Počeci Akademije</h3>
  
  <h5 >Pocetak 2007</h5>
  
  <p style={{margin:" 1.4rem 0.2rem"}}>Naši treneri koriste svo iskustvo, stručnost i kontakte koje su razvili u posljednjih 7 godina kako bi stvorio  Fudbalsku akademiju Jedinstvo – prvu privatnu fudbalsku akademiju u ovom regionu Srbije. Fudbalsku akademiju jedinstvo zvanično je otvorio naš bivši igrač  i kapiten Adnan Čuljević  u septembru, a sa sedištem u Tutinu,ulica Rifata Burdževića Trša put bb.
  
    Dvadeset osam studenata pohađa prvu sezonu uz plaćanje godišnje naknade od 105,000din a prvi međunarodni student se pridružuje Akademiji.</p>
  <h5 >2009</h5>
  
  <p style={{margin:" 1.4rem 0.2rem"}}>Fudbalska Akademija Jedinstvo je tokom 2009. godine vodila niz probnih kampova u profesionalnim klubovima širom Srbije</p><p>Njima je prisustvovalo preko 200 igrača i 15 skauta,među kojima i neki koji su napravli ozbiljne fudbalske karijere.</p>
  <h5 > 2012</h5>
  
  <p style={{margin:" 1.4rem 0.2rem"}}>Fudbalska akademija Jedinstvo  povećava svoje godišnje naknade na 120.000 din, a međunarodni studenti po prvi put čine 60% našeg tima.
  
    Sledeći projekat je isporučen u ime naših sponzora– „Balkan kup“, pri čemu takođe organizujemo petodnevni boravak u Austriju za naše najmlađe članove 
    i takmičenje sa timovima širom Evrope.</p>
  <h5 >2015</h5>
  
  <p style={{margin:" 1.4rem 0.2rem"}}>Pioniri fudbalske Akademije Jedinstvo su napravili iskorak i plasirali se u veći rang-prvu pionirsku Ligu Zapadne Srbije.
  U ovoj ligi naši pioniri su se takmičili sa velikim klubovima kao što je Radnički Kragujevac,Fk Novi Pazar,FK Borac ,FK Metalac, itd..
  </p>
  <h5 >2018</h5>
  
  <p style={{margin:" 1.4rem 0.2rem"}}>Fudbalska Akademija Jedinstvo osniva i svoj prvi tim, koji se takmiči u zoni Raškog okruga,i koji se uglavnom sastoji iz igrača iz naše Fudbalske Akademije.
  </p>
  <h5>2020</h5>
  
  <p style={{margin:" 1.4rem 0.2rem"}}>Prvi tim Fudbalske Akademije Jedinstvo , koji se takmičio u zoni Raškog okruga,plasirao se u veći rang i to u treću Srpsku Ligu.Naši igrači koji su prošli kroz akademiju sada će imati 
    šansu da se dokazuju u ligi iz koje su izašli veliki igrači,koji su dosegli i prvu Ligu Srbije i čak zaslužili angažman u inostranstvu.
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


export default Poreklo