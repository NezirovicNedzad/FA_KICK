import axios from "axios"
import { CAMP_CREATE_SUCCESS,CAMP_CREATE_REQUEST,CAMP_CREATE_FAIL,CAMP_LIST_REQUEST,
    CAMP_LIST_SUCCESS,CAMP_LIST_FAIL, CAMP_DETAILS_REQUEST, CAMP_DETAILS_SUCCESS,
     CAMP_DETAILS_FAIL, CAMP_DELETE_REQUEST, CAMP_DELETE_SUCCESS, CAMP_DELETE_FAIL,
    CAMP_UPDATE_REQUEST,CAMP_UPDATE_FAIL,CAMP_UPDATE_SUCCESS } from "../constants/campConstants"


export const listCamps=(keyword='') =>async(dispatch)=>{

    try {
        dispatch(
            {type:CAMP_LIST_REQUEST}
        )

        const {data}=await axios.get(`/api/kampovi?keyword=${keyword}`)
        dispatch(
            {type:CAMP_LIST_SUCCESS,
            
                payload:data}
            
        )
        
    } catch (error) {
        dispatch({

            type:CAMP_LIST_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    }



}

export const CampDetails=(id) =>async(dispatch)=>{

    try {
        dispatch(
            {type:CAMP_DETAILS_REQUEST}
        )

        const {data}=await axios.get(`/api/kampovi/${id}`)
        dispatch(
            {type:CAMP_DETAILS_SUCCESS,
            
                payload:data}
            
        )
        
    } catch (error) {
        dispatch({

            type:CAMP_DETAILS_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    }



}

export const CampDelete=(id) =>async(dispatch,getState)=>{

    try {
        dispatch(
            {type:CAMP_DELETE_REQUEST}
        )


        const { korisnickiLogin:{userInfo}}=getState()
        const config={
    
            headers:{
               
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        await axios.delete(`/api/kampovi/${id}`,config)
        dispatch(
            {type:CAMP_DELETE_SUCCESS}
            
        )
        
    } catch (error) {
        dispatch({

            type:CAMP_DELETE_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    }



}
export const CampCreate=() =>async(dispatch,getState)=>{

    try {
        dispatch(
            {type:CAMP_CREATE_REQUEST}
        )


        const { korisnickiLogin:{userInfo}}=getState()
        const config={
    
            headers:{
               
                Authorization:`Bearer ${userInfo.token}`
            }
        }
      const {data}=await axios.post(`/api/kampovi`,{},config)//passing a object,dont send data
        dispatch(
            {type:CAMP_CREATE_SUCCESS,
            payload:data}
            
        )
        
    } catch (error) {
        dispatch({

            type:CAMP_CREATE_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    }



}
export const CampUpdate=(camp) =>async(dispatch,getState)=>{

    try {
        dispatch(
            {type:CAMP_UPDATE_REQUEST}
        )


        const { korisnickiLogin:{userInfo}}=getState()
        const config={
    
            headers:{
               'Content-Type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }
      const {data}=await axios.put(`/api/kampovi/${camp._id}`,camp,config)//passing a object,dont send data
        dispatch(
            {type:CAMP_UPDATE_SUCCESS,
            payload:data}
            
        )
        
    } catch (error) {
        dispatch({

            type:CAMP_UPDATE_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    }



}