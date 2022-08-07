import React ,{useEffect}from "react";
import Slider from "react-slick";

import Message from "./Message";
import Loader from "./Loader";
import Rating from "./Rating";
import './menu.css'
import {useDispatch,useSelector} from "react-redux"



import KarticaZaOcene from "./KarticaZaOcene";


const  SliderOcena =({prijava,error,loading,success}) => {




  const dispatch=useDispatch();
  const userLogin = useSelector(state => state.korisnickiLogin)

  const{userInfo}=userLogin


  useEffect( () =>{
  
  
} ,[dispatch])

    const settings = {
   
      
      infinite:true,
      loop:true,
      arrows: false,
      speed: 650,
      slidesToShow: 1,
      
 
      dots:true,
     
      responsive: [
   
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
            arrows: false,
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        }
      ]
  
    }
    return (
      <div className="container-fluid sektor"  id="sektor" style={{backgroundImage:'url(/images/fcv-background-1.jpg)'}} >
        {success && <Message variant='success'>Uspešno ste uklonili ocenu!</Message>}
    
      {userInfo.isKordinator===true ? <h4 >Pogledajte sve ocene koje ste dali ovom članu  </h4> : <h4 >Pogledajte sve vaše ocene</h4>}  
        <Slider  {...settings}  >
        {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader/>}
 {prijava.ocene.reverse().map(ocena => (
  
   <KarticaZaOcene key={ocena._id} ocena={ocena} idOcene={ocena._id} idPrijave={prijava._id} success={success} />

  
   
 ))}
   
   </Slider>        
      </div>
    );
  }


  Rating.defaultProps ={
    color:'#f8e825'
}
  Rating.defaultProps ={
    color2:'white'
}


export default SliderOcena
