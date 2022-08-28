import React,{useState,useEffect} from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useParams } from 'react-router'
import {useSelector,useDispatch} from "react-redux"
import {createOcenaPrijave} from '../actions/prijaveactions'
import { CREATE_OCENA_RESET } from '../constants/prijaveConstants'
import Message from '../components/Message'

import { useNavigate} from "react-router-dom"


const OceniScreen = () => {
    const params=useParams()
      const [tehnika,setTehnika]=useState(0)
      const [taktika,setTaktika]=useState(0)
      const [fizika,setFizika]=useState(0)
    const [text,setText]=useState('')

    const navigate=useNavigate()
   
    const [trening,setTrening]=useState('')
    const dispatch=useDispatch()
    console.log(params.id)
    const  oceniti= useSelector(state => state.prijavaOceni)
    const {error:errorOcena,success:successOcena}=oceniti


    useEffect(()=>{
        if(successOcena)
        {
          
          setTehnika(0)
          setTaktika(0)
          setFizika(0)
          setText('')
          setTrening('')

          setTimeout(() =>dispatch({type:CREATE_OCENA_RESET}),3000)
        }
      
    
      
      
      
      },[dispatch,successOcena])

      const izvrsi = () =>{

      navigate(-1);
      }
    const submitHandler= (e)=> {
        e.preventDefault()
        
  dispatch(createOcenaPrijave(params.id,{tehnika,taktika,fizika,text,trening}))

    }
  return (
    <>
    <Row style={{marginTop:"4.5rem",paddingTop:"2rem"}}>
        <Col md={4}>
        <Button onClick={()=>izvrsi()} style={{marginLeft:"4%"}} className='dodaj'>Vrati se</Button>
        </Col>
        <Col md={4}>
            {successOcena && <Message>Uspešno ste ocenili studenta!</Message>}
            {errorOcena && <Message variant="danger">{errorOcena}</Message>}
        <Form onSubmit={submitHandler} >
                   <Form.Group controlId='tehnika'>

                        <Form.Label>Tehnika</Form.Label>
                        <Form.Control 
                        type='Number'
                        placeholder='tehnika..'
                        value={tehnika}
                        onChange={(e)=>setTehnika(e.target.value)} >

                        </Form.Control>
                        </Form.Group>
                   <Form.Group controlId='taktika'>

                        <Form.Label>Taktika</Form.Label>
                        <Form.Control 
                        type='Number'
                        placeholder='taktika..'
                        value={taktika}
                        onChange={(e)=>setTaktika(e.target.value)} >

                        </Form.Control>
                        </Form.Group>
                   <Form.Group controlId='fizika'>

                        <Form.Label>Fizička sprema</Form.Label>
                        <Form.Control 
                        type='Number'
                        placeholder='fizika..'
                        value={fizika}
                        onChange={(e)=>setFizika(e.target.value)} >

                        </Form.Control>
                        </Form.Group>
                   <Form.Group controlId='text'>

                        <Form.Label>Komentar kao pomoć studentu</Form.Label>
                        <Form.Control 
                        type='text'
                        placeholder='..komentar'
                        value={text}
                        onChange={(e)=>setText(e.target.value)} >

                        </Form.Control>
                        </Form.Group>
                   <Form.Group controlId='trening'>

                        <Form.Label>Datum treninga koji se ocenjuje</Form.Label>
                        <Form.Control 
                        type='Date'
                        placeholder='..datum'
                        value={trening}
                        onChange={(e)=>setTrening(e.target.value)} >

                        </Form.Control>
                        </Form.Group>
                   
            <Button className='dodaj'  type='submit' style={{margin:"1rem 0"}} >
                        Dodaj
            </Button>

                   </Form>
        </Col>
         
                   <Col md={4}></Col> 
                   </Row>
    </>
  )
}

export default OceniScreen