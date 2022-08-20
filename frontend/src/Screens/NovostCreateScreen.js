import React,{useState,useEffect} from 'react';
import {Form,Button,Row,Col} from 'react-bootstrap'
import {useDispatch,useSelector,} from 'react-redux'
import Message from '../components/Message'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

import Loader from '../components/Loader'

import { novostiKreiraj} from '../actions/novostactions';
import { NOVOST_CREATE_RESET } from '../constants/novostConstants';

const NovostCreateScreen = () =>{


    const [naslov,setNaslov]=useState('')

    const [uvod ,setUvod]=useState('')
    const [kratkitext,setKratkiText]=useState('')
    const [citat,setCitat]=useState('')
   const [text,setText]=useState('')
    const [slika,setSlika]=useState('')
    const [uploading,setUploading]=useState(false)

    const[message,setMessage]=useState(null)
 
    const dispatch=useDispatch()


    const  kreiraj= useSelector(state => state.novostCreate)
    const{loading:loadingCreate,error:errorCreate,success:successCreate,novost}=kreiraj



    const userLogin = useSelector(state => state.korisnickiLogin)
    const {userInfo}=userLogin

  
    
   const navigate=useNavigate()

  
  
     useEffect(()=>{


    if(!userInfo)
    {
  navigate('/login')
    }
    else{
       if(successCreate)
        {
              dispatch({

               type:NOVOST_CREATE_RESET
              })
              navigate('/admin/listanovosti')

       
        }
   

    }
  },[userInfo,navigate,novost,dispatch,successCreate])
  
 
  
  const submitHandler = (e) =>{
    e.preventDefault()
    const naslov=document.getElementById('naslov').value
    const kratkitext=document.getElementById('kratkitext').value
    const text=document.getElementById('text').value
    const slika=document.getElementById('slika').value
    
    if(naslov==='' && kratkitext==='' && text==='' && slika==='')
    {
     setMessage('Sva polja moraju biti popunjena!')
     setTimeout(() => {
       
          setMessage('')
     }, 3000);    
    }
    else
    {
           dispatch(novostiKreiraj(naslov,uvod,kratkitext,citat,slika,text))
    }



                             }

   const vrati =() =>{

 
      navigate('/admin/listanovosti')
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
           <Col  md={4}>
</Col>          
<Col md={4}>
           <Button onClick={vrati} className="dugme" style={{margin:"1.3rem 0",backgroundColor:"black"}} >Vrati se</Button>
           <h1 style={{color:'#e70b0b'}}>Novost</h1>
           
            {loadingCreate && <Loader></Loader>}
            {errorCreate && <Message variant="danger">{errorCreate}</Message>}
            {message && <Message variant="danger">{message}</Message>}
            <Form onSubmit={submitHandler} >
                   <Form.Group controlId='naslov'>

                        <Form.Label>Naslovi</Form.Label>
                        <Form.Control 
                        type='text'
                        placeholder='naslov..'
                        value={naslov}
                        onChange={(e)=>setNaslov(e.target.value)} >

                        </Form.Control>
                        </Form.Group>
                   <Form.Group controlId='uvod'>

                        <Form.Label>Uvod</Form.Label>
                        <Form.Control 
                        type='text'
                        placeholder='uvod..'
                        value={uvod}
                        onChange={(e)=>setUvod(e.target.value)} >

                        </Form.Control>
                        </Form.Group>
                   <Form.Group controlId='kratkitext'>

                        <Form.Label>Kraci opis</Form.Label>
                        <Form.Control 
                        type='text'
                        placeholder='vas opis..'
                        value={kratkitext}
                        onChange={(e)=>setKratkiText(e.target.value)} >

                        </Form.Control>
                   </Form.Group>
                   <Form.Group controlId='citat'>

                        <Form.Label>Citat</Form.Label>
                        <Form.Control 
                        type='text'
                        placeholder='vas opis..'
                        value={citat}
                        onChange={(e)=>setCitat(e.target.value)} >

                        </Form.Control>
                   </Form.Group>
                   <Form.Group controlId='slika'>

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
                   <Form.Group controlId='text'>

                    <Form.Label>Duzi opis:</Form.Label>
                    <Form.Control type='text' as="textarea" style={{minHeight:"7rem"}} placeholder='datum zavrsetka..'
                    value={text}
                    onChange={(e)=>setText(e.target.value)} ></Form.Control>
                    </Form.Group>


                  

                    
            <Button className='dugme' type='submit' style={{backgroundColor:'#e70b0b',margin:"2rem 0"}} >
                        Kreiraj
            </Button>

                   </Form>
           </Col>

           <Col md={4}>
           </Col>
           
        </Row>
    )
}



export default NovostCreateScreen;
