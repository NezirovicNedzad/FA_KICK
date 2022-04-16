import React,{useEffect} from "react"

import {Table,Button,Col,Row} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message'
import { useNavigate } from "react-router"
import Loader from '../components/Loader'
import{CAMP_CREATE_RESET} from '../constants/campConstants'
import {listCamps,CampDelete,CampCreate} from '../actions/campactions'
import {ArhiviraniKreiraj} from '../actions/arhcampactions'
import { ARHCAMP_CREATE_RESET } from "../constants/arhiviraniCampConstants"





const ListaKampova = () => {


    const dispatch=useDispatch()

    const campList=useSelector(state=>state.campList)
    const {loading,error,camps}=campList

    const login=useSelector(state=>state.korisnickiLogin)
    const {userInfo}=login

    const deletecamp=useSelector(state=>state.campDelete)
    const {loading:loadingDelete,error:errorDelete,success:successDelete}=deletecamp

    const createCamp=useSelector(state=>state.campCreate)
    const {loading:loadingCreate,error:errorCreate,success:successCreate,camp:createdCamp}=createCamp

    const arhCamp=useSelector(state=>state.arhiviraniCreate)
    const {success}=arhCamp

    
    const navigate=useNavigate()

    useEffect(()=>{

      dispatch({type:CAMP_CREATE_RESET})

     if(!userInfo.isAdmin)
     {
      navigate('/login')
     }

     if(successCreate)
     {

      navigate(`/admin/kamp/${createdCamp._id}/edit`)
     }
     if(success)
     {
       navigate('/kampovi')

       dispatch({type:ARHCAMP_CREATE_RESET})
     }
     else
     {

         dispatch(listCamps())

     }
    },[dispatch,userInfo,navigate,successDelete,successCreate,createdCamp,success])

  const deleteHandler =(id) => {

    if(window.confirm("Sa ovim brišete i sve prijave na ovaj kamp.Jeste li sigurni?"))
    {
      dispatch(CampDelete(id))
    
    }
  }
  const archiveHandler =(tip,koordinatorId,slika,opis,text,datum_pocetka,datum_zavrsetka,id) => {

    if(window.confirm("Jeste li sigurni da zelite da  arhivirate ovaj kamp?"))
    {

           //arhiviraj
             dispatch(ArhiviraniKreiraj(tip,koordinatorId,slika,opis,text,datum_pocetka,datum_zavrsetka))

             dispatch(CampDelete(id))
    
    }

   
  }
  const createCampHandler =() => {

    dispatch(CampCreate())


   
  }

  return (
<>
    <Row  style={{marginTop:"7rem",padding:"1rem"}} className='align-items center'>
        <Col>
        <h1>Kampovi</h1>
        </Col>
        <Col className="text-right">
     
          
        <Button style={{marginRight:"1rem"}} className="my-3" onClick={createCampHandler}>
             <i className="fas fa-plus"></i>
             Kreiraj kamp

        </Button>

        </Col>
      </Row>  
      {loadingDelete &&<Loader></Loader>}
      {errorDelete &&<Message variant="danger" >{errorDelete}</Message>}
      {loadingCreate &&<Loader></Loader>}
      {errorCreate &&<Message variant="danger" >{errorCreate}</Message>}
  <Row style={{marginTop:"1.2rem",padding:"1rem"}}>

 
      <Col style={{padding:"0.7rem"}} >
{loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> :(


<Table striped bordered hover responsive className='table-sm'>


    <thead>
        <tr>
            <th>ID</th>
            <th>Tip</th>
            <th>Cena</th>
            <th>Koridnator Id</th>
            <th>Pocetak</th>
            <th>Kraj</th>
            <th>Opis</th>
            <th></th>
 


        </tr>
    </thead>

    <tbody>

        {camps.map(camp=>(

                       
<tr key={camp._id}>
    <td>{camp._id}</td>
    <td>{camp.tip}</td>
    <td>{camp.cena}</td>
    <td>{camp.koordinatorId}</td>
    <td>{camp.datum_pocetka}</td>
    <td>{camp.datum_zavrsetka}</td>
    <td>{camp.opis}</td>
    <td>

    <Button variant="danger" className='btn-sm' onClick={()=>
 deleteHandler(camp._id)} >
    <i  className="fas fa-trash"></i>
         
   </Button>
    <Button variant="dark" className='btn-sm' onClick={()=>
        archiveHandler(camp.tip,camp.koordinatorId,camp.slika,camp.opis,camp.text,camp.datum_pocetka,camp.datum_zavrsetka,camp._id)} >
          <i  style={{fontSize:"0.56rem"}} className="fas fa-archive"></i>
         
   </Button>
    </td>

</tr>

        ))}
    </tbody>
</Table>




)}
</Col>

  </Row>
  
  
</>
  )
};

export default ListaKampova;
