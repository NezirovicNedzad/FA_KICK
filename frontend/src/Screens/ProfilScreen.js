
import React,{useEffect} from "react"

import {Image,Button,Row,Col, Container} from 'react-bootstrap'
import {useDispatch,useSelector,} from 'react-redux'
import Message from '../components/Message'
import { useNavigate } from "react-router-dom"
import Loader from '../components/Loader'
import {getKorisnickiDetalji } from "../actions/korisnikaction"
import {listPrijave } from "../actions/prijaveactions"
import{listKordinatori} from  '../actions/korisnikaction'
import {listCamps} from '../actions/campactions'
import './profil.css'
import { Link } from "react-router-dom"






const ProfilScreen = () => {




    const dispatch=useDispatch()


    const userDetails = useSelector(state => state.korisnickiDetalji)
    const{loading,error,user}=userDetails

    const userLogin = useSelector(state => state.korisnickiLogin)
    const {userInfo}=userLogin

    const prijavelist = useSelector(state => state.prijaveList)
    const {loading:loadingList,error:errorList,prijave}=prijavelist

   
     const  campsList = useSelector(state => state.campList)
      const {loading:loadingCamps, error:errorCamps,camps}=campsList

    const kordintoriSvi = useSelector(state => state.korisnickiKordinator)
    const{kordinatori}=kordintoriSvi

   

    
    const navigate=useNavigate()
  
   
     useEffect(()=>{


    if(!userInfo || !userInfo.verified)
    {
 navigate('/login')
    }
    else{

        
        if(!user.ime)
        {
            dispatch(getKorisnickiDetalji('profil'))
        }
        if(userInfo.isKordinator)
        {
          dispatch(listCamps())
        }
        else{
        dispatch(listPrijave())
        dispatch(listKordinatori())
        }
    
       
    }
  },[userInfo,user,dispatch,navigate])
 

  function pronadji(prijave)
  {

      return prijave.korisnikId===userInfo._id
  }

  const promeni =() => {

navigate('/profil/update')
  }

                             
    return (

            <>
            {user.isAdmin ? <>
              <Row style={{marginTop:"9rem"}}>
                <Col></Col>
                <Col>
                
                
            {loading ?  <Loader/> : error ? <Message variant='danger'>{error}</Message> : (<> <h3 style={{textAlign:"center"}}>{user.ime}</h3>

<Container className="centriraj">
     <Image roundedCircle fluid width="40%" src={user.slika} alt="Vaša slika.." />
    

</Container>
<Container className="centriraj">
<p>Admin</p> 


</Container>

<Container className="podaci">

<p><span className="name">Email:</span>{user.email}</p>
</Container>




<Container className="podaci">
<p><span className="name">Godine:</span>{user.brgod}</p>
</Container>


<Container className="centriraj">
<Button className="dodaj" onClick={promeni}>Promeni</Button>
</Container>
            
            
            </>)}
      
                
                </Col>
                <Col></Col>
                </Row>
            
            
            </> : user.isKordinator ?<>
            
            
            <div className="cont" style={{marginTop:"7rem"}}>
             
             <div className="leftrow">
             {error && <Message variant='danger'>{error}</Message>}
              {loading && <Loader/>}
             <h3>{user.ime}</h3>
  
             <Container className="centriraj">
                  <Image roundedCircle fluid width="60%" src={user.slika} alt="Vaša slika.." />
                 
  
             </Container>
  <Container className="centriraj">
             {user.isKordinator ? <p>Trener</p> :<>Igrač</>}
  
           
             </Container>
  
  <Container className="podaci">
  
       <p><span className="name">Email:</span>{user.email}</p>
       </Container>
  
       
         {user.isKordinator  ?  <></> : 
         <Container className="podaci">
         <p><span className="name">Pozicija:</span>{user.pozicija}</p>
         
         </Container>
         }
         {user.isKordinator ? 
         <Container className="podaci">
         <p><span className="name">Trenerska licenca:</span>{user.licenca}</p>
         </Container> : <></>
        
        
        }
        
         <Container className="podaci">
  <p><span className="name">Godine:</span>{user.brgod}</p>
  </Container>
  
  
  <Container className="centriraj">
             <Button className="dodaj" onClick={promeni}>Promeni</Button>
             </Container>
             </div>
  
             <div className="rightrow" >
               <h3 style={{textAlign:"center"}}>Kampovi</h3>
               <br></br>
               {userInfo.isAdmin ? <></> : userInfo.isKordinator ? <h5 style={{textAlign:"center"}}>Lista kamova na kojima ste kordinator</h5>
               :  <h5 style={{textAlign:"center"}}>Lista kamova na kojima ste prijavljeni</h5>}


{loadingCamps ? <Loader></Loader> : errorCamps ? <Message variant="danger">{errorCamps}</Message> :

   (

            camps.map(camp=>
              
              camp.koordinatorId===userInfo._id ? 

              (
                <div style={{border:"1px solid black"}} className="prijava" key={camp._id}>
                <div  className="RED">
                  <div className="kol3">
                   <h4 style={{textAlign:"center"}}>{camp.tip}</h4>
               <div className="centriraj"><Image className="slika" height="220rem"  width="85%"  src={camp.slika}/></div>
                  </div>
                  <div className="kol3">

                   <div className="text">
                  <p style={{marginBottom:"0.4rem"}}><span className="name">Datum pocetka:</span>{camp.datum_pocetka}</p><br></br>
                  <p style={{marginBottom:"0.4rem"}}><span className="name">Datum zavrestka:</span>{camp.datum_zavrsetka}</p><br></br>
                  

                   <br></br>
                  </div>
                  </div>
                  <div className="kol3">
                  <div className="text">
                  <p style={{marginBottom:"0.4rem"}}><span className="name">Opis:</span>{camp.opis}</p><br></br>
                  <span className="name">Podelite ocene vašim igračima u zavisnosti od zalaganja na kampu:</span><br></br>
                    <div className="centriraj"> <Link  className="dodaj" to ={`/kamp/prijave/${camp._id}`} >Pogledaj</Link> </div>


                  </div>
                  
                  </div>
                 
           
              
              
              </div>
              
              </div>

                  

              ) : <div key={camp._id}></div>
              
              )



   )



      }
         
             </div>
             
          </div>
            
            
            
            
            
            
            </> : <>
            
              <div className="cont" style={{marginTop:"7rem"}}>

             
           <div className="leftrow" >
           {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader/>}
           <h3>{user.ime}</h3>

           <Container className="centriraj">
                <Image roundedCircle fluid width="60%" src={user.slika} alt="Vaša slika.." />
               

           </Container>
<Container className="centriraj">
           {user.isKordinator ? <p>Trener</p> :<>Igrač</>}

         
           </Container>

<Container className="podaci">

     <p><span className="name">Email:</span>{user.email}</p>
     </Container>

     
       {user.isKordinator  ?  <></> : 
       <Container className="podaci">
       <p><span className="name">Pozicija:</span>{user.pozicija}</p>
       
       </Container>
       }
       {user.isKordinator ? 
       <Container className="podaci">
       <p><span className="name">Trenerska licenca:</span>{user.licenca}</p>
       </Container> : <></>
      
      
      }
      
       <Container className="podaci">
<p><span className="name">Godine:</span>{user.brgod}</p>
</Container>


<Container className="centriraj">
           <Button className="dodaj" onClick={promeni}>Promeni</Button>
           </Container>
           </div>

           <div className="rightrow" >
             <h3 style={{textAlign:"center"}}>Kampovi</h3>

            
             <br></br>
             {userInfo.isAdmin ? <></> : userInfo.isKordinator ? <h5 style={{textAlign:"center"}}>Lista kamova na kojima ste kordinator</h5>
             :  <h5 style={{textAlign:"center"}}>Lista kamova na kojima ste prijavljeni</h5>}



             {prijave.find(pronadji)===undefined ?<h5 style={{textAlign:"center",margin:"5rem 0"}}>Trenutno niste prijavljeni ni na jedan kamp!Pogledajte kampove koje nudimo <Link style={{color:'red'}} to='/kampovi'>ovde.</Link></h5> : <></> 
              
            }
             
             {loadingList ? <Loader></Loader> : errorList ? <Message variant="danger">{errorList}</Message> :
             
             prijave.map(prijava=>

            prijava.korisnikId===userInfo._id ?
              
              <div className="prijava"  style={{border:"1px solid black"}} key={prijava._id}>
                <div className="RED">
                  <div className="kol3">
                   <h4 style={{textAlign:"center"}}>{prijava.tip}</h4>
               <div className="centriraj"><Image className="slika" height="220rem"  width="85%"  src={prijava.slika}/></div>
                  </div>
                  <div className="kol3">

                   <div className="text">
                  <p style={{marginBottom:"0.4rem"}}><span className="name">Datum pocetka:</span>{prijava.datum_pocetka}</p><br></br>
                  <p style={{marginBottom:"0.4rem"}}><span className="name">Datum zavrestka:</span>{prijava.datum_zavrsetka}</p><br></br>
               <span className="name">Koordinator:</span>{kordinatori.map(kordinator=>
                    
                    kordinator._id===prijava.koordinatorId && (

                      <p key={kordinator._id}>{kordinator.ime}</p>
                    )

                    
                    )} <br></br>
                  </div>
                  </div>
                  <div className="kol3">
                  <div className="text">
                  <p style={{marginBottom:"0.4rem"}}><span className="name">Opis:</span>{prijava.text}</p><br></br>
                  <span className="name">Pogledajte nove informacije i vaše ocene na kampu:</span><br></br>
                    <div className="centriraj"> <Link  className="dodaj" to ={`/profil/prijave/${prijava._id}/${prijava.kampId}`} >Pogledaj</Link> </div>


                  </div>
                  
                  </div>
                 
           
              
              
              </div>
              
              </div> :<div key={prijava._id}></div>
            
              
              )}
           </div>
           
        </div>
            
            
            </>}
            
            </>    
      
    )
}

export default ProfilScreen