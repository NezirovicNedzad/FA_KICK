
import React,{useState,useEffect} from "react"
import {Link} from 'react-router-dom'
import {Form,Button,Row,Col} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message'
import {useNavigate} from "react-router-dom"
import Loader from '../components/Loader'
import { login } from "../actions/korisnikaction"

import FormCont from "../components/FormCont"



const LoginScreen = () => {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [count,SetCount]=useState(0)
  
  
    const dispatch=useDispatch()


    const userLogin = useSelector(state => state.korisnickiLogin)

    const{loading,error,userInfo}=userLogin

    const verifiyUser=useSelector(state=>state.korisniciVerify)
const {success}=verifiyUser

const resetp = useSelector(state => state.korisniciReset)
const{success:successReset}=resetp

const navigate =useNavigate()

  const redirect='/profil'
  useEffect(()=>{


    if(userInfo)
    {
    navigate(redirect)
    }
     
   
  },[userInfo,navigate,redirect,error,count])
  
  
  const submitHandler = (e) =>{
    e.preventDefault()
    SetCount(count+1)
    dispatch(login(email,password))
                             }
    return (
        <FormCont >
            <h1 style={{color:'#e70b0b'}}>Prijavi se</h1>
           {successReset && <Message variant="success">Uspešno ste resetovali lozinku! na sajt!Prijavite se  sa novom lozinkom radi potvrde identiteta!</Message> } 
           {success && <Message variant="success">Uspešno ste registrovani na sajt!Prijavite se još jednom radi potvrde identiteta!</Message> } 
            {error &&  <Message variant='danger'>{error}</Message> }
            {loading && <Loader/>}
            <Form onSubmit={submitHandler} >
                   <Form.Group controlId='email'>

                        <Form.Label>Email Adresa</Form.Label>
                        <Form.Control 
                        type='email'
                        name='email'
                        placeholder='vas email..'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)} >

                        </Form.Control>
                   </Form.Group>

                   <Form.Group controlId='password'>

                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='vas password..'
                        value={password}
                        name='password'
                        onChange={(e)=>setPassword(e.target.value)} ></Form.Control>
                   </Form.Group>
                    <Button className='dugme' type='submit' name='log' >
                        Prijavi se
                    </Button>

                    <Row className='py-3'>
          <Col>
        
          {!success &&( <>Nemate nalog?{' '}
            <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
              Registruj se!
            </Link> </>)}
            {count >=2 ?  <> <Link style={{marginLeft:"20%"}}  to={redirect ? `/forgotPassword?redirect=${redirect}` : '/forgotPassword'}>
              Zaboravili ste password?
            </Link> </> : <></>}
          </Col>
        </Row>
            </Form>
            
        </FormCont>
    )
}

export default LoginScreen
 