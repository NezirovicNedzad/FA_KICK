import React  from 'react'
  import {LinkContainer} from 'react-router-bootstrap'
import { Nav, Navbar ,Container,Image, NavDropdown} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import SearchBox from './SearchBox'
import { logout} from '../actions/korisnikaction'

import './menu.css'


 const Header = () => {
 
  



  const dispatch=useDispatch()
const korisnickiLogin = useSelector(state => state.korisnickiLogin)

const {userInfo}=korisnickiLogin


const logoutHandler=()=>{

 dispatch(logout())


}

    return (
 
    
      
    
 
         <Navbar bg="novi" variant="dark"  fixed='top'
         expand="md">
         <LinkContainer to='/'>
             <Navbar.Brand>
                 <Image fluid className='nesto' src="/images/header.png" alt="neka" width={'85%'} />
             </Navbar.Brand>
             </LinkContainer>
          
         
             <Navbar.Toggle>
           <Container className='menu-btn '>
          <Container className='menu-btn__burger'>
          </Container>  
</Container>
      

    
</Navbar.Toggle>

<Navbar.Collapse>


<div style={{display:"flex",alignItems:"center",justifyContent:"center"}}><SearchBox/></div>
<Nav className="ml-auto my-2 my-lg-0">
            <LinkContainer to='/'>
            <Nav.Link >O NAMA</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/kampovi'>
            <Nav.Link  name ='kamp'>KAMPOVI</Nav.Link>

            </LinkContainer>
            <LinkContainer to='/objekti'>
            <Nav.Link >OBJEKTI</Nav.Link>
            </LinkContainer>
            {!userInfo  ? (
            <LinkContainer to='/login'>
            <Nav.Link name='prijavi' >PRIJAVI SE</Nav.Link>
            </LinkContainer>) :
           !userInfo.verified ? (
            
            <Nav.Link >Verifikacija</Nav.Link>
         

           ) :

            userInfo.verified  && !userInfo.isAdmin  ? (



<NavDropdown className='top'  title={userInfo.ime}>

 
  <LinkContainer to='/profil'>

    <NavDropdown.Item className='nav' style={{textAling:"center"}}><i className="fas fa-user"></i> Profil</NavDropdown.Item> 
  </LinkContainer>
 

    <NavDropdown.Item className='nav' style={{textAling:"center"}} onClick={logoutHandler}
    ><i className="fas fa-power-off"></i>Odjavi se</NavDropdown.Item> 
  
</NavDropdown>
            ) 
            : userInfo.isAdmin  ?

            (
         





         
<NavDropdown className='top' title={`Admin ${userInfo.ime} `}>
<LinkContainer to='/profil'>

<NavDropdown.Item className='nav' style={{textAling:"center"}}><i className="fas fa-user"></i> Profil</NavDropdown.Item> 
</LinkContainer>


  <LinkContainer to='/admin/listakorisnika'>

    <NavDropdown.Item className='nav' style={{textAling:"center"}}><i className="fas fa-list"></i> Korisnici</NavDropdown.Item> 
  </LinkContainer>
  <LinkContainer to='/admin/listakampova'>

    <NavDropdown.Item className='nav' style={{textAling:"center"}}><i className="far fa-futbol"></i> Kampovi</NavDropdown.Item> 
  </LinkContainer>
  <LinkContainer to='/admin/listanovosti'>

    <NavDropdown.Item className='nav' style={{textAling:"center"}}><i className="fas fa-info-circle"></i> Novosti</NavDropdown.Item> 
  </LinkContainer>
 

  <NavDropdown.Item className='nav' style={{textAling:"center"}} onClick={logoutHandler}
><i className="fas fa-power-off"></i>Odjavi se</NavDropdown.Item>     
  
</NavDropdown>)
:<>
<LinkContainer to='/login'>
            <Nav.Link >PRIJAVI SE</Nav.Link>
            </LinkContainer></>
                    }
            </Nav> 
</Navbar.Collapse>

            

           
          
          
        </Navbar>
 
    )
 
}


export default Header