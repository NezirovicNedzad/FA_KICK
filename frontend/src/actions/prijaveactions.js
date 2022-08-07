import axios from "axios"
import {PRIJAVE_KREIRAJ_REQUEST,PRIJAVE_KREIRAJ_SUCCESS,PRIJAVE_KREIRAJ_FAIL, PRIJAVE_LIST_REQUEST, PRIJAVE_LIST_SUCCESS, PRIJAVE_LIST_FAIL, PRIJAVE_BYID_REQUEST, PRIJAVE_BYID_SUCCESS, PRIJAVE_BYID_FAIL, PRIJAVE_DELETE_REQUEST, PRIJAVE_DELETE_SUCCESS, PRIJAVE_DELETE_FAIL, CREATE_OCENA_REQUEST, CREATE_OCENA_SUCCESS, CREATE_OCENA_FAIL, PRIJAVE_KAMPBYID_REQUEST, PRIJAVE_KAMPBYID_SUCCESS, PRIJAVE_KAMPBYID_FAIL, PRIJAVE_KORISNICI_REQUEST, PRIJAVE_KORISNICI_SUCCESS, PRIJAVE_KORISNICI_FAIL, PRIJAVE_ZAKAMP_REQUEST, PRIJAVE_ZAKAMP_SUCCESS, PRIJAVE_ZAKAMP_FAIL, DELETE_OCENA_REQUEST, DELETE_OCENA_SUCCESS, DELETE_OCENA_FAIL} from '../constants/prijaveConstants'



export const  prijavaKreiraj=( kampId, koordinatorId, korisnikId,ocene,slika,text,tip,datum_pocetka,datum_zavrsetka)=>async(dispatch,getState)=>{
    try {
        dispatch({
            type:PRIJAVE_KREIRAJ_REQUEST
        })
    

        
        const { korisnickiLogin:{userInfo}}=getState()
        const config={
    
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }
    
        const {data}=await axios.post('/api/prijave',
        {   kampId,
            koordinatorId,
            korisnikId,
            ocene,
            slika,
            text,
            tip,
            datum_pocetka,
            datum_zavrsetka},config)
    
        dispatch({
    
            type:PRIJAVE_KREIRAJ_SUCCESS,
            payload:data
        })
    
      
    
        
    } catch (error) {
        dispatch({
    
            type:PRIJAVE_KREIRAJ_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    
    }
    
    
    
    }


    
export const listPrijave = ()=>async(dispatch,getState)=>{
   
   
    try {
        dispatch({
            type:PRIJAVE_LIST_REQUEST
        })
    

        const { korisnickiLogin:{userInfo}}=getState()
        const config={
    
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            }
        }
    
        const {data}=await axios.get(`/api/prijave`,config)
        
    
        dispatch({
    
            type:PRIJAVE_LIST_SUCCESS,
            payload:data,
        })
    
 
        
    } catch (error) {
        dispatch({
    
            type:PRIJAVE_LIST_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    
    }
    
    
    
    }   


    
export const prijavaDetails=(id) =>async(dispatch,getState)=>{

    try {
        dispatch(
            {type:PRIJAVE_BYID_REQUEST}
        )
        const { korisnickiLogin:{userInfo}}=getState()
        const config={
    
            headers:{
               
                Authorization:`Bearer ${userInfo.token}`
            }
        }

        const {data}=await axios.get(`/api/prijave/${id}`,config)
        dispatch(
            {type:PRIJAVE_BYID_SUCCESS,
            
                payload:data}
            
        )
        
    } catch (error) {
        dispatch({

            type:PRIJAVE_BYID_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    }



}

    
export const prijavaKampoviSvaki=(id,pageNumber="") =>async(dispatch,getState)=>{

    try {
        dispatch(
            {type:PRIJAVE_KAMPBYID_REQUEST}
        )
        const { korisnickiLogin:{userInfo}}=getState()
        const config={
    
            headers:{
               
                Authorization:`Bearer ${userInfo.token}`
            }
        }

        const {data}=await axios.get(`/api/prijave/zaKamp/${id}/?pageNumber=${pageNumber}`,config)
        dispatch(
            {type:PRIJAVE_KAMPBYID_SUCCESS,
            
                payload:data}
            
        )
        
    } catch (error) {
        dispatch({

            type:PRIJAVE_KAMPBYID_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    }



}
export const prijavaZaKampoviSvaki=(id) =>async(dispatch,getState)=>{

    try {
        dispatch(
            {type:PRIJAVE_ZAKAMP_REQUEST}
        )
      

        const {data}=await axios.get(`/api/prijave/kampovi/${id}/`)
        dispatch(
            {type:PRIJAVE_ZAKAMP_SUCCESS,
            
                payload:data}
            
        )
        
    } catch (error) {
        dispatch({

            type:PRIJAVE_ZAKAMP_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    }



}
    
export const prijavaKorisnciSvi=(id,pageNumber="") =>async(dispatch,getState)=>{

    try {
        dispatch(
            {type:PRIJAVE_KORISNICI_REQUEST}
        )
        const { korisnickiLogin:{userInfo}}=getState()
        const config={
    
            headers:{
               
                Authorization:`Bearer ${userInfo.token}`
            }
        }

        const {data}=await axios.get(`/api/prijave/poKorisniku/${id}/?pageNumber=${pageNumber}`,config)
        dispatch(
            {type:PRIJAVE_KORISNICI_SUCCESS,
            
                payload:data}
            
        )
        
    } catch (error) {
        dispatch({

            type:PRIJAVE_KORISNICI_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    }



}


export const DeletePrijava = (id)=>async(dispatch,getState)=>{
   
   
    try {
        dispatch({
            type:PRIJAVE_DELETE_REQUEST
        })
    

        const { korisnickiLogin:{userInfo}}=getState()
        const config={
    
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            }
        }
    
        await axios.delete(`/api/prijave/${id}`,config)
        
    
        dispatch({
    
            type:PRIJAVE_DELETE_SUCCESS,
        
        })
    
 
        
    } catch (error) {
        dispatch({
    
            type:PRIJAVE_DELETE_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    
    }
    
    
    
    }   


    export const createOcenaPrijave=(prid,ocena) =>async(dispatch,getState)=>{

        try {
            dispatch(
                {type:CREATE_OCENA_REQUEST}
            )
    
    
            const { korisnickiLogin:{userInfo}}=getState()
            const config={
        
                headers:{
                   'Content-Type':'application/json',
                    Authorization:`Bearer ${userInfo.token}`
                }
            }
        await axios.post(`/api/prijave/${prid}/ocene/`,ocena,config)//passing a object,dont send data
            dispatch(
                {type:CREATE_OCENA_SUCCESS,
                }
                
            )
            
        } catch (error) {
            dispatch({
    
                type:CREATE_OCENA_FAIL,
                payload:
                error.response && error.response.data.message 
                ? error.response.data.message
                : error.message
            })
        }
    
    
    
    }
    


    
export const DeleteOcena = (idP,idO)=>async(dispatch,getState)=>{
   
   
    try {
        dispatch({
            type:DELETE_OCENA_REQUEST
        })
    

        const { korisnickiLogin:{userInfo}}=getState()
        const config={
    
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            }
        }
    
        await axios.delete(`/api/prijave/${idP}/ocene/${idO}`,config)
        
    
        dispatch({
    
            type:DELETE_OCENA_SUCCESS,
        
        })
    
 
        
    } catch (error) {
        dispatch({
    
            type:DELETE_OCENA_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    
    }
    
    
    
    }   
