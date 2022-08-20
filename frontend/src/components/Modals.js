
import React ,{useEffect,useState}from "react";
import { useNavigate,useParams } from 'react-router-dom'
import './modal.css'
import SearchBox from './SearchBox'




const Modals = ({closeModal,tipovi,cene}) => {



const [first, setFirst] = useState('');
const [second, setSecond] = useState('');
const [third, setThird] = useState('');
const [min,setMin]=useState('');
const [max,setMax]=useState('');
const navigate=useNavigate()

const params=useParams()



const pretraga = ()=>{
  
const min=document.getElementById("min").value;
  
const max=document.getElementById("max").value;


if(first==="Dvonedeljni Kamp")
{
  tipovi.push(first)
}

if(second==="Full-time kamp")
{
  tipovi.push(second);
}

if(third==="Letnji kamp")
{
  tipovi.push(third);
}





if(min!=='')
{
  setMin(min.value)
}
if(max!=='')
{
  setMax(max.value)
}




if(tipovi.length===0 && max=='' && min=='')
{
  navigate(`/`)
  console.log(min)
}

if(tipovi.length===0 && min!=='' && max==='')
{

 
}

if(tipovi.length===1  && min==='' && max==='')
{
  navigate(`/search/${tipovi[0]}`)
}

if(tipovi.length===2 && min==='' && max==='' )
{
  navigate(`/search2/${tipovi[0]}/${tipovi[1]}`)

  console.log(params.vrsta1,params.vrsta2)

}
if(tipovi.length===3 && min==='' && max==='' )
{
  navigate(`/searchall/${tipovi[0]}/${tipovi[1]}/${tipovi[2]}`)

  console.log(params.vrsta1,params.vrsta2,params.vrsta3)
  console.log(tipovi,tipovi[2])

}
if(tipovi.length===0 && min!=='' && max==='' )
{
  navigate(`/searchmin/${min}`)
}
if(tipovi.length===0 && min==='' && max!=='' )
{
  navigate(`/searchmax/${max}`)
}
if(tipovi.length===0 && min!=='' && max!=='' )
{
  navigate(`/searchrange/${min}/${max}`)
}
if(tipovi.length===1 && min!=='' && max==='' )
{
  navigate(`/searchalm/${tipovi[0]}/${min}`)
}

if(tipovi.length===2 && min!=='' && max==='' )
{
  navigate(`/searchalm2/${tipovi[0]}/${tipovi[1]}/${min}`)
}
if(tipovi.length===3 && min!=='' && max==='' )
{
  navigate(`/searchalm3/${tipovi[0]}/${tipovi[1]}/${tipovi[2]}/${min}`)
}
if(tipovi.length===1 && min==='' && max!=='' )
{
  navigate(`/searchmax1/${tipovi[0]}/${max}`)
}
if(tipovi.length===2 && min==='' && max!=='' )
{
  navigate(`/searchmax2/${tipovi[0]}/${tipovi[1]}/${max}`)
}
if(tipovi.length===3 && min==='' && max!=='' )
{
  navigate(`/searchmax3/${tipovi[0]}/${tipovi[1]}/${tipovi[2]}/${max}`)
}
if(tipovi.length===1 && min!=='' && max!=='' )
{
  navigate(`/searchrange1/${tipovi[0]}/${min}/${max}`)
}
if(tipovi.length===2 && min!=='' && max!=='' )
{
  navigate(`/searchrange2/${tipovi[0]}/${tipovi[1]}/${min}/${max}`)
}
if(tipovi.length===3 && min!=='' && max!=='' )
{
  navigate(`/searchrange3/${tipovi[0]}/${tipovi[1]}/${tipovi[2]}/${min}/${max}`)
}


  

}
  return (
    
    <div className="modalBackground">

<div className='modalContainer'>
 <div style={{display:"flex",justifyContent:"right"}}> <button id="x" onClick={()=>closeModal(false)}><i style={{color:"white"}} className="fa-solid fa-x"></i></button></div>
  <div className='title'>
    <h1>Pretraga</h1>
  </div>
  <div className='body'>
  <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"1rem"}}> 
     
  </div>

  <p style={{textDecoration:"underline",marginTop:"1rem"}} id='naslov'>Tip kampa:</p>
  
  <div className='novi22'>
  <label >
        <input value={first} onChange={()=>setFirst("Dvonedeljni Kamp")} type="checkbox" />
        Dvonedeljni Kamp
      </label><br></br>
      <label>
        <input  value={second} onChange={()=>setSecond("Full-time kamp")}  type="checkbox" />
        Full time Kamp
      </label><br></br>
  
        <label>
        <input value="Letnji kamp" onChange={()=>setThird("Letnji kamp")} type="checkbox" />
        Letnji Kamp
      </label>

  </div>
  
  <p style={{textDecoration:"underline",marginTop:"1rem"}} id='naslov'>Cene kampa:</p>  
  <div className='novi23'>
    <label>Minmalna cena</label><br></br>
  <input id="min" type="number"></input><br></br>
    <label>Maksimalna cena</label><br></br>
  <input id="max" type="number"></input><br></br>

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