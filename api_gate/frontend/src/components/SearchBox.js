import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Form,Button} from 'react-bootstrap'

import './menu.css'


        
const SearchBox = ( ) => {
    


    const navigate=useNavigate()

    const [kordinator, setKordinator] = useState('');
    const [keyword,setKeyword]=useState('')



    
    const submitHandler= (e)=>{
        e.preventDefault()
      
  
         
        if(keyword.trim()!=='' || kordinator!=='')
        {
          if(kordinator==='' && keyword!==''){
            navigate(`/admin/listakorisnika/search2/${keyword}`);
           }
          else if(kordinator==='kordinator' && keyword==='' )
          {
            navigate(`/admin/listakorisnika/search/${kordinator}`)
            
          }
         
          else if (kordinator==='kordinator' && keyword!=='')
          {
            navigate(`/admin/listakorisnika/search/${keyword}/${kordinator}`)
          }
          
          
        
         setKeyword('')
          
      

        }
        else{
            navigate('/admin/listakorisnika')
          
        }
     
    }


    const dodaj  =()=>{
      if(kordinator==='')
      {
        setKordinator('kordinator')
      }
      else
      {
        setKordinator('');
      }
    }
  return (
    <>
    <Form onSubmit={submitHandler} >
        <div  style={{margin:"1rem",justifyContent:"right",}} className='RED'>
        <p id='kor' style={{margin:"1rem 0rem",textAlign:"center"}}>Kordinatori</p>
        <input id='id78' style={{marginRight:"1rem",marginLeft:"1rem"}} value={kordinator} onChange={()=>(

            dodaj()

        )} type="checkbox" />
        
        <Form.Control   type="text" name="q"
       style={{width:"70%"}}
       id='formakontrol'
      
       onChange={(e)=>setKeyword(e.target.value)}
        placeholder="Pretraži korisnike.."
        
        
        ></Form.Control>
   
      <Button  style={{padding:"0.5rem",margin:"0 0.4rem"}} type="submit"  className="pretrazi">Pretraži</Button>    
       
        </div>

    </Form>
    
    </>
  )
}

export default SearchBox