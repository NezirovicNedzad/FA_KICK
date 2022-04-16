import React,{useEffect,useState} from 'react'

import {useSelector,useDispatch} from "react-redux"
import { useParams } from 'react-router-dom'
import { Row,Col,Container,Image, ListGroup, Form, Button } from 'react-bootstrap'
import Message from '../components/Message'
import Korisnici from '../components/Korisnici'
import { listKordinatori } from '../actions/korisnikaction';
import {ARHCAMP_CREATE_REVIEW_RESET} from '../constants/arhiviraniCampConstants'
import {ArhCampDetails,createArhReview} from "../actions/arhcampactions"
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'
const ArhiviraniScreen = () => {

   const [rating,setRating]=useState(0)
  
   const [comment,setComment]=useState('')

   const dispatch=useDispatch()

  const  arhcamps = useSelector(state => state.arhiviraniDetails)
  const {loading:loadingArhivirani, error:errorArhivirani,acamp}=arhcamps
  
    const listkordinatora=useSelector(state=>state.korisnickiKordinator)
     const {kordinatori}=listkordinatora
  
     const  rew = useSelector(state => state.arhiviraniReview)
     const {error:errorReview,success:successReview}=rew
   


  const params=useParams()



useEffect(()=>{
  if(successReview)
  {
    alert("Ocena je dodata")
    setRating(0)
    setComment('')
    dispatch({type:ARHCAMP_CREATE_REVIEW_RESET})
  }
  if(errorReview)
  {
  setTimeout(()=>dispatch({type:ARHCAMP_CREATE_REVIEW_RESET}),3000)  
  }

dispatch(listKordinatori()) 
dispatch(ArhCampDetails(params.id))



},[dispatch,params,successReview,errorReview])

const submitHandler = (e) => {
  e.preventDefault()

  dispatch(createArhReview(params.id,{rating,comment}))

}


  return (
    <>
    <>
        <Row style={{marginTop:"2.5rem",paddingTop:"1rem"}}>
        <Col md={9} style={{borderRight:"1px dotted",marginBottom:"0.5rem",padding:"2.4rem"}} >
        {loadingArhivirani ?  <Loader/> : errorArhivirani ? <Message variant="danger">{errorArhivirani}</Message>
       : (
        <>
        
        <Link to='/' style={{marginLeft:"4%"}} className='dodaj'>Vrati se</Link>
        <div style={{marginTop:"2rem"}}  className='RED'>
      <div className='kol3'>
      <h3 style={{color:"#e70b0b",textAlign:"center"}}>{acamp.tip}</h3>
        <Container className="centriraj">
        <Image  className='slika' fluid width="60%" src={acamp.slika} alt="Vaša slika.." />
        </Container>
        <div className="centriraj3" style={{marginBottom:"1rem"}}> <Rating  value={acamp.rating}
               text={`${acamp.numReviews} reviews`} color2="black" color="#f8e825"
                  />
                  </div>
        </div>
<div className='kol3'>
    <Container className="pravi">
   
       <p>Ovo je naš {acamp.tip},ako ste bili učesnik ostavite ocenu i time poboljšajte rad sajta!Kamp je trajao u sledećem vremenskom intrevalu</p>
<p><i className="fas fa-caret-right"></i> <span className="name">Od:</span>{acamp.datum_pocetka}</p>
       <p><i className="fas fa-caret-right"></i><span className="name">Do:</span>{acamp.datum_zavrsetka}</p>
       <p>{acamp.text}</p>
      
       </Container>
       
       </div>


       </div>
      
    



       </>


             

      
        
       )  
      }
   
  
          
                  
 <h3>Ocene</h3>
 {acamp.reviews.length===0 && <Message>Kamp trenutno nije ocenjen!</Message>}

   <ListGroup>

     {acamp.reviews.map(review=>
      
      <ListGroup.Item variant="flush">
        <strong>{review.ime}</strong>
        <Rating  value={review.rating}
                color2="black" color="#f8e825"
                  />
        <p>{review.createdAt.substring(0,10)}</p>
        <p>{review.comment}</p>
        

      </ListGroup.Item>
      )}
      <h2>Unesite ocenu o kampu:</h2>

      <Form onSubmit={submitHandler}>
        {errorReview ? <Message variant="danger">{errorReview}</Message> :
        
        (
          <>
          <Form.Group controlId="rating">
       <Form.Label>Rating</Form.Label>
       <Form.Control as='select'
       value={rating} onChange={(e)=>setRating(e.target.value)}
                         >
           <option value=''>Oceni</option>
           <option value='1'>Loše-1</option>
           <option value='2'>Dovoljan-2</option>
           <option value='3'>Dobro-3</option>
           <option value='4'>Vrlo dobro-4</option>
           <option value='5'>Odlično-5</option>


      </Form.Control>


     </Form.Group>

     <Form.Group>
       <Form.Label>Comment</Form.Label>
       <Form.Control as='textarea' row='3' value={comment} 
       onChange={(e)=>setComment(e.target.value)}
      ></Form.Control>
     </Form.Group>
     <Button type='submit' className="dodaj" >Dodaj</Button>
     </>
        )
        }
     
      </Form>
   </ListGroup>


             </Col>
         

       
             
          

            <Col style={{paddingTop:"2.4rem"}} md={3}>
           
           
 {kordinatori.map(kordinator=>(
    
    kordinator._id===acamp.koordinatorId ?
   
    <Korisnici key={kordinator._id}   kordinatori={kordinator} />
    : <div key={kordinator._id}></div>
   
   
    
    ))}


              </Col>
          
    </Row>
  
   </>          
  </>
  )
}

export default ArhiviraniScreen