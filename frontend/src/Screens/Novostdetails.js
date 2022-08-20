import React,{useEffect} from 'react';
import { NovostiDetails,listNovosti } from '../actions/novostactions';
import { useParams } from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux"
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Link } from 'react-router-dom';


const Novostdetails = () => {


    const dispatch=useDispatch()
    const novosti2=useSelector(state=>state.novostDetails) 
    const   {loading:loadingNovost,errorNovost,novost}=novosti2

    const novostiList=useSelector(state=>state.novostList)

    const{loading,error,novosti}=novostiList


    const params=useParams()


    useEffect (()=>{

              dispatch(NovostiDetails(params.id))
              dispatch(listNovosti())
        
      },[dispatch,params])
  return <>
  
  <div className="jumbotron novi"  style={{padding:"1rem",marginTop:"3.7rem"}}>
  
  <div className="centriraj">  <img className="img-fluid slika" width="210rem" alt="nEKATO" src="../images/logofa.png"/> </div>
  <div className="centriraj">
    <img src="../images/photo.png" width="177rem" className="img-fluid slika2"  alt="nEKATO"/>
   </div>



    

</div>

<div className=" myrow">
{loadingNovost ? <Loader></Loader> : errorNovost ? <Message variant="danger">{errorNovost}</Message> :

(


    <>

    <div className="sadrzaj ">

    <h3 style={{padding:"1rem 0",color:"#e70b0b"}}>
     {novost.naslov}
    </h3>
    <p>{novost.uvod}</p>
    
    
    
   <img src={novost.slika} className="img-fluid "  style={{width:'65%'}} alt="nesto" />
  
      
    <h5 style={{marginTop:"2.4rem",color:"#e70b0b"}}> 
      {novost.kratkitext}
      </h5>

      { novost.citat ? <><p style={{backgroundColor:"lightgray",fontFamily:"cursive",padding:"1rem"}}>"{novost.citat}"</p></> : <></>}
  
  
  
      
  
  
  
   <p style={{padding:"1rem 0"}}> 
    {novost.text}
   </p>
  
  
    </div>
   <div className="sidebar">
    <h3>O Akademiji </h3>
    
   
  
   <p>Saznaj vise o akademiji :</p>
  
   <ul >
  
    <li>
      <i className="fas fa-caret-right"></i>
      <Link to="/">Nase poreklo</Link>
    </li>
    <li>
      <i className="fas fa-caret-right"></i>
      <Link to="/">Kontakt</Link>
    </li>
    <li>
      <i className="fas fa-caret-right"></i>
      <Link to='/'>Naši sponzori</Link>
    </li>
    <li>
      <i className="fas fa-caret-right"></i>
      <Link to='/'>Poseti naše trenazne objekte</Link>
    </li>
    <li>
      <i className="fas fa-caret-right"></i>
      <Link to='/'>Kovid protokoli</Link>
    </li>
  
   </ul>
  
   <h3 style={{padding:"1.2rem 0",textAlign:"center"}}> Novosti</h3>
   <p
         style={{padding:"1.2rem 0"}}>
    Novosti se tiču nekih rezultata full time selekcije akademije kao i neke vesti vezane za samo odvijanje rada Akademije.</p>
  
  
   {loading? <Loader></Loader> : error ? <Message variant='danger'>{error}</Message> : <> {novosti.map(novost2=> (
  
        <div key={novost2._id}>
        {novost2._id!==novost._id ? <div key={novost2._id}>
        
          <h4>{novost2.naslov}</h4>
<div className="card" >

<img className='card-img-top' src={`../${novost2.slika}`} alt='Nesto' />

<div className="card-body">
<p className="card-text">{novost2.kratkitext}</p>

</div>
<div className="centriraj"> <Link to={`/novosti/${novost2._id}`}>Pogledaj</Link></div> 
</div>
        
        </div> :<div key={novost2._id}></div> }

        </div>


  ))
  
  
  }
  </>
  }
   
    
  
  
  
  
    </div>
    </>
)

}
    




</div>
  
  </>;






  
};

export default Novostdetails;
