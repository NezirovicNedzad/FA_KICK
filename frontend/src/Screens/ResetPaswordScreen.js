
import React,{useState,useEffect} from "react"

import {Form,Button,Row,Col} from 'react-bootstrap'
import {useDispatch,useSelector,} from 'react-redux'
import Message from '../components/Message'
import queryString from 'query-string'

import { useNavigate,useLocation} from "react-router-dom"
import { ResetPassword } from "../actions/korisnikaction"

import Loader from '../components/Loader'



import './profil.css'
import axios from "axios"



const baseUrl='http://localhost:5001'
const ResetPasswordScreen = () => {

    

    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
  
  const location=useLocation()
 


    const[message,setMessage]=useState(null)
    const dispatch=useDispatch()

    const [invalidUser,setInvalidUser]=useState(false)
    const resetp = useSelector(state => state.korisniciReset)
    const{loading,error,success}=resetp

    
   const navigate=useNavigate()


  
   const {token,id}=queryString.parse(location.search)
   const verifyToken =async ()=>{
              try {
                const {token,id}=queryString.parse(location.search)
                
              const {data}=await axios(`${baseUrl}/api/korisnici/verify-token?token=${token}&id=${id}`)
               
              if(!data.success) return setInvalidUser(true)
              
              } catch (error) {
                if(error?.response?.data)
                {
                  const {data}=error.response
                  if(!data.success) return setInvalidUser(true)
                  return console.log(error.response.data)
                }
                console.log(error)
              }
                
                }

 
  
  
     useEffect(()=>{

    verifyToken()

    if(success)
    {
      navigate('/login')
    }
 //
    
    
  })
  
 
  
  const submitHandler = (e) =>{
    e.preventDefault()
    if(password!==confirmPassword)
    {
     setMessage("Šifre nisu iste!")
      
    }
    else
    {
      setMessage("")
 dispatch(ResetPassword(password,token,id))

    
    }

                }


    return (


     <>
     {invalidUser ? <div style={{textAlign:"center",marginTop:"4.7rem",height:"28rem",padding:"2rem"}}><h1>Reset Token Not Found</h1></div> : <>
     
     <Row className="drugi" style={{height:"28rem",padding:"2rem"}} >
           <Col  md={4}>
</Col>          
<Col md={4}>
         
           <h1 style={{color:'#e70b0b'}}>Resetuj šifru</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {success && <Message variant='success'>Profil izmenjen!</Message>}
            {loading && <Loader/>}
            <Form onSubmit={submitHandler} >
                   
                  

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
                    
            <Button className='dodaj' type='submit' style={{margin:"1rem 0"}} >
                        Resetuj
            </Button>

                   </Form>
           </Col>

           <Col md={4}>
           </Col>
           
        </Row>
     </>}

     </>
       
    )
}

export default ResetPasswordScreen