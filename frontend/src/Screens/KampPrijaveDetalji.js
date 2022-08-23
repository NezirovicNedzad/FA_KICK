import React,{useEffect} from 'react';
import { Col,Row,Image,Button, Container,Table } from 'react-bootstrap';
import {CampDetails} from "../actions/campactions"
import { listKordinatori, listKorisniciPrijave} from '../actions/korisnikaction';
import {useSelector,useDispatch} from "react-redux"
import { useNavigate,useParams} from "react-router-dom"
import { DeletePrijava,prijavaKampoviSvaki } from '../actions/prijaveactions';
import{listKorisnicizaPrijave} from '../actions/korisnikaction'
import Loader from '../components/Loader'; 
import Message from '../components/Message';
import { Link } from 'react-router-dom';
import './profil.css'
import { PRIJAVE_DELETE_RESET } from '../constants/prijaveConstants';

import Paginate from '../components/Paginate';


const KampPrijaveDetalji = () => {


  


const dispatch=useDispatch()




const campDetail=useSelector(state=>state.campDetails)
const {loading,error,camp}=campDetail




const userLogin = useSelector(state => state.korisnickiLogin)
const{userInfo}=userLogin









const korisniciLista=useSelector(state=>state.korisnicizaPrijave)
const {loading:loadingKorisnici,error:errorKorisnici,korisnici}=korisniciLista


const prijavezaSvakiKamp = useSelector(state =>state.prijavaKamp)
const {prijave,page,pages}=prijavezaSvakiKamp



const prijaveDelete = useSelector(state => state.prijaveDelete)
const {success:successDelete}=prijaveDelete


const params=useParams()
const navigate=useNavigate()
const pageNumber=params.pageNumber





useEffect (()=>{

  dispatch(listKordinatori())
   dispatch(CampDetails(params.id))
   dispatch(prijavaKampoviSvaki(params.id,pageNumber))
   dispatch(listKorisnicizaPrijave())
  
   dispatch(listKorisniciPrijave())
   
   if(!userInfo)
   {
     navigate('/login')
    
   }

   if(successDelete)
   {

    setTimeout(() => dispatch({type:PRIJAVE_DELETE_RESET}),5000)
   }
   
  
},[dispatch,params,navigate,userInfo,successDelete,pageNumber])





const deleteHandler =(id)=>{

    if(window.confirm("Jeste li sigurni?"))
    {

      dispatch(DeletePrijava(id))
    }

}



const oceniHandler =(id)=>{

    navigate(`/kamp/prijave/${id}/ocene`)

}
const detalji_kor=(id)=>{


  navigate(`/profil/prijave/${id}/${params.id}`)
}


  return <>
    <>
        <div className='flex2' style={{marginTop:"2.5rem",paddingTop:"1rem"}}>
        {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader/>}
             
            <div className='t33' style={{marginBottom:"0.5rem",padding:"2.4rem"}} >
        
            <Link to='/profil' style={{marginLeft:"4%"}} className='dodaj'>Vrati se</Link>
            <div style={{marginTop:"2rem"}}  className='RED'>
          <div className='kol3'>
          <h3 style={{color:"#e70b0b",textAlign:"center"}}>{camp.tip}</h3>
            <Container className="centriraj">
            <Image  className='slika' fluid width="60%" src={camp.slika} alt="Vaša slika.." />
            </Container>
            </div>
<div className='kol3'>
        <Container className="pravi">
       
           <p>Cena kampa će iznositi {camp.cena}din,i naši članovi su dužni da dostave isplate na vreme.Kamp će trajati u sledećem vremenskom intrevalu</p>
   <p><i className="fas fa-caret-right"></i> <span className="name">Od:</span>{camp.datum_pocetka}</p>
           <p><i className="fas fa-caret-right"></i><span className="name">Do:</span>{camp.datum_zavrsetka}</p>
           <p>{camp.text}</p>
          
           </Container>
           
           </div>


           </div>

           <h5 style={{color:"#e70b0b",textAlign:"center"}}>Lista svih članova na ovom kampu</h5>
                 


           {successDelete && <Message variant='success'>Član uspešno sklonjen s kampa!</Message>}
  
  <Table  striped bordered hover responsive className='table-sm'>
  
  
      <thead>
          <tr>
              <th>Id PRIJAVE</th>
              <th>Ime</th>
              <th>Email</th>
              <th>Pozicija</th>
              <th>Godine</th>
          
             <th>Ukloni -  Oceni - Profil</th>
  
          </tr>
      </thead>
  
      
          {
          
          loadingKorisnici ? <Loader/> : errorKorisnici ?<Message variant="danger">{errorKorisnici}</Message> :
  
          
          prijave.map(prijavice=>
               
           
  
             
              korisnici.map(korisnik=>(
  
                  korisnik._id===prijavice.korisnikId &&    
                <tr key={korisnik._id}>
                    <td>{prijavice._id}</td>
                    <td>{korisnik.ime}</td>
                    <td><a style={{color:"#e70b0b"}} href={`mailto:${korisnik.email}`}>{korisnik.email}</a></td>
                    <td>{korisnik.pozicija}</td>
                    <td>{korisnik.brgod}</td>
                
                
                   
                
                
                
                    
                
              
                  <td>
                 <Button style={{margin:"0 1rem"}}  variant="danger" className='btn-sm' onClick={()=>
                 deleteHandler(prijavice._id)} >
                    <i className="fas fa-trash"></i>
                         
                   </Button>
                   <Button style={{margin:"0 1rem"}} variant="dark" className='btn-sm' onClick={()=>
                      oceniHandler(prijavice._id)} >
                         <i className="fas fa-edit"></i>
                               
                        </Button>
                   <Button style={{margin:"0 1rem"}} variant="dark" className='btn-sm' onClick={()=>
                    detalji_kor(prijavice._id)} >
                        <i className="fa-solid fa-user"></i>
                              
                        </Button>
                   
                   </td>
                   
                   
             
                    
                </tr>
                
                        ))
  
            )
            
            
            
            
            
            
            
            
                   
          
        
          
   }
      
  </Table>

  <Paginate page={page} pages={pages} link={`/kamp/prijave/${params.id}/page/`}/>
  
  

                 

           
            </div>
            

            <div style={{paddingTop:"2.4rem"}} className="div212">
           
            <h5>Opis posla</h5>

            <p>Kao kordinator imaćete mogućnost da unesete ocene za sve polaznike ovog kampa što će olakšati praćenje
                
                i napredak naših studenata.Tu mogućnost ćete izvršavati novih ocena pritiskom na crno dugme u tabeli. </p>
            <p>Takođe usled nedoličnog ponašanja kao koordinator kampa imaćete mogućnost da sklonite igrača iz kampa.Tu mogućnost možete izvršiti
                ako pritisnete crveno dugme. </p>


              </div>
          
    </div>
  
   </>          
  </>;
};

export default  KampPrijaveDetalji;
