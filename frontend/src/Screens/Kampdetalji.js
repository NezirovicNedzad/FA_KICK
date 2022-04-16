import React,{useEffect,useState} from 'react';
import { Col,Row,Image,Button, Container } from 'react-bootstrap';
import {CampDetails} from "../actions/campactions"
import { listKordinatori } from '../actions/korisnikaction';
import {useSelector,useDispatch} from "react-redux"
import { useLocation,useNavigate,useParams} from "react-router-dom"
import {prijavaKreiraj} from '../actions/prijaveactions'
import {PRIJAVE_KREIRAJ_RESET} from '../constants/prijaveConstants'
import {prijavaZaKampoviSvaki } from '../actions/prijaveactions';
import Loader from '../components/Loader'; 
import Message from '../components/Message';
import { Link } from 'react-router-dom';
import './profil.css'
import Korisnici from '../components/Korisnici';
const Kampdetalji = () => {


  


const dispatch=useDispatch()


const [message,setMessage]=useState('')
const [vecPrijavljen,setVecPrijavljen]=useState('')



const campDetail=useSelector(state=>state.campDetails)
const {loading,error,camp}=campDetail

const listkordinatora=useSelector(state=>state.korisnickiKordinator)

const {kordinatori}=listkordinatora


const userLogin = useSelector(state => state.korisnickiLogin)
const{userInfo}=userLogin

const fult=22
const letnji=35
const dvoneldeljni=40


const prijavezaSvakiKamp = useSelector(state =>state.prijavazaKamp)
const {count}=prijavezaSvakiKamp

const prijavaCreate= useSelector(state => state.prijaveKreiraj)
const{success:successPrijava,fail}=prijavaCreate

const params=useParams()
const navigate=useNavigate()
const location=useLocation()
const redirect=location.search ? location.search.split('=')[1] :'/'


const kordinator=camp.koordinatorId;
const kampId=camp._id;
const ocene=[];
const datum_pocetka=camp.datum_pocetka
const datum_zavrsetka=camp.datum_zavrsetka
const tip=camp.tip

const text=camp.opis;
const slika=camp.slika;
const pageNumber=params.pageNumber


useEffect (()=>{
  dispatch({type:PRIJAVE_KREIRAJ_RESET})
  dispatch(listKordinatori())
   dispatch(CampDetails(params.id))
   
 dispatch(prijavaZaKampoviSvaki(params.id))
   if(successPrijava && userInfo)
   {
     navigate('/profil')
     dispatch({type:PRIJAVE_KREIRAJ_RESET})
   }

   if(fail)
   {
     setVecPrijavljen(<p style={{padding:"1rem"}}>
      Već ste prijavljeni na ovaj kamp.Pogledajte listu vasih prijavljenih kampova <Link style={{color:"red"}} to='/profil'>ovde.</Link></p>)
   }
  
},[dispatch,params,successPrijava,navigate,userInfo,pageNumber,fail,setVecPrijavljen])




const prijavi =()=>{

   if(!userInfo)
   {
          navigate(`/login?redirect=${redirect}`)     
   }
   else if(userInfo.isAdmin || userInfo.isKordinator)
   {
        var btn1=document.getElementById('btn1')

        btn1.style.display="none"
   
   }



   else if(camp.tip==="Letnji kamp")
   {
     console.log(count)
     if(count>letnji)
     {
      setMessage(<p><p>Oprostite,sva mesta na ovom letnjem kampu su zauzeta!Naš maksimalni kapacitet od 35 mesta na kampu je popunjen.</p><p>Nađite mesta na nekom drugom kampu <Link style={{color:"red",textDecoration:"display"}} to="/kampovi">ovde</Link>! </p> </p>)
     }
     else 
     {
       
      dispatch(prijavaKreiraj(kampId,kordinator,userInfo._id,ocene,slika,text,tip,datum_pocetka,datum_zavrsetka))
     }
   

   }
   else if(camp.tip==="Dvonedeljni Kamp")
   {
     if(count>dvoneldeljni)
     {
      setMessage(<p><p>Oprostite,sva mesta na ovom dvonedeljnom  kampu su zauzeta!Naš maksimalni kapacitet od 40 mesta je popunjen.</p><p>Nađite mesta na nekom drugom kampu <Link style={{color:"red",textDecoration:"display"}} to="/kampovi">ovde</Link>! </p> </p>)
     }
     else 
     {
       
      dispatch(prijavaKreiraj(kampId,kordinator,userInfo._id,ocene,slika,text,tip,datum_pocetka,datum_zavrsetka))
     }
   

   }
   else if(camp.tip==="Full-time kamp")
   {
     if(count>fult)
     {
      setMessage(<p><p>Oprostite,sva mesta na ovom Full-time kampu su zauzeta!Naš maksimalni kapacitet od 22 mesta na kampu je popunjen.</p><p>Nađite mesta na nekom drugom kampu <Link style={{color:"red",textDecoration:"display"}} to="/kampovi">ovde</Link>! </p> </p>)
     }
     else 
     {
       
      dispatch(prijavaKreiraj(kampId,kordinator,userInfo._id,ocene,slika,text,tip,datum_pocetka,datum_zavrsetka))
     }

   }
   else{
    setMessage(`Nepostojan kamp.`)

   }
   
 
}


  return <>
    <>
        <Row style={{marginTop:"4.5rem",paddingTop:"1rem"}}>
        {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader/>}
             
            <Col md={9} style={{borderRight:"1px dotted",marginBottom:"0.5rem"}} >
        
            <Link to='/' style={{marginLeft:"4%"}} className='dodaj'>Vrati se</Link>
          
            <Container className="centriraj">
            <Image  className='slika' fluid width="60%" src={camp.slika} alt="Vaša slika.." />
            </Container>
           

        <Container className="pravi">
        <h3 style={{color:"#e70b0b"}}>{camp.tip}</h3>
           <p>Cena kampa će iznositi {camp.cena}din,i naši članovi su dužni da dostave isplate na vreme.Kamp će trajati u sledećem vremenskom intrevalu</p>
   <p><i className="fas fa-caret-right"></i>  Od:{camp.datum_pocetka}</p>
           <p><i className="fas fa-caret-right"></i>  Do:{camp.datum_zavrsetka}</p>
           <p>{camp.text}</p>
           <p>{camp.opis}</p>
           </Container>
           

<Button id="btn1" onClick={prijavi} style={{marginLeft:"4%",marginBottom:"0.4rem"}} className="dodaj">Prijavi se</Button>
          
    
             <p>{vecPrijavljen}</p>
           <p style={{padding:"1rem"}}>{message}</p>


            </Col>
            

            <Col md={3} >
           

 {kordinatori.map(kordinator=>(
    
  kordinator._id===camp.koordinatorId ?
 
  <Korisnici key={kordinator._id}   kordinatori={kordinator} />
  : <div key={kordinator._id}></div>
 
 
  
  ))}

              </Col>
          
    </Row>
  
   </>          
  </>;
};

export default Kampdetalji;
