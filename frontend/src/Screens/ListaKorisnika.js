
import React,{useEffect} from "react"

import {Table,Button,Col,Row} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message'
import { useNavigate,useParams } from "react-router"
import Loader from '../components/Loader'
import { listKorisnici,deleteKorisnici } from "../actions/korisnikaction"
import Paginate from "../components/Paginate"
import SearchBox from "../components/SearchBox"


const ListaKorisnika = () => {


  const  params=useParams()
   const pageNumber=params.pageNumber
    const dispatch=useDispatch()
     const keyword=params.keyword;
    const korisniciLista=useSelector(state=>state.korisniciLista)
    const {loading,error,korisnici,page,pages}=korisniciLista

    const kord=[];
   const kordinator=params.kordinator

    const login=useSelector(state=>state.korisnickiLogin)
    const {userInfo}=login

    const obrisiKorisnika=useSelector(state=>state.korisniciDelete)
    const {success:successDelete}=obrisiKorisnika

    const navigate=useNavigate()
  const novi=[];
    useEffect(()=>{

     if(userInfo && userInfo.isAdmin)
     {
        dispatch(listKorisnici(keyword,pageNumber,kordinator))
      
      }
     else
     {

   navigate('/login')
     }
    },[dispatch,userInfo,navigate,successDelete,pageNumber])

  const deleteHandler =(id) => {

    if(window.confirm("Jeste li sigurni?"))
    {

      dispatch(deleteKorisnici(id))
    }


   
  }

  return (
  <div className="RED" style={{marginTop:"7rem",padding:"1rem"}}>

      <div className="div2" ></div>
      <div className="div8" style={{padding:"0.7rem"}}  >
  <h1>Korisnici</h1>
 <SearchBox />
{loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> :(


<Table striped bordered hover responsive className='table-sm'>


    <thead>
        <tr>
            
            <th>Ime</th>
            <th>Email</th>
            
            <th>Kordinator</th>
            <th></th>


        </tr>
    </thead>

    <tbody>

        {korisnici.map(korisnik=>(


<tr key={korisnik._id}>
    
    <td>{korisnik.ime}</td>
    <td><a href={`mailto:${korisnik.email}`}>{korisnik.email}</a></td>
   


    <td>{korisnik.isKordinator ? (<i className="fas fa-check" style={{color:"green"}}></i>): (
    <i className="fas fa-times" style={{color:'red'}}></i>
    )}
    </td>

    <td>

{ !korisnik.isAdmin ?
 (<Button variant="danger" className='btn-sm' onClick={()=>
 deleteHandler(korisnik._id)} >
    <i className="fas fa-trash"></i>
         
   </Button>):<></>
}

    </td>
</tr>

        ))}
    </tbody>
</Table>




)}
<Paginate page={page} pages={pages} link='/admin/listakorisnika/page/'/>
</div>
<div className="div2" lg={2}>
</div>
  </div>
  )
};

export default ListaKorisnika;
