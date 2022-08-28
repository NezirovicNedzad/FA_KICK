import React,{useEffect} from 'react'


import {useDispatch} from "react-redux"

import CarouselZaKampove from '../components/CarouselZaKampove';
import KampoviSredina from '../components/KampoviSredina';
import SimpleSlider from '../components/OwlCarousel'
 import './profil.css'
const Kampovi = () => {

    const dispatch=useDispatch();

  
    useEffect( () =>{
  
    
  } ,[dispatch])
    return (
        <>
      <CarouselZaKampove/>
      <div className="jumbotron novi"  style={{padding:"1rem"}}>
  
  <div className="centriraj">  <img className="img-fluid slika" width="210rem" alt="nEKATO" src="images/logofa.png"/> </div>
  <div className="centriraj">
    <img src="images/PHOTO.png" width="177rem" className="img-fluid slika2"  alt="nEKATO"/>
   </div>



    

</div>

      <KampoviSredina/>
      <SimpleSlider/>         
        </>
    )
}

export default Kampovi
