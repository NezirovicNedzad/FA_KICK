import React,{useState,useEffect} from "react"

import { Button, Form,Col,Row} from 'react-bootstrap'
import {useSelector,useDispatch} from "react-redux"
import {Verify} from '../actions/korisnikaction'
import Loader from "../components/Loader"
import Message from "../components/Message"
import { useNavigate } from "react-router-dom"

const VerifyScreen = () => {
  
  
  
  const [otp,setOtp]=useState('')

  const dispatch=useDispatch()
  const navigate=useNavigate()

const verifiyUser=useSelector(state=>state.korisniciVerify)
const {loading,success,error}=verifiyUser

const userLogin = useSelector(state => state.korisnickiLogin)
const {userInfo}=userLogin

useEffect(()=>{

 if(success)
 {

   navigate('/login')
 }
},[success,navigate,dispatch])

    const submitHandler = (e) => {
    
     e.preventDefault()
     dispatch(Verify(userInfo._id,otp))
     
    
        }
        
  return (
    <div style={{height:"50rem",marginTop:"7rem"}}>

<Row>


  <Col md={3}></Col>
  <Col md={6}>
  <div className="jumbotron novi"  style={{padding:"1rem"}}>
  
  <div className="centriraj">  <img className="img-fluid slika" width="210rem" alt="nEKATO" src="/images/logofa.png"/> </div>
  <div className="centriraj">
    <img src="/images/PHOTO.png" width="177rem" className="img-fluid slika2"  alt="nEKATO"/>
   </div>



    

</div>
            <h3 style={{color:'#e70b0b'}}>Verifikuj nalog uz kod koji vam je poslat na emai!</h3>
           
            {loading && <Loader></Loader>}
            {error && <Message variant='danger'>{error}</Message>}
            
            <Form onSubmit={submitHandler} >
                   <Form.Group controlId='otp'>

                        <Form.Label style={{fontSize:"1.2rem"}}>Unesite kod</Form.Label>
                        <Form.Control 
                        type='Number'
                        placeholder='vase ime..'
                        value={otp}
                        onChange={(e)=>setOtp(e.target.value)} >

                        </Form.Control>
                   </Form.Group>
                  <div className="centriraj"><Button  className='dugme' type='submit'>
                    Verifikuj
                    </Button>
</div> 
            </Form>
            
       
  </Col>
  <Col md={3}></Col>
</Row>


    </div>
  )
}

export default VerifyScreen