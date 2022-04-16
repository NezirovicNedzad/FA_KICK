import React,{useEffect} from 'react';

import {Link} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import Loader from './Loader'
import Message from './Message'

import '../Screens/profil.css'
import {useSelector,useDispatch} from "react-redux"
import {listCamps} from "../actions/campactions"

const CarouselZaKampove = () => {

    const dispatch=useDispatch();

    const  campsList = useSelector(state => state.campList)
     
    const {loading, error,camps}=campsList

    useEffect( () =>{
        dispatch(listCamps())
      
    } ,[dispatch])



  return (  
  <>
  <Carousel fade>

      {camps.map( kamp=>(

loading ? <Loader></Loader> : error ? <Message variant="danger">{error}</Message> :
<Carousel.Item key={kamp._id}>
<img
  className="d-block w-100 fluid"
  src={kamp.slika}
  alt="First slide"
/>
<Carousel.Caption>
  
  <h3>{kamp.opis}</h3>
  
  <h5 style={{color:"white",marginBottom:"2rem"}}>Upoznajte se detaljnije sa radom ovog kamp-a! </h5>
  <Link to={`/kamp/${kamp._id}`} style={{color:"white",textDecoration:"none"}}  className='dodaj'>
       Pogledaj
  </Link>
</Carousel.Caption>
</Carousel.Item>

      ))}
 
</Carousel>
</>
)

};

export default CarouselZaKampove;
