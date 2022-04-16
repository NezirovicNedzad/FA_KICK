import React from 'react';

import '../Screens/profil.css'
import { Container ,Image} from 'react-bootstrap';

const Korisnici = ({kordinatori}) => {
  return  <div className='srednji' key={kordinatori._id}>
   
  <h3 style={{textAlign:"center"}}>{kordinatori.ime}</h3>

  <Container  className="centriraj">
       <Image roundedCircle fluid width="40%" src={kordinatori.slika} alt="Vaša slika.." />
      

  </Container>
<Container className="centriraj">
   <p>Trener</p> 


  </Container>

<Container className="podaci">

<p ><span className="name">Email:</span>{kordinatori.email} </p>
</Container>

<Container className="podaci">
<p ><span className="name">Trenerska licenca:</span>{kordinatori.licenca}</p>
</Container> <></>




<Container className="podaci">
<p><span className="name">Godine:</span>{kordinatori.brgod}</p>
</Container>

<Container style={{padding:"1rem 0"}}>
<p> {kordinatori.ime} je glavni koordinator na ovom kampu! </p> 
</Container>

</div>;
};

export default Korisnici;
