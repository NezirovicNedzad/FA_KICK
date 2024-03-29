import React ,{useEffect,useState}from "react";

import Slider from "react-slick";
import Kartica from "./Kartica"; 
import Message from "./Message";
import Loader from "./Loader";
import Rating from "./Rating";
import './menu.css'
import {useSelector,useDispatch} from "react-redux"
import {listCamps} from "../actions/campactions"
import { listArhCamps } from "../actions/arhcampactions";
import Kartica2 from "./Kartica2";
import { useParams } from "react-router";

import Modals from "./Modals";

import { Button } from "react-bootstrap";



const  SimpleSlider =() => {


  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');


  const params=useParams()
  const keyword=params.keyword
  const vrsta1=params.vrsta1;
  const vrsta2=params.vrsta2;
  const vrsta3=params.vrsta3;
  const minCena=params.minCena;
const maxCena=params.maxCena;




  const dispatch=useDispatch();

const tipovi=[];
const cene=[]
  const[openModal,setOpenModal]=useState(false)

  const  campsList = useSelector(state => state.campList)
   
  const {loading, error,camps}=campsList

  const  arhcampsList = useSelector(state => state.arhiviraniList)
   
  const {loading:loadingArhivirani, error:errorArhivirani,acamps}=arhcampsList

  const userLogin = useSelector(state => state.korisnickiLogin)


  



  const{userInfo}=userLogin





  useEffect( () =>{
    dispatch(listCamps(vrsta1,vrsta2,vrsta3,minCena,maxCena))
    dispatch(listArhCamps())
  
} ,[dispatch,vrsta1,vrsta2,vrsta3,minCena,maxCena])

    const settings = {
   
      
      infinite:true,
      loop:true,
      arrows: false,
      speed: 650,
      slidesToShow: 3,
      autoplay:true,
      autoplayTimeout:7000,
 
      dots:true,
     
      responsive: [
   
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            
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
      <div className="container-fluid sektor"  id="sektor" style={{backgroundImage:'url(/images/fcv-background-1.jpg)'}}>
    
        <h4 >Pogledajte sve nase kampove</h4>
     
{
  camps.length<3 ? <>


  
   <div style={{display:"flex",justifyContent:"right"}}><Button id="d22"  style={{backgroundColor:"#e70b0b"}} onClick={()=>{setOpenModal(true)}} >Pretražite <i style={{marginLeft:"0.6rem"}} className="fa-solid fa-magnifying-glass"></i></Button></div>
      <div style={{display:"flex",justifyContent:"center"}}>
     {openModal ? <Modals closeModal={setOpenModal} cene={cene}  tipovi={tipovi} 
     
     /> : null}
        </div> 
        {camps.length===0 && !loading && <div style={{textAlign:"center",color:"white",fontSize:"1.3rem"}}><p>Nema podudaranja sa pretragom!</p></div>}
  <div className="redovi">

    {  loading ? <Loader></Loader>  : error ? <Message variant='danger'>{error}</Message>:
   
   
   camps.map(camp => (
    
<div key={camp._id} style={{maxWidth:"40%"}} className="kol32">
<Kartica   camps={camp}/>
</div>
))}
  </div>
  </> : <>
  
  
       <>
       <div style={{display:"flex",justifyContent:"right"}}><Button id="d22" style={{backgroundColor:"#e70b0b"}} onClick={()=>{setOpenModal(true)}} >Pretražite <i style={{marginLeft:"0.6rem"}} className="fa-solid fa-magnifying-glass"></i></Button></div>
      <div style={{display:"flex",justifyContent:"center"}}>
     {openModal ? <Modals closeModal={setOpenModal} tipovi={tipovi} cene={cene} /> : null}
        </div> 
       <Slider  {...settings}  >
      
  {loading? <Loader></Loader>  : error ? <Message variant='danger'>{error}</Message>:
 
 camps.map(camp => (
  
   <Kartica key={camp._id} camps={camp}/>

  
   
 ))}


        </Slider> 
        </>

  </>
}


{ userInfo && !userInfo.isKordinator && userInfo.verified ? <div style={{marginTop:"1rem"}}>
  <h4 >Ocenite neke od naših prethodnih kampova </h4>


  {acamps.length<3 ? <>
  <div className="redovi">
   {acamps.map(acamp => (
<div key={acamp._id} style={{maxWidth:"43%"}} className="kol32">

   <Kartica2 key={acamp._id} camps={acamp} />
    
      
</div>
))}
  </div>
  </> : <>
  
  {loadingArhivirani? <Loader></Loader>  : errorArhivirani ? <Message variant='danger'>{errorArhivirani}</Message>:
     
    <Slider  {...settings}  >
    
 {acamps.map(acamp => (
   
   <Kartica2 key={acamp._id} camps={acamp}/>

 
      
    

 ))}


        </Slider> 
}
  </>}
  </div> : <> </>
}

       
      </div>
    );
  }


  Rating.defaultProps ={
    color:'#f8e825'
}
  Rating.defaultProps ={
    color2:'white'
}


export default SimpleSlider
