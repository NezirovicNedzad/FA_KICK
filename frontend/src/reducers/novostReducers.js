import {NOVOST_LIST_REQUEST,NOVOST_LIST_SUCCESS,NOVOST_LIST_FAIL,NOVOST_BYID_REQUEST,NOVOST_BYID_FAIL,NOVOST_BYID_SUCCESS, NOVOST_DELETE_REQUEST, NOVOST_DELETE_FAIL, NOVOST_DELETE_SUCCESS,
NOVOST_CREATE_REQUEST,NOVOST_CREATE_FAIL,NOVOST_CREATE_SUCCESS,NOVOST_CREATE_RESET} from '../constants/novostConstants'



export const novostReducer= (state={novosti:[]},action)=>{

    //3 tipa akcije
  
    switch(action.type)
    {
      case NOVOST_LIST_REQUEST:
          return{loading:true,novosti:[]}
      case NOVOST_LIST_SUCCESS:
          return{loading:false,novosti:action.payload}
      case NOVOST_LIST_FAIL:
          return{loading:false,error:action.payload}
     default:
           return state
  
  
    }
  
  
  
  }  
export const novostByIDReducer= (state={novost:{}},action)=>{

    //3 tipa akcije
  
    switch(action.type)
    {
      case NOVOST_BYID_REQUEST:
          return{loading:true}
      case NOVOST_BYID_SUCCESS:
          return{loading:false,novost:action.payload}
      case NOVOST_BYID_FAIL:
          return{loading:false,error:action.payload}
     default:
           return state
  
  
    }
  
  
  
  }  


  export const novostDeleteReducer= (state={},action)=>{

    //3 tipa akcije
  
    switch(action.type)
    {
      case NOVOST_DELETE_REQUEST:
          return{loading:true}
      case NOVOST_DELETE_SUCCESS:
          return{loading:false,success:true}
      case NOVOST_DELETE_FAIL:
          return{loading:false,error:action.payload}
     default:
           return state
  
  
    }
  
  
  
  }

  export const novostCreateReducer= (state={},action)=>{

    //3 tipa akcije
  
    switch(action.type)
    {
      case NOVOST_CREATE_REQUEST:
          return{loading:true}
      case NOVOST_CREATE_SUCCESS:
          return{loading:false,success:true,novost:action.payload}
      case NOVOST_CREATE_FAIL:
          return{loading:false,error:action.payload}
      case NOVOST_CREATE_RESET:
          return{}
     default:
           return state
  
  
    }
  
  
  
  }
