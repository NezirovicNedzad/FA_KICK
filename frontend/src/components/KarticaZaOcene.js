import './menu.css'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import BarChart from '../components/BarChart';
import { Button } from 'react-bootstrap';
import './menu.css'
import { DeleteOcena } from '../actions/prijaveactions';





const KarticaZaOcene = ({ocena,idOcene,idPrijave}) => {


  const dispatch=useDispatch()
  
const userLogin = useSelector(state => state.korisnickiLogin)

const{userInfo}=userLogin













const izbrisi=(idp,ido)=>{


  if(window.confirm("Jeste li sigurni da  zelite da izbrisete ovu ocenu?"))
    {

    dispatch(DeleteOcena(idp,ido))
    }
  
}


    return (
        <div key={ocena._id}>
        <div className='prijava'  style={{border:"1px solid white"}}>
        
      <div className="RED">
    
      <div style={{justifyContent:"center",display:'flex',alignItems:"center"}} className='kol3' >
      
     <BarChart  tehnika={ocena.tehnika} taktika={ocena.taktika} fizika={ocena.fizika}/>
     </div>
     <div style={{textAlign:"center"}} className='kol3'>
     {userInfo.isKordinator ? <div style={{display:"flex",justifyContent:"right",paddingRight:"1rem"}}><Button id='izbr2' onClick={()=>izbrisi(idPrijave,idOcene)} ><i style={{font:"3rem",color:"red"}} className="fa-solid fa-xmark"></i></Button></div> : <></>}
      <p style={{margin:"1.2rem 0",color:"white"}}><span className='name'>Komentar trenera:</span>{ocena.text}</p>
      <p style={{margin:"1.2rem 0",color:"white"}}><span className='name'>Trening održan:</span>{ocena.trening.substring(0,10)}</p>
      <p style={{margin:"1.2rem 0",color:"white"}}><span className='name'>Prosečna ocena:</span>{((ocena.tehnika+ocena.taktika+ocena.fizika)/3).toFixed(2)}</p>
     </div>
      
      </div>
      </div>
      
      </div>
    )
}

export default KarticaZaOcene
