
import React,{useEffect} from "react"

import {Table,Button,Col,Row} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message'
import { useNavigate } from "react-router"
import Loader from '../components/Loader'


import {listNovosti,NovostDelete} from "../actions/novostactions"


const ListNovosti = () => {


    const dispatch=useDispatch()


    const login=useSelector(state=>state.korisnickiLogin)
    const {userInfo}=login

    const novostiList=useSelector(state=>state.novostList)
    const{loading,error,novosti}=novostiList

    const novostidEL=useSelector(state=>state.novostDelete)
    const{loading:loadingDelete,error:errorDelete,success}=novostidEL


    const navigate=useNavigate()

    useEffect(()=>{

     if(userInfo && userInfo.isAdmin)
     {
        dispatch(listNovosti())
      
      
      }
      
     else
     {

   navigate('/login')
     }
    },[dispatch,userInfo,navigate,success])


  const createNovostHandler = () => {


    navigate('/admin/listanovosti/kreiraj')
  }

  const deleteHandler = (id) => {

    if(window.confirm("Jeste li sigurni?"))
    {

             dispatch(NovostDelete(id))
    }

    
  }
  return (

  
  <div className="RED" style={{marginTop:"7rem",padding:"1rem"}}>


{loadingDelete &&<Loader></Loader>}
    {errorDelete &&<Message variant="danger" >{errorDelete}</Message>}

      <div className="div2"></div>
      <div style={{padding:"0.7rem"}}  className="div8">
  
  <div className="RED">
    <div className="kol3">
  <h1>Novosti</h1>
  </div>
  <div className="kol3" style={{textAlign:'right'}}>
  <Button style={{marginRight:"1rem"}} className="my-3" onClick={createNovostHandler}>
             <i className="fas fa-plus"></i>
             Kreiraj novost 

        </Button>
        </div>
        </div>


{loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> :(


<Table striped bordered hover responsive className='table-sm'>


    <thead>
        <tr>
            <th>ID</th>
            <th>Naslov</th>
            <th>Uvod</th>
            <th>Kratki text</th>
            <th>Citat</th>
            <th>Duži text</th>
            <th></th>
           


        </tr>
    </thead>

    <tbody>

        {novosti.map(novost=>(


<tr key={novost._id}>
    <td>{novost._id}</td>
    <td>{novost.naslov}</td>
    <td>{novost.uvod}</td>
   <td>{novost.kratkitext}</td>
   <td>{novost.citat}</td>
   <td>{novost.text}</td>
  

    <td>


 <Button variant="danger" className='btn-sm' onClick={()=>
 deleteHandler(novost._id)} >
    <i className="fas fa-trash"></i>
         
   </Button>


    </td>
</tr>

        ))}
    </tbody>
</Table>




)}
</div>
<div className="div2">
</div>
  </div>
  )
};

export default ListNovosti;
