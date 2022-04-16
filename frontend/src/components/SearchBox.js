import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Form,Button} from 'react-bootstrap'




        
const SearchBox = () => {
    


    const navigate=useNavigate()


    const [keyword,setKeyword]=useState('')


    function scrollToBootom() {

     window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})

    }
    const submitHandler= (e)=>{
        e.preventDefault()
        if(keyword.trim())
        {
         navigate(`/search/${keyword}`)
        
         setKeyword('')
          
          

        }
        else{
            navigate('/')
          
        }
        scrollToBootom()
    }

  return (
    <>
    <Form onSubmit={submitHandler} >
        <div style={{width:"100%"}} className='RED'>
        <Form.Control type="text" name="q"
        onChange={(e)=>setKeyword(e.target.value)}
        placeholder="Pretraži kampove.."
        className='mr-sm-2 ml-sm-5'
        
        ></Form.Control>
   
      <Button type="submit"  className="pretrazi">Pretraži</Button>    
       
        </div>

    </Form>
    
    </>
  )
}

export default SearchBox