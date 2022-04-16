import {
     KORISNCIKI_LOGOUT,
      KORISNICKI_DETAILS_FAIL, KORISNICKI_DETAILS_REQUEST,
       KORISNICKI_DETAILS_SUCCESS, KORISNICKI_LOGIN_FAIL, 
       KORISNICKI_LOGIN_REQUEST, KORISNICKI_LOGIN_SUCCESS, 
       KORISNICKI_REGISTER_FAIL, KORISNICKI_REGISTER_REQUEST, 
       KORISNICKI_REGISTER_SUCCESS, KORISNICKI_UPDATE_REQUEST ,KORISNICKI_UPDATE_SUCCESS,KORISNICKI_UPDATE_FAIL, KORISNICKI_KORDINATOR_REQUEST, KORISNICKI_KORDINATOR_SUCCESS, KORISNICKI_KORDINATOR_FAIL, KORISNICKI_LIST_REQUEST, KORISNICKI_LIST_SUCCESS, KORISNICKI_LIST_FAIL, KORISNICKI_DELETE_REQUEST, KORISNICKI_DELETE_SUCCESS, KORISNICKI_DELETE_FAIL, KORISNICKI_LIST_PRIJAVE_REQUEST, KORISNICKI_LIST_PRIJAVE_SUCCESS, KORISNICKI_LIST_PRIJAVE_FAIL, KORISNICKI_VERIFY_SUCCESS, KORISNICKI_VERIFY_FAIL, KORISNICKI_VERIFY_REQUEST, KORISNICKI_FORGOT_PASSWORD_FAIL, KORISNICKI_FORGOT_PASSWORD_SUCCESS, KORISNICKI_FORGOT_PASSWORD_REQUEST, KORISNICKI_RESETP_REQUEST, KORISNICKI_RESETP_SUCCESS, KORISNICKI_RESETP_FAIL} from "../constants/korisnickeConstants"
import axios from "axios"



export const login =(email,password)=>async(dispatch)=>{
try {
    dispatch({
        type:KORISNICKI_LOGIN_REQUEST
    })

    const config={

        headers:{
            'Content-Type':'application/json'
        }
    }

    const {data}=await axios.post('/api/korisnici/login',
    {email,password},config)

    dispatch({

        type:KORISNICKI_LOGIN_SUCCESS,
        payload:data
       
    })
    
 

    localStorage.setItem('userInfo',JSON.stringify(data))
    
} catch (error) {
    dispatch({

        type:KORISNICKI_LOGIN_FAIL,
        payload:
        error.response && error.response.data.message 
        ? error.response.data.message
        : error.message
    })

}



}



export const register =(ime,email,password,slika,brgod,pozicija)=>async(dispatch)=>{
    try {
        dispatch({
            type:KORISNICKI_REGISTER_REQUEST
        })
    
        const config={
    
            headers:{
                'Content-Type':'application/json'
            }
        }
    
        const {data}=await axios.post('/api/korisnici',
        {ime,email,password,slika,brgod,pozicija},config)
    
        dispatch({
    
            type:KORISNICKI_REGISTER_SUCCESS,
            payload:data
        })
    
        dispatch({
    
            type:KORISNICKI_LOGIN_SUCCESS,
            payload:data
        })
       
    
        localStorage.setItem('userInfo',JSON.stringify(data))
        
    } catch (error) {
        dispatch({
    
            type:KORISNICKI_REGISTER_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    
    }
    
    
    
    }

export const Verify =(userId,otp)=>async(dispatch,getState)=>{
    try {
        dispatch({
            type:KORISNICKI_VERIFY_REQUEST
        })
      
      
    
       
    
        await axios.post('/api/korisnici/verify-email',
        {userId,otp})
    
        dispatch({
    
            type:KORISNICKI_VERIFY_SUCCESS,
         
        })

        localStorage.removeItem('userInfo')
        dispatch({
            type:KORISNCIKI_LOGOUT
        })
    
      
    
     
     
  
 
   
    
       
        
    } catch (error) {
        dispatch({
    
            type:KORISNICKI_VERIFY_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    
    }
    
    
    
    }

export const forgotPassword =(email)=>async(dispatch)=>{
    try {
        dispatch({
            type:KORISNICKI_FORGOT_PASSWORD_REQUEST
        })
      
      
    
       
    
        await axios.post('/api/korisnici/forgot-password',
        {email})
    
        dispatch({
    
            type:KORISNICKI_FORGOT_PASSWORD_SUCCESS,
            
         
        })

     
    } catch (error) {
        dispatch({
    
            type:KORISNICKI_FORGOT_PASSWORD_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    
    }
    
    
    
    }

export const ResetPassword =(password,token,id)=>async(dispatch)=>{
    try {
        dispatch({
            type:KORISNICKI_RESETP_REQUEST
        })
      
      
    
       
    
       const{data}= await axios.post(`/api/korisnici/reset-password?token=${token}&id=${id}`,
        {password})
    
        dispatch({
    
            type:KORISNICKI_RESETP_SUCCESS,
            payload:data
         
        })

     
    } catch (error) {
        dispatch({
    
            type:KORISNICKI_RESETP_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    
    }
    
    
    
    }

export const logout =() =>(dispatch)=>{

    localStorage.removeItem('userInfo')
    dispatch({
        type:KORISNCIKI_LOGOUT
    })

    document.location.href='/login'
}
export const getKorisnickiDetalji = (id)=>async(dispatch,getState)=>{
   
   
    try {
        dispatch({
            type:KORISNICKI_DETAILS_REQUEST
        })
    

        const { korisnickiLogin:{userInfo}}=getState()
        const config={
    
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }
    
        const {data}=await axios.get(`/api/korisnici/${id}`,config)
        
    
        dispatch({
    
            type:KORISNICKI_DETAILS_SUCCESS,
            payload:data,
        })
    
 
       
        
    } catch (error) {
        dispatch({
    
            type:KORISNICKI_DETAILS_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    
    }
    
    
    
    }   
export const updateKorisnickiProfil = (user)=>async(dispatch,getState)=>{
   
   
    try {
        dispatch({
            type:KORISNICKI_UPDATE_REQUEST
        })
    

        const { korisnickiLogin:{userInfo}}=getState()
        const config={
    
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }
    
        const {data}=await axios.put(`/api/korisnici/profil`,user,config)
        
    
        dispatch({
    
            type:KORISNICKI_UPDATE_SUCCESS,
            payload:data,
        })
    
 
       dispatch({

        type:KORISNICKI_LOGIN_SUCCESS,
        payload:data
       })

       localStorage.setItem('userInfo',JSON.stringify(data))
        
    } catch (error) {
        dispatch({
    
            type:KORISNICKI_UPDATE_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    
    }
    
    
    
    }   



    




export const listKordinatori =()=>async(dispatch)=>{                                  


    try {

        dispatch({

            type:KORISNICKI_KORDINATOR_REQUEST
        })
        
        const {data}=await axios.get('/api/korisnici/kordinatori')
        
        
        dispatch({
        
        
            type:KORISNICKI_KORDINATOR_SUCCESS,
            
            payload:data
        })
        
    } catch (error) {
        dispatch({

            type:KORISNICKI_KORDINATOR_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
        
    }







}



export const listKorisnici = (pageNumber='')=>async(dispatch,getState)=>{
   
   
    try {
        dispatch({
            type:KORISNICKI_LIST_REQUEST
        })
    

        const { korisnickiLogin:{userInfo}}=getState()
        const config={
    
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            }
        }
    
        const {data}=await axios.get(`/api/korisnici?pageNumber=${pageNumber}`,config)
        
    
        dispatch({
    
            type:KORISNICKI_LIST_SUCCESS,
            payload:data,
        })
    
 
        
    } catch (error) {
        dispatch({
    
            type:KORISNICKI_LIST_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    
    }
    
    
    
    }   

export const listKorisnicizaPrijave = ()=>async(dispatch,getState)=>{
   
   
    try {
        dispatch({
            type:KORISNICKI_LIST_REQUEST
        })
    

        const { korisnickiLogin:{userInfo}}=getState()
        const config={
    
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            }
        }
    
        const {data}=await axios.get(`/api/korisnici/prijave`,config)
        
    
        dispatch({
    
            type:KORISNICKI_LIST_SUCCESS,
            payload:data,
        })
    
 
        
    } catch (error) {
        dispatch({
    
            type:KORISNICKI_LIST_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    
    }
    
    
    
    }   

export const listKorisniciPrijave = ()=>async(dispatch,getState)=>{
   
   
    try {
        dispatch({
            type:KORISNICKI_LIST_PRIJAVE_REQUEST
        })
    

        const { korisnickiLogin:{userInfo}}=getState()
        const config={
    
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            }
        }
    
        const {data}=await axios.get(`/api/korisnici/prijave`,config)
        
    
        dispatch({
    
            type:KORISNICKI_LIST_PRIJAVE_SUCCESS,
            payload:data,
        })
    
 
        
    } catch (error) {
        dispatch({
    
            type:KORISNICKI_LIST_PRIJAVE_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    
    }
    
    
    
    }   

export const deleteKorisnici = (id)=>async(dispatch,getState)=>{
   
   
    try {
        dispatch({
            type:KORISNICKI_DELETE_REQUEST
        })
    

        const { korisnickiLogin:{userInfo}}=getState()
        const config={
    
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            }
        }
    
        await axios.delete(`/api/korisnici/${id}`,config)
        
    
        dispatch({
    
            type:KORISNICKI_DELETE_SUCCESS,
        
        })
    
 
        
    } catch (error) {
        dispatch({
    
            type:KORISNICKI_DELETE_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    
    }
    
    
    
    }   