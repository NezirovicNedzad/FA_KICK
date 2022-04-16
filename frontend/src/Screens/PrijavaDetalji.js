import React,{useEffect} from 'react';
import { Col,Row,Table } from 'react-bootstrap';
import BarChart from '../components/BarChart';
import { listKordinatori,listKorisnicizaPrijave} from '../actions/korisnikaction';
import {useSelector,useDispatch} from "react-redux"
import {useNavigate,useParams} from "react-router-dom"
import {prijavaDetails,listPrijave} from '../actions/prijaveactions'
import Loader from '../components/Loader'; 
import Message from '../components/Message';
import {prijavaKorisnciSvi} from '../actions/prijaveactions';
import './profil.css'
import Korisnici from '../components/Korisnici';
import { listKorisniciPrijave } from "../actions/korisnikaction"
import Paginate from '../components/Paginate';
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




const navigate=useNavigate()



useEffect (()=>{
  dispatch(listKorisnicizaPrijave())
  dispatch(listKordinatori())
 dispatch(prijavaDetails(params.id))
 dispatch(listPrijave())
 dispatch(prijavaKorisnciSvi(kampId,pageNumber))

 dispatch(listKorisniciPrijave())
  
},[dispatch,params,navigate,pageNumber,kampId])






  return <>
    <>
        <Row style={{marginTop:"4.5rem",paddingTop:"1rem"}}>
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
          <p>Same ocene biće prikazane u sledećem delu:
          </p>
          <div>

            <h5 style={{textAlign:"center"}}>Ocene</h5>
            
            {prijava.ocene.length===0 && <Message>Trenutno nemate nijednu ocenu!</Message>}

           

            {prijava.ocene.map(ocena=>
              
              
              (<div key={ocena._id}>
                <div className='prijava'  style={{border:"1px solid black"}}>
              <div className="RED">

              <div style={{justifyContent:"center",display:'flex',alignItems:"center"}} className='kol3' >
             <BarChart tehnika={ocena.tehnika} taktika={ocena.taktika} fizika={ocena.fizika}/>
             </div>
             <div style={{textAlign:"center"}} className='kol3'>
          
              <p style={{margin:"1.2rem 0"}}><span className='name'>Komentar trenera:</span>{ocena.text}</p>
              <p style={{margin:"1.2rem 0"}}><span className='name'>Trening održan:</span>{ocena.trening.substring(0,10)}</p>
              <p style={{margin:"1.2rem 0"}}><span className='name'>Prosečna ocena:</span>{((ocena.tehnika+ocena.taktika+ocena.fizika)/3).toFixed(2)}</p>
             </div>
              
              </div>
              </div>
              
              </div>))}


          </div>

       <div className='RED'>
         <div className='kol3'><p ><span className='datum'><span className="name">Datum pocetka:</span>{prijava.datum_pocetka}</span> <span className='datum2'><span className="name">Datum zavrsetka:</span>{prijava.datum_zavrsetka}</span> </p></div>
       
          
              </div>



          

        
         

            </Col>
            

            <Col style={{padding:"1.4rem"}} lg={4} >
           

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
          
    </Row>
  
   </>          
  </>;
};

export default PrijavaDetalji;
