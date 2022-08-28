import React from 'react'
import {  Container,Image,  } from 'react-bootstrap'
import { FaFacebook,FaYoutube,FaInstagram } from 'react-icons/fa';

import {SiGmail} from 'react-icons/si'
import { Link } from 'react-router-dom';
import "./menu.css"

const Footer = () => {
    return (

        <>
        <Container fluid className='novi'>
            <h4>Nasi spoznori u sportu i edukaciji</h4>

            <Container className='novi2'>


            <Container className='uzslike'><Image fluid src="/images/sponzor1.png" alt="sPONZOR" /> </Container>
            <Container className='uzslike'>  <Image fluid src="/images/sponzor2.png" alt="sPONZOR" /></Container>
            <Container className='uzslike'> <Image fluid src="/images/sponzor3.png" alt="sPONZOR" /></Container>
            </Container>
         
        </Container >

<Container className="donji" fluid>




<Container className="text1">
Copyright &copy; FA KICK
</Container>
<Container  className="text-center ">

<FaFacebook/>

<FaYoutube style={{marginLeft:'9px'}}/>
<FaInstagram style={{marginLeft:'9px'}}/>

<SiGmail style={{marginLeft:'9px'}}/>

</Container>
<Container  className="text-right ">
    <Link style={{color:'white'}} to='/kontakt'>
 Kontakt
</Link>
</Container>

</Container>

            </>
    )
}

export default Footer
