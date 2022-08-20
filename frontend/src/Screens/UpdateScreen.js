
import React,{useState,useEffect} from "react"

import {Form,Button,Row,Col} from 'react-bootstrap'
import {useDispatch,useSelector,} from 'react-redux'
import Message from '../components/Message'
import axios from "axios"

import { useNavigate } from "react-router-dom"
import {KORISNICKI_UPDATE_RESET} from '../constants/korisnickeConstants'
import Loader from '../components/Loader'
import {getKorisnickiDetalji ,updateKorisnickiProfil} from "../actions/korisnikaction"


import './profil.css'


const UpdateScreen = () => {

    const [ime,setIme]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
   
    const [uploading,setUploading]=useState(false)
   
    const [slika,setSlika]=useState('')


    const[message,setMessage]=useState(null)
    const dispatch=useDispatch()


    const userDetails = useSelector(state => state.korisnickiDetalji)
    const{loading,error,user}=userDetails

    const userLogin = useSelector(state => state.korisnickiLogin)
    const {userInfo}=userLogin

    const userUpdate = useSelector(state => state.korisnickiUpdate)
    const {success}=userUpdate

    
   const navigate=useNavigate()


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
  
  
     useEffect(()=>{


    if(!userInfo)
    {
  navigate('/login')
    }
    
        if(!user )
        {
            
            dispatch(getKorisnickiDetalji('profil'))
        }

     if(success)
        {
             
           
          window.location.reload()
    setTimeout(() => dispatch({

     type:KORISNICKI_UPDATE_RESET
    }),4500)

   
       
        }
     else {



           setSlika(user.slika)
        setIme(user.ime)
        setEmail(user.email)
      
       
      }


  },[userInfo,navigate,user,dispatch,success])
  
 
  
  const submitHandler = (e) =>{
    e.preventDefault()

   if(password!==confirmPassword)
   {
       setMessage('Šifre nisu iste!')
   }
   else
   {

   dispatch(updateKorisnickiProfil(
        {id:user._id,ime,email,password,slika}))
   }
                             }

   const vrati =() =>{

 
      navigate('/profil')
   }   
   
   
   console.log(user.slika)
    return (
     <Row  style={{padding:"1rem"}}className="drugi">
           <Col  md={4}>
</Col>          
<Col  md={4}>
           <Button onClick={vrati} className="my-3" >Vrati se</Button>
           <h1 style={{color:'#e70b0b'}}>Promeni podatke</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {success && <Message variant='success'>Profil izmenjen!</Message>}
            {loading && <Loader/>}
            <Form onSubmit={submitHandler} >
                   <Form.Group controlId='ime'>

                        <Form.Label>Vaše ime</Form.Label>
                        <Form.Control 
                        type='ime'
                        placeholder='vase ime..'
                        value={ime}
                        onChange={(e)=>setIme(e.target.value)} >

                        </Form.Control>
                        </Form.Group>
                   <Form.Group controlId='email'>

                        <Form.Label>Email Adresa</Form.Label>
                        <Form.Control 
                        type='email'
                        placeholder='vas email..'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)} >

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
                  
                  

                   <Form.Group controlId='password'>

                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='vas password..'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)} ></Form.Control>
                   </Form.Group>
                   
                   <Form.Group controlId='confirmPassword'>

                        <Form.Label> Potvrdi password</Form.Label>
                        <Form.Control type='password' placeholder='vas password..'
                        value={confirmPassword}
                        onChange={(e)=>setConfirmPassword(e.target.value)} ></Form.Control>
                   </Form.Group>
                    
            <Button className='my-3' type='submit' style={{backgroundColor:'#e70b0b'}} >
                        Update
            </Button>

                   </Form>
           </Col>

           <Col md={4}>
           </Col>
           
        </Row>
    )
}

export default UpdateScreen