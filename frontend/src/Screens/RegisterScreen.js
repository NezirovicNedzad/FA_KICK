
import React,{useState,useEffect} from "react"
import {Link} from 'react-router-dom'
import {Form,Button,Row,Col} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message'
import {useNavigate} from "react-router-dom"
import Loader from '../components/Loader'
import { register } from "../actions/korisnikaction"
import FormContainer from "../components/FormContainer"
import axios from "axios"
import  './profil.css'



const RegisterScreen = () => {

    const [ime,setIme]=useState('')
    const [email,setEmail]=useState('')
    const [brgod,setbrgod]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [pozicija,setPozicija]=useState('')
    const [uploading,setUploading]=useState(false)
   
    const [slika,setSlika]=useState('')

    const[message,setMessage]=useState('')
  
    const dispatch=useDispatch()


    const userRegister = useSelector(state => state.korisnickiRegister)

    const{loading,error,success:successRegister,userInfo}=userRegister
 const navigate =useNavigate()
 
  const redirect='/profil'
  useEffect(()=>{


    if(userInfo)
    {
    navigate(redirect)
    }
    if(successRegister)
    {
     navigate('/login/verify-email')
    }
  },[userInfo,navigate,redirect,successRegister])
  
  
  const submitHandler = (e) =>{
    e.preventDefault()

   if(password!==confirmPassword)
   {
       setMessage('Šifre nisu iste!')
   }
   else
   {
   
     
dispatch(register(ime,email,password,slika,brgod,pozicija))
          
     
   
   }
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
        <FormContainer >
            <h1 style={{color:'#e70b0b'}}>Registruj se</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
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
                   <Form.Group controlId='brgod'>

                        <Form.Label>Broj godina</Form.Label>
                        <Form.Control 
                        type='Number'
                        placeholder='vas brojgodina..'
                        value={brgod}
                        onChange={(e)=>setbrgod(e.target.value)} >

                        </Form.Control>
                   </Form.Group>
                   <Form.Group controlId='pozicija'>

                        <Form.Label>Pozicija</Form.Label><br></br>
                        <Form.Select className="custom-select"  onChange={(e)=>setPozicija(e.target.value)} >
                         <option></option>
                         <option value="Golman" >Golman</option>
                         <option value="Bek" >Bek</option>
                         <option value="Štoper">Štoper</option>
                         <option value="Vezni">Vezni</option>
                         <option value="Krilni napadač">Krilni napadač</option>
                         <option value="Špic">Špic</option>
                         </Form.Select>
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
                    <Button className='dugme' type='submit'  >
                    Registruj se!
                    </Button>

                    <Row className='py-3'>
          <Col>
            Već imate nalog?{' '}
            <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
              Prijavite se!
            </Link>
          </Col>
        </Row>
            </Form>
            
        </FormContainer>
    )
}

export default RegisterScreen