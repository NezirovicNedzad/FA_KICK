import React,{useState,useEffect} from "react"

import { Button, Form,Col,Row} from 'react-bootstrap'
import {useSelector,useDispatch} from "react-redux"

import Loader from "../components/Loader"
import Message from "../components/Message"
import { useNavigate } from "react-router-dom"
import { forgotPassword } from "../actions/korisnikaction"
import './profil.css'

const ForgetScreen = () => {
  
  
  
  const [email,setEmail]=useState('')

  const dispatch=useDispatch()
  const navigate=useNavigate()

const forgot=useSelector(state=>state.korisniciForgot)
const {loading,success,error}=forgot



useEffect(()=>{

 
},[success,navigate,dispatch])

    const submitHandler = (e) => {
    
     e.preventDefault()
     dispatch(forgotPassword(email))
     
    
        }
        
  return (
    <div className="prv" style={{height:"50rem",marginTop:"8rem"}}>

<Row>


  <div className="lefcol"></div>
  <div className="rightcol">
  <div className="jumbotron novi"  style={{padding:"1rem"}}>
  
  <div className="centriraj">  <img className="img-fluid slika" width="210rem" alt="nEKATO" src="/images/logofa.png"/> </div>
  <div className="centriraj">
    <img src="/images/PHOTO.png" width="177rem" className="img-fluid slika2"  alt="nEKATO"/>
   </div>



    

</div>
            <h3 style={{color:'#e70b0b'}}>Unesite vaš email da bi došli do linka za reset passworda!</h3>
           
            {loading && <Loader></Loader>}
            {error && <Message variant='danger'>{error}</Message>}
            {success && <Message variant='success'>Uspesno je poslan mail!Udjite na link koji vam je poslat na mail da bi sigurno promenili lozinku!</Message>}
            
            <Form onSubmit={submitHandler} >
                   <Form.Group controlId='email'>

                        <Form.Label style={{fontSize:"1.2rem"}}>Email</Form.Label>
                        <Form.Control 
                        type='text'
                        placeholder='vase email..'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)} >

                        </Form.Control>
                   </Form.Group>
                  <div className="centriraj"><Button  className='dugme' type='submit'>
                   Resetuj
                    </Button>
</div> 
            </Form>
            
       
  </div>
  <div className="right2col"></div>
</Row>


    </div>
  )
}

export default ForgetScreen