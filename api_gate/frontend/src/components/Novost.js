import React from 'react';
import { Link } from 'react-router-dom';
const Novost = ({novost}) => {
  return <>
  
  <h4>{novost.naslov}</h4>
  <div className="card" >

<img className='card-img-top' src={`${novost.slika}`} alt='Nesto' />

<div className="card-body">
  <p className="card-text">{novost.kratkitext}</p>
  
</div>
<div className="centriraj"> <Link to={`/novosti/${novost._id}`}>Pogledaj</Link></div> 
</div>
  </>;
};

export default Novost;
