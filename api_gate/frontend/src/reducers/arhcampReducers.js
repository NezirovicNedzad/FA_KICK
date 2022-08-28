import {ARHCAMP_CREATE_FAIL,ARHCAMP_CREATE_REQUEST,ARHCAMP_CREATE_SUCCESS,ARHCAMP_CREATE_RESET,ARHCAMP_LIST_REQUEST,ARHCAMP_LIST_FAIL,ARHCAMP_LIST_SUCCESS, ARHCAMP_BYID_REQUEST, ARHCAMP_BYID_SUCCESS, ARHCAMP_BYID_FAIL, ARHCAMP_CREATE_REVIEW_REQUEST, ARHCAMP_CREATE_REVIEW_SUCCESS, ARHCAMP_CREATE_REVIEW_FAIL, ARHCAMP_CREATE_REVIEW_RESET} from "../constants/arhiviraniCampConstants"




export const arhCampCreateReducer= (state={},action)=>{

    //3 tipa akcije
  
    switch(action.type)
    {
      case ARHCAMP_CREATE_REQUEST:
          return{loading:true}
      case ARHCAMP_CREATE_SUCCESS:
          return{loading:false,success:true,arhcamp:action.payload}
      case ARHCAMP_CREATE_FAIL:
          return{loading:false,error:action.payload}
      case ARHCAMP_CREATE_RESET:
          return{}
     default:
           return state
  
  
    }
  
  
  
  }

  
export const arhCampListReducers= (state={acamps:[]},action)=>{

    //3 tipa akcije
  
    switch(action.type)
    {
      case ARHCAMP_LIST_REQUEST:
          return{loading:true,acamps:[]}
      case ARHCAMP_LIST_SUCCESS:
          return{loading:false,acamps:action.payload}
      case ARHCAMP_LIST_FAIL:
          return{loading:false,error:action.payload}
     default:
           return state
  
  
    }
  
  } 

  export const arhCampDetailsReducers= (state={acamp:{reviews:[]}},action)=>{

    //3 tipa akcije
  
    switch(action.type)
    {
      case ARHCAMP_BYID_REQUEST:
          return{loading:true,...state}
      case ARHCAMP_BYID_SUCCESS:
          return{loading:false,acamp:action.payload}
      case ARHCAMP_BYID_FAIL:
          return{loading:false,error:action.payload}
     default:
           return state
  
  
    }
  
  
  
  }

  export const CreateReviewReducer= (state={},action)=>{

    //3 tipa akcije
  
    switch(action.type)
    {
      case ARHCAMP_CREATE_REVIEW_REQUEST:
          return{loading:true}
      case ARHCAMP_CREATE_REVIEW_SUCCESS:
          return{loading:false,success:true}
      case ARHCAMP_CREATE_REVIEW_FAIL:
          return{loading:false,error:action.payload}
      case ARHCAMP_CREATE_REVIEW_RESET:
          return{

          }
     default:
           return state
  
  
    }
  
  
  
  }