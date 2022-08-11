
import React ,{useEffect,useState}from "react";
import { useNavigate } from 'react-router-dom'
import './modal.css'
import SearchBox from './SearchBox'




const Modals = ({closeModal}) => {



const [first, setFirst] = useState("");
const [second, setSecond] = useState("");
const navigate=useNavigate()




const pretraga = ()=>{
  

if(first==="" && second ==="")
{

  navigate(`/`)
}
else if(second==="")
{
  navigate(`/search/${first}`)
}
  
  
 
    
    

  

}
  return (
    
    <div className="modalBackground">

<div className='modalContainer'>
 <div style={{display:"flex",justifyContent:"right"}}> <button onClick={()=>closeModal(false)}>X</button></div>
  <div className='title'>
    <h1>Pretraga kampova</h1>
  </div>
  <div className='body'>
  <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"1rem"}}> 
     <p style={{marginRight:"1rem"}}>Pretraži po imenu</p>
   <SearchBox/>
  </div>

  <p style={{textDecoration:"underline",marginTop:"1rem"}} id='naslov'>Tip kampa:</p>
  
  <div className='novi22'>
  <label >
        <input value={first} onChange={()=>setFirst("Dvonedeljni Kamp")} type="checkbox" />
        Dvonedeljni Kamp
      </label><br></br>
      <label>
        <input  value={second}  type="checkbox" />
        Full time Kamp
      </label><br></br>
  
        <label>
        <input value="Letnji kamp" onChange={()=>(console.log(this.value))} type="checkbox" />
        Letnji Kamp
      </label>

  </div>
  
  <p style={{textDecoration:"underline",marginTop:"1rem"}} id='naslov'>Cene kampa:</p>  
  <div className='novi22'>
    <label>Minmalna cena</label><br></br>
  <input type="number"></input><br></br>
    <label>Maksimalna cena</label><br></br>
  <input type="number"></input><br></br>

  </div>


  </div>
  <div className='footer'>

    <button id='cancelbtn' onClick={()=>closeModal(false)}>Otkazi</button>
    <button onClick={()=>(pretraga(),closeModal(false))}>Pretrazi</button>
  </div>

</div>

    </div>
   

  )
}

export default Modals