import './menu.css'
import React from 'react'
import {Link } from "react-router-dom"
import Rating from './Rating'




const Kartica2 = ({camps}) => {
    return (
        <div className="item">
      <div className="stil">
      <div className="sredina">
        <img className="img-circle" src={camps.slika} alt="nesto" />
        </div>
        
        <div className="imepreporuke"><Link to ={`/arhivirani/${camps._id}`} >Oceni</Link></div>
        <p>
        {camps.tip}  
        </p>
        <div className='RED'>
       <div className='kol3' style={{marginTop:"-1rem"}}><p ><span className="name">Datum zavšetka:</span>{camps.datum_zavrsetka}</p></div>
          
              </div>

        
      </div>
      <div className="centriraj" style={{marginTop:"-3rem",marginBottom:"1rem"}}> <Rating  value={camps.rating} color="#f8e825"
                   text={`${camps.numReviews} ocene`}
                      />
                      </div>
    </div>
    )
}

export default Kartica2
