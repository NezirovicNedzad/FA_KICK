import './menu.css'
import React from 'react'
import {Link } from "react-router-dom"





const Kartica = ({camps}) => {
    return (
        <div className="item">
      <div className="stil">
      <div className="sredina">
        <img className="img-circle" src={camps.slika} alt="nesto" />
        </div>
        
        <div className="imepreporuke"><Link to ={`/kamp/${camps._id}`} >{camps.tip}</Link></div>
        <p>

        {camps.opis}
        </p>
      </div>
    </div>
    )
}

export default Kartica
