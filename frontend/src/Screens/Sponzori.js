import React from 'react'
import { Image } from 'react-bootstrap'
import '../components/menu.css'


const Sponzori = () => {
    
  

 
  return (
    <>
    
     
  <div className="jumbotron novi"  style={{padding:"1rem",marginTop:"3.5rem"}}>
  
  <div className="centriraj">  <img className="img-fluid slika" width="210rem" alt="nEKATO" src="/images/logofa.png"/> </div>
  <div className="centriraj">
    <img src="/images/PHOTO.png" width="177rem" className="img-fluid slika2"  alt="nEKATO"/>
   </div>



    

</div>

<div className=" row my row">

 <div className="col-lg-12 sadrzaj ">
<h2 style={{textAlign: "center",color:"#e70b0b"}}>Naši sponzori</h2>
<p style={{textAlign: "center",margin:"1.4rem 0.4rem"}} >Sponzori koji omogućavaju rad naše akademije i koji su uz nas još od našeg osnivanja.Pogledajte neke detaljnije informacije o njima!</p>
    <div className="sponzor">
<div className="column">
    <div className="card sponz " >
        <Image className="card-img-top" src="images/partner-logo-8.jpg" alt="Card image 2p"></Image>
        <div className="card-body">
        <p className="card-text">Jedan od naših glavnih edukativnih partnera koji nam pomaže u radu sa mladim trenerima.Pogledajte više informacija o njima ovde!</p>
      
        </div>
        <div className="centriraj"> <a  href="https://internationalfootball.academy/news/league-managers-association-and-fcv-academy-announce-partnership/">Pogledaj</a></div> 
      
        </div>

    </div>   

    <div className="column">  
        <div className="card sponz " >
            <Image className="card-img-top" src="images/partner-logo-1.jpg" alt="Card image p"></Image>
            <div className="card-body">
            <p className="card-text">Naš glavni sponzor dresova je Loughborough koledž koji je sa nama već duži niz godina. Pogledajte više informacija o njima!</p>
          
            </div>
            <div className="centriraj"> <a  href="https://www.loucoll.ac.uk/news/fcv-academy-and-loughborough-college-launch-new-partnership">Pogledaj</a></div> 
          
            </div>
        </div> 
        <div className="column">    
            <div className="card sponz" >
                <Image className="card-img-top" src="images/pitsford-logo-2.png" alt="Card image cap"></Image>
                <div className="card-body">
                <p className="card-text">U saradnji sa Pirsford školom omogućili smo našim studentima potrebne literature u internatu.Pogledajte više informacija o njima!</p>
              
                </div>
                <div className="centriraj"> <a  href="https://www.loucoll.ac.uk/news/fcv-academy-and-loughborough-college-launch-new-partnership">Pogledaj</a></div> 
              
                </div>
                             
            </div>
            </div>
 

  </div>
 </div>
    </>
  )
}

export default Sponzori