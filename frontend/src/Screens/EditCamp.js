
import React,{useState,useEffect} from "react"

import {Form,Button,Row,Col,Table} from 'react-bootstrap'
import {useDispatch,useSelector,} from 'react-redux'
import Message from '../components/Message'

import { useNavigate ,useParams} from "react-router-dom"
import{listKordinatori} from  '../actions/korisnikaction'

import Loader from '../components/Loader'
import{CampDetails,CampUpdate} from '../actions/campactions'
import axios from "axios"
import './profil.css'
import { CAMP_UPDATE_RESET } from "../constants/campConstants"



const CampEditScreen = () => {

    const [tip,setTip]=useState('')
    const [cena,setCena]=useState(0)
    const [koordinatorId,setKoordinatorId]=useState('')
    const [slika,setSlika]=useState('')
    const [datum_pocetka,setDatum_Pocetka]=useState('')
    const [datum_zavrsetka,setDatum_Zavrsetka]=useState('')
    const [opis,setOpis]=useState('')
    const [text,setText]=useState('')
    const [uploading,setUploading]=useState(false)
   


   
    const dispatch=useDispatch()


    const campDetails = useSelector(state => state.campDetails)
    const{loading,error,camp}=campDetails

    const campUpdate = useSelector(state => state.campUpdate)
    const{loading:loadingUpdate,error:errorUpdate,success:successUpdated}=campUpdate

    
    const kordintoriSvi = useSelector(state => state.korisnickiKordinator)
    const{loading:loadingKorindator,error:errorKordinator,kordinatori}=kordintoriSvi

    const params=useParams()
   const navigate=useNavigate()
    const campId=params.id
  
  
     useEffect(()=>{
    if(successUpdated)
    {

        dispatch({type:CAMP_UPDATE_RESET})
        navigate('/admin/listakampova')
    }
    else{

        if(!camp.tip  || camp._id!==campId)
        {
              dispatch(CampDetails(campId))
              dispatch(listKordinatori())
        }else{
    
          setTip(camp.tip)
          setCena(camp.cena)
          setKoordinatorId(camp.koordinatorId)
          setSlika(camp.slika)
          setDatum_Pocetka(camp.datum_pocetka)
          setDatum_Zavrsetka(camp.datum_zavrsetka)
          setOpis(camp.opis)
          setText(camp.text)
           
          
        }
    }

  
    
  },[navigate,dispatch,camp,campId,successUpdated])
  
 
  
  const submitHandler = (e) =>{
    e.preventDefault()

    dispatch(CampUpdate({

        _id:campId,
        tip,
        cena,
        koordinatorId,
        slika,
        datum_pocetka,
        datum_zavrsetka,
        opis,
        text
        

    }))
   


             }

      const uploadFileHandler =async (e) =>{
           const file=e.target.files[0]//samo prvu sliku
           const formData=new FormData()
           formData.append('image',file)
           setUploading(true)
           try {
                const config= {

               headers:
               {

               'Content-Type':'multipart/form-data'
               }

                          }


                const {data}=await axios.post('/api/upload',formData,config)

                setSlika(data)
                setUploading(false)
           } catch (error) {
                console.error(error)
                setUploading(false)
           }




      }       

 
   
    return (
        <Row className="drugi" >
            
<Col className="kolone"  md={7}>
         
           <h1 style={{color:'#e70b0b'}}>Uredi Kamp</h1>
           {loadingUpdate && <Loader/>}
           {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
            {loading ? <Loader/> : error  ? <Message variant="danger">{error}</Message> :
            <Form onSubmit={submitHandler} >
                  

                  <Form.Group controlId='tip'>

                        <Form.Label>Tip</Form.Label><br></br>
                       
                        
                    <Form.Select className="custom-select" value={tip}  onChange={(e)=>setTip(e.target.value)} >
                        <option >Dvonedeljni kamp</option>
                        <option >Letnji kamp</option>
                        <option >Full time kamp</option>
                        
                        </Form.Select>
                        </Form.Group>

                   <Form.Group controlId='cena'>

                        <Form.Label>Cena</Form.Label>
                        <Form.Control 
                        type='number'
                        placeholder='cena..'
                        value={cena}
                        onChange={(e)=>setCena(e.target.value)} >

                        </Form.Control>
                   </Form.Group>
                   <Form.Group controlId='image'>

                        <Form.Label>URL slike</Form.Label>
                        <Form.Control 
                        type='text'
                        placeholder='vasa slika..'
                        value={slika}
                        onChange={(e)=>setSlika(e.target.value)} >


                        </Form.Control>
                        <input     type="file" onChange={uploadFileHandler} id="file-input"></input>
                        <label htmlFor="file-input"><i className="fas fa-image"></i> Izaberi sliku</label>
                     

                        {uploading && <Loader/>}
                   </Form.Group>
                   {loadingKorindator ? <Loader/> : errorKordinator ? <Message variant="danger">{errorKordinator}</Message> :  (
                   <Form.Group controlId='koordinatorId'>

                                   <Form.Label>Koordinator</Form.Label><br></br> 

                                   <Form.Select className="custom-select"   onChange={(e)=>setKoordinatorId(e.target.value)} >
                                  
                                   
                                   

                                  { (kordinatori.map(kordinator=>
                                        <option key={kordinator._id} value={kordinator._id}>{kordinator.ime}</option>))}
                                 
                     
                                   
                                   

                                   </Form.Select>
           </Form.Group>
    )}

                   <Form.Group controlId='datum_pocetka'>

                        <Form.Label>Od:</Form.Label>
                        <Form.Control type='text' placeholder='datum pocetka..'
                        value={datum_pocetka}
                        onChange={(e)=>setDatum_Pocetka(e.target.value)} ></Form.Control>
                   </Form.Group>
                   <Form.Group controlId='datum_zavrsetka'>

                        <Form.Label>Do:</Form.Label>
                        <Form.Control type='text' placeholder='datum zavrsetka..'
                        value={datum_zavrsetka}
                        onChange={(e)=>setDatum_Zavrsetka(e.target.value)} ></Form.Control>
                   </Form.Group>
                   <Form.Group controlId='opis'>

                        <Form.Label>Kratki opis:</Form.Label>
                        <Form.Control type='text' placeholder='datum zavrsetka..'
                        value={opis}
                        onChange={(e)=>setOpis(e.target.value)} ></Form.Control>
                   </Form.Group>
                   <Form.Group controlId='text'>

                        <Form.Label>Duzi opis:</Form.Label>
                        <Form.Control type='text' as="textarea" style={{minHeight:"7rem"}} placeholder='datum zavrsetka..'
                        value={text}
                        onChange={(e)=>setText(e.target.value)} ></Form.Control>
                   </Form.Group>
                 

                   
                 
                    
            <Button className='dugme' type='submit'  >
                        Dodaj
            </Button>

                   </Form>
                          }
           </Col>

           <Col className="kolone" md={5}>
                <h2 style={{color:'#e70b0b'}}>Lista kordinatora</h2>
               <p>Podseti se kvaliteta svakog koordinatora radi donošenja lakše odluke koji koordinator je adekvatniji izbor za novi kamp.</p> 
               {loadingKorindator ? <Loader></Loader> : errorKordinator ? <Message variant="danger">{errorKordinator}</Message> : (
               <Table striped bordered hover responsive className='table-sm'>
               <thead>

                    <tr>

                         <th>Ime</th>
                         <th>Email</th>
                         <th>Licenca:</th>
                         <th>Broj godina</th>
                    </tr>
                  </thead>  
                  <tbody>
                  {kordinatori.map(kordinator =>
                  

                      
                              
                              <tr key={kordinator._id}>

                                   <td>{kordinator.ime}</td>
                                   <td>{kordinator.email}</td>
                                   <td>{kordinator.licenca}</td>
                                   <td>{kordinator.brgod}</td>
                              </tr>
                
                    )}
                          
                          </tbody>

               </Table>
               )}
           </Col>
           
        </Row>
    )

}

export default CampEditScreen