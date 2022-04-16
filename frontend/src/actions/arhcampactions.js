import axios from "axios"
import { ARHCAMP_CREATE_SUCCESS,ARHCAMP_CREATE_FAIL,ARHCAMP_CREATE_REQUEST, ARHCAMP_LIST_REQUEST, ARHCAMP_LIST_SUCCESS, ARHCAMP_LIST_FAIL, ARHCAMP_BYID_REQUEST, ARHCAMP_BYID_SUCCESS, ARHCAMP_BYID_FAIL,ARHCAMP_CREATE_REVIEW_REQUEST,ARHCAMP_CREATE_REVIEW_SUCCESS,ARHCAMP_CREATE_REVIEW_FAIL} from "../constants/arhiviraniCampConstants"



export const  ArhiviraniKreiraj=(tip,koordinatorId,slika,opis,text,datum_pocetka,datum_zavrsetka )=>async(dispatch,getState)=>{
    try {
        dispatch({
            type:ARHCAMP_CREATE_REQUEST
        })
    

        
        const { korisnickiLogin:{userInfo}}=getState()
        const config={
    
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }

    
        const {data}=await axios.post('/api/arhivirani',
        {  tip,koordinatorId,slika,opis,text,datum_pocetka,datum_zavrsetka},config)
    
        dispatch({
    
            type:ARHCAMP_CREATE_SUCCESS,
            payload:data
        })
    
      
    
        
    } catch (error) {
        dispatch({
    
            type:ARHCAMP_CREATE_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    
    }
}

export const listArhCamps=() =>async(dispatch)=>{

    try {
        dispatch(
            {type:ARHCAMP_LIST_REQUEST}
        )
    
        const {data}=await axios.get('/api/arhivirani')
        dispatch(
            {type:ARHCAMP_LIST_SUCCESS,
            
                payload:data}
            
        )
        
    } catch (error) {
        dispatch({

            type:ARHCAMP_LIST_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    }
}


export const ArhCampDetails=(id) =>async(dispatch)=>{

    try {
        dispatch(
            {type:ARHCAMP_BYID_REQUEST}
        )

        const {data}=await axios.get(`/api/arhivirani/${id}`)
        dispatch(
            {type:ARHCAMP_BYID_SUCCESS,
            
                payload:data}
            
        )
        
    } catch (error) {
        dispatch({

            type:ARHCAMP_BYID_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    }



}



export const createArhReview=(arhid,review) =>async(dispatch,getState)=>{

    try {
        dispatch(
            {type:ARHCAMP_CREATE_REVIEW_REQUEST}
        )


        const { korisnickiLogin:{userInfo}}=getState()
        const config={
    
            headers:{
               'Content-Type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }
    await axios.post(`/api/arhivirani/${arhid}/reviews/`,review,config)//passing a object,dont send data
        dispatch(
            {type:ARHCAMP_CREATE_REVIEW_SUCCESS,
            }
            
        )
        
    } catch (error) {
        dispatch({

            type:ARHCAMP_CREATE_REVIEW_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    }



}
