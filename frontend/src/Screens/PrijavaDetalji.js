import React,{useEffect} from 'react';
import { Col,Row,Table } from 'react-bootstrap';

import { listKordinatori,listKorisnicizaPrijave} from '../actions/korisnikaction';
import {useSelector,useDispatch} from "react-redux"
import {useNavigate,useParams} from "react-router-dom"
import {prijavaDetails,listPrijave, DeleteOcena} from '../actions/prijaveactions'
import Loader from '../components/Loader'; 
import Message from '../components/Message';
import {prijavaKorisnciSvi} from '../actions/prijaveactions';
import './profil.css'
import Korisnici from '../components/Korisnici';
import { listKorisniciPrijave } from "../actions/korisnikaction"
import Paginate from '../components/Paginate';
import SliderOcena from '../components/SliderOcena';
import { DeletePrijava,prijavaKampoviSvaki } from '../actions/prijaveactions';
import "./prijave.css"
import { DELETE_OCENA_RESET } from '../constants/prijaveConstants';

const PrijavaDetalji = () => {

const dispatch=useDispatch()

const params=useParams()


const listkordinatora=useSelector(state=>state.korisnickiKordinator)
const {kordinatori}=listkordinatora

const prijaveDetalji=useSelector(state=>state.prijaveDetalji)
const {loading:loadingPrijava,error:errorPrijava,prijava}=prijaveDetalji

const userLogin = useSelector(state => state.korisnickiLogin)

const{userInfo}=userLogin

const korisniciPrijave=useSelector(state=>state.korisnicizaPrijave)
const {loading,error,korisnici}=korisniciPrijave

const prijavezaSvakiKamp = useSelector(state =>state.prijavasviKorisnici)
const {prijave:prijaveKorisnici,page,pages}=prijavezaSvakiKamp



const pageNumber=params.pageNumber
const kampId=params.kampId


const deletePrijava = useSelector(state => state.prijavaOceneDelete)

const{success,loading:loadingDelete,error:errorDellete}=deletePrijava


const navigate=useNavigate()



useEffect (()=>{
  dispatch(listKorisnicizaPrijave())
  dispatch(listKordinatori())
 dispatch(prijavaDetails(params.id))
 dispatch(listPrijave())
 dispatch(prijavaKorisnciSvi(kampId,pageNumber))

 dispatch(listKorisniciPrijave())
 if(success)
 {

  setTimeout(() => dispatch({type:DELETE_OCENA_RESET}),5000)
 }
 


  
},[dispatch,params,navigate,pageNumber,kampId,success])






  return <>
    <>
        <div className='RED' style={{marginTop:"4.5rem",paddingTop:"1rem"}}>
       {loadingPrijava &&<Loader/>}
       {errorPrijava &&<Message variant="danger">{errorPrijava}</Message>}
             
            <Col style={{padding:"2.5rem"}} lg={8}>

     
        
            
            
              <h3 style={{textAlign:"center",marginBottom:"1.5rem"}}>{prijava.tip}</h3>
            
              
              
         
           
          <p>U ovom delu članovi kampa će moći da vide ko je sve od drugih članova na kampu kao i da stalno pregledaju ocene 
            koje će davati koordinator kampa.Naši koordinatori su uvek spremni da pomognu,ako imate nekih nedoumica njihova email adresa je data desno.
          </p>
          <p>Koordinator će unostiti ocene koje se odnose na napredak u tehničkim,taktičkim sposobnostima člana kampa kao i fizičkom spremom člana.Koordinator će
            ocene unostiti nakon svakog treninga i ocene će biti u rangu od 1-10.
          </p>
          {userInfo.isKordinator ? <><p>Kao kordinator na ovom kampu imate mogućnost uklanjanja prethodno datih ocena,pritiskom da dugme u desnom uglu kartice za ocenu.</p></> : <></>}
          <p>Same ocene biće prikazane u sledećem delu:
          </p>
          <div>

            
            
            {prijava.ocene.length===0 ? <Message>Trenutno nemate nijednu ocenu!</Message> :
             <SliderOcena prijava={prijava} error={error} loading={loading} success={success} loadingDelete={loadingDelete}/>}

           

        


          </div>

       <div className='RED'>
         <div className='kol3'><p ><span className='datum'><span className="name">Datum trajanja:</span>{prijava.datum_pocetka}-{prijava.datum_zavrsetka}</span>  </p></div>
       
          
              </div>



          

        
         

            </Col>
            

            {userInfo.isKordinator===true ? <>
            
              <Col style={{padding:"1.4rem"}} lg={4} >
           

           {kordinatori.map(kordinator=>(
              
            kordinator._id===prijava.koordinatorId ?
           <div key={kordinator._id}>
           
          
          
            <h5 style={{textAlign:"center"}}>Lista svih članova kampa</h5>
            {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> :(
          
          
          <Table  striped bordered hover responsive className='table-sm'>
          
          
              <thead>
                  <tr>
                      <th>Ime</th>
                      <th>Pozicija</th>
                      <th>Godine</th>
                    
          
          
                  </tr>
              </thead>
          
              <tbody>
          
                  {
                  
                  prijaveKorisnici.map(prijavice=>
                       
                   
          
                     
                      korisnici.map(korisnik=>(
          
                          korisnik._id===prijavice.korisnikId &&    
                        <tr key={korisnik._id}>
                          
                            <td>{korisnik.ime}</td>
                            <td>{korisnik.pozicija}</td>
                            <td>{korisnik.brgod}</td>
                        
                        
                           
                        
                        
                        
                            
                        
                        
                            
                        </tr>
                        
                                ))
          
                    
                    
                    
                    
                    
                    
                    
                    
                    )
                  
                  
                  
                  
           }
              </tbody>
          </Table>
          
          
          
          
          )}
          
          
          <Paginate page={page} pages={pages} link={`/profil/prijave/${params.id}/${kampId}/page/`}/>
          
          
            </div>
          
            
            : <div key={kordinator._id}></div>
           
           
            
            ))}
          
                        </Col>
            
            
            </> : <Col style={{padding:"1.4rem"}} lg={4} >
           

           {kordinatori.map(kordinator=>(
              
            kordinator._id===prijava.koordinatorId ?
           <div key={kordinator._id}>
           
            <Korisnici key={kordinator._id}   kordinatori={kordinator} />
          
            <h5 style={{textAlign:"center"}}>Lista svih članova kampa</h5>
            {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> :(
          
          
          <Table  striped bordered hover responsive className='table-sm'>
          
          
              <thead>
                  <tr>
                      <th>Ime</th>
                      <th>Pozicija</th>
                      <th>Godine</th>
                    {userInfo.isKordinator ? <th></th> : <></>}  
          
          
                  </tr>
              </thead>
          
              <tbody>
          
                  {
                  
                  prijaveKorisnici.map(prijavice=>
                       
                   
          
                     
                      korisnici.map(korisnik=>(
          
                          korisnik._id===prijavice.korisnikId &&    
                        <tr key={korisnik._id}>
                          
                            <td>{korisnik.ime}</td>
                            <td>{korisnik.pozicija}</td>
                            <td>{korisnik.brgod}</td>
                        
                        
                           
                        
                        
                        
                            
                        
                        
                            
                        </tr>
                        
                                ))
          
                    
                    
                    
                    
                    
                    
                    
                    
                    )
                  
                  
                  
                  
           }
              </tbody>
          </Table>
          
          
          
          
          )}
          
          
          <Paginate page={page} pages={pages} link={`/profil/prijave/${params.id}/${kampId}/page/`}/>
          
          
            </div>
          
            
            : <div key={kordinator._id}></div>
           
           
            
            ))}
          
                        </Col>
                    }
    </div>
  
   </>          
  </>;
};

export default PrijavaDetalji;
