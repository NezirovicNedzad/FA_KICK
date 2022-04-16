import axios from "axios";
import { NOVOST_BYID_FAIL, NOVOST_BYID_REQUEST, NOVOST_BYID_SUCCESS, NOVOST_CREATE_FAIL, NOVOST_CREATE_REQUEST, NOVOST_CREATE_SUCCESS, NOVOST_DELETE_FAIL, NOVOST_DELETE_REQUEST, NOVOST_DELETE_SUCCESS, NOVOST_LIST_FAIL, NOVOST_LIST_REQUEST, NOVOST_LIST_SUCCESS } from "../constants/novostConstants";


export const listNovosti = () =>async(dispatch)=>{

try {
    

    dispatch({

        type:NOVOST_LIST_REQUEST
    })

    const {data}= await axios.get('/api/novosti')

    dispatch({
        type:NOVOST_LIST_SUCCESS,
        payload:data
    })
} catch (error) {
 
    dispatch({


        type:NOVOST_LIST_FAIL,
        payload:
        error && error.response.data.message ?
        error.response.data.message : error.message
    })
}



}

export const NovostiDetails = (id) =>async(dispatch)=>{

try {
    

    dispatch({

        type:NOVOST_BYID_REQUEST
    })

    const {data}= await axios.get(`/api/novosti/${id}`)

    dispatch({
        type:NOVOST_BYID_SUCCESS,
        payload:data
    })
} catch (error) {
 
    dispatch({


        type:NOVOST_BYID_FAIL,
        payload:
        error && error.response.data.message ?
        error.response.data.message : error.message
    })
}



}


export const NovostDelete=(id) =>async(dispatch,getState)=>{

    try {
        dispatch(
            {type:NOVOST_DELETE_REQUEST}
        )


        const { korisnickiLogin:{userInfo}}=getState()
        const config={
    
            headers:{
               
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        await axios.delete(`/api/novosti/${id}`,config)
        dispatch(
            {type:NOVOST_DELETE_SUCCESS}
            
        )
        
    } catch (error) {
        dispatch({

            type:NOVOST_DELETE_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    }



}



export const novostiKreiraj=(naslov,kratkitext,slika,text)=>async(dispatch,getState)=>{
    try {
        dispatch({
            type:NOVOST_CREATE_REQUEST
        })
        
        const { korisnickiLogin:{userInfo}}=getState()
    
        const config={
    
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }
    
        const {data}=await axios.post('/api/novosti',
        {naslov,kratkitext,slika,text},config)
    
        dispatch({
    
            type:NOVOST_CREATE_SUCCESS,
            payload:data
        })
    
       
    
        
    } catch (error) {
        dispatch({
    
            type:NOVOST_CREATE_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    
    }
    
    
    
    }