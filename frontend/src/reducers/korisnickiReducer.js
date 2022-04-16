import { KORISNCIKI_LOGOUT, KORISNICKI_DELETE_FAIL, KORISNICKI_DELETE_REQUEST, KORISNICKI_DELETE_SUCCESS, KORISNICKI_DETAILS_FAIL, KORISNICKI_DETAILS_REQUEST, KORISNICKI_DETAILS_SUCCESS, KORISNICKI_FORGOT_PASSWORD_FAIL, KORISNICKI_FORGOT_PASSWORD_REQUEST, KORISNICKI_FORGOT_PASSWORD_RESET, KORISNICKI_FORGOT_PASSWORD_SUCCESS, KORISNICKI_KORDINATOR_FAIL, KORISNICKI_KORDINATOR_REQUEST, KORISNICKI_KORDINATOR_SUCCESS, KORISNICKI_LIST_FAIL, KORISNICKI_LIST_PRIJAVE_FAIL, KORISNICKI_LIST_PRIJAVE_REQUEST, KORISNICKI_LIST_PRIJAVE_SUCCESS, KORISNICKI_LIST_REQUEST, KORISNICKI_LIST_SUCCESS, KORISNICKI_LOGIN_FAIL, KORISNICKI_LOGIN_REQUEST, KORISNICKI_LOGIN_SUCCESS, KORISNICKI_REGISTER_FAIL, KORISNICKI_REGISTER_REQUEST, KORISNICKI_REGISTER_SUCCESS, KORISNICKI_RESETP_FAIL, KORISNICKI_RESETP_REQUEST, KORISNICKI_RESETP_RESET, KORISNICKI_RESETP_SUCCESS, KORISNICKI_UPDATE_FAIL, KORISNICKI_UPDATE_REQUEST, KORISNICKI_UPDATE_RESET, KORISNICKI_UPDATE_SUCCESS, KORISNICKI_VERIFY_FAIL, KORISNICKI_VERIFY_REQUEST, KORISNICKI_VERIFY_RESET, KORISNICKI_VERIFY_SUCCESS } from "../constants/korisnickeConstants"

export const korisnickiLoginReducers= (state={},action)=>{

    //3 tipa akcije
  
    switch(action.type)
    {
      case KORISNICKI_LOGIN_REQUEST:
          return{loading:true}
      case KORISNICKI_LOGIN_SUCCESS:
          return{loading:false,userInfo:action.payload}
      case KORISNICKI_LOGIN_FAIL:
          return{loading:false,error:action.payload}
      case KORISNCIKI_LOGOUT:
          return{}
     default:
           return state
  
  
    }
}
  
export const korisnickiRegisterReducers =  (state ={},action) =>{

    //3 tipa akcije
  
    switch(action.type)
    {
      case KORISNICKI_REGISTER_REQUEST:
          return{loading:true}
      case KORISNICKI_REGISTER_SUCCESS:
          return{loading:false,success:true,userInfo:action.payload}
      case KORISNICKI_REGISTER_FAIL:
          return{loading:false,error:action.payload}
     
     default:
           return state
  
  
    }
  
  
  
  }  
  
  
export const korisnickiVerifyReducers =  (state ={},action) =>{

    //3 tipa akcije
  
    switch(action.type)
    {
      case KORISNICKI_VERIFY_REQUEST:
          return{loading:true}
      case KORISNICKI_VERIFY_SUCCESS:
          return{loading:false,success:true}
      case KORISNICKI_VERIFY_FAIL:
          return{loading:false,error:action.payload}
      case KORISNICKI_VERIFY_RESET:
          return{}
     
     default:
           return state
  
  
    }
  
  
  
  }  

  export const ResetPasswordReducer = (state ={},action)=>{

    //3 tipa akcije
  
    switch(action.type)
    {
      case KORISNICKI_RESETP_REQUEST:
          return{loading:true}
      case KORISNICKI_RESETP_SUCCESS:
          return{loading:false,success:true}
      case KORISNICKI_RESETP_FAIL:
          return{loading:false,error:action.payload}
     
      case KORISNICKI_RESETP_RESET:
          return {}
     
     default:
           return state
  
  
    }
  
  
  
  }  
  
  export const ForgetPasswordReducer = (state ={},action)=>{

    //3 tipa akcije
  
    switch(action.type)
    {
      case KORISNICKI_FORGOT_PASSWORD_REQUEST:
          return{loading:true}
      case KORISNICKI_FORGOT_PASSWORD_SUCCESS:
          return{loading:false,success:true}
      case KORISNICKI_FORGOT_PASSWORD_FAIL:
          return{loading:false,error:action.payload}
     
      case KORISNICKI_FORGOT_PASSWORD_RESET:
          return {}
     
     default:
           return state
  
  
    }
  
  
  
  }  
  
export const korisnickDetaljiReducer = (state ={user:{}},action)=>{

    //3 tipa akcije
  
    switch(action.type)
    {
      case KORISNICKI_DETAILS_REQUEST:
          return{...state,loading:true}
      case KORISNICKI_DETAILS_SUCCESS:
          return{loading:false,user:action.payload}
      case KORISNICKI_DETAILS_FAIL:
          return{loading:false,error:action.payload}
     
     default:
           return state
  
  
    }
  
  
  
  }  
  
export const korisnickUpdateReducer = (state ={},action)=>{

    //3 tipa akcije
  
    switch(action.type)
    {
      case KORISNICKI_UPDATE_REQUEST:
          return{loading:true}
      case KORISNICKI_UPDATE_SUCCESS:
          return{loading:false,success:true,userInfo:action.payload}
      case KORISNICKI_UPDATE_FAIL:
          return{loading:false,error:action.payload}
     
      case KORISNICKI_UPDATE_RESET:
          return {}
     
     default:
           return state
  
  
    }
  
  
  
  }  

  export const kordinatoriListaReducer = (state={kordinatori:[]},action)=>{

        switch(action.type)

        {
            case KORISNICKI_KORDINATOR_REQUEST:
                return{loading:true,kordinatori:[]}
            case KORISNICKI_KORDINATOR_SUCCESS:
                return{loading:false,kordinatori:action.payload}
            case KORISNICKI_KORDINATOR_FAIL:
                return{loading:false,error:action.payload}
           default:
                 return state
      

            
        }






  }
  
  export const korisniciListaReducer = (state={korisnici:[]},action)=>{

        switch(action.type)

        {
            case KORISNICKI_LIST_REQUEST:
                return{loading:true}
            case KORISNICKI_LIST_SUCCESS:
                return{loading:false,korisnici:action.payload.users,pages:action.payload.pages,page:action.payload.page}
            case KORISNICKI_LIST_FAIL:
                return{loading:false,error:action.payload}
            
           default:
                 return state
      

            
        }






  }
  
  export const korisniciListazaKampReducer = (state={korisnici:[]},action)=>{

        switch(action.type)

        {
            case KORISNICKI_LIST_PRIJAVE_REQUEST:
                return{loading:true}
            case KORISNICKI_LIST_PRIJAVE_SUCCESS:
                return{loading:false,korisnici:action.payload.users,count:action.payload.count}
            case KORISNICKI_LIST_PRIJAVE_FAIL:
                return{loading:false,error:action.payload}
            
           default:
                 return state
      

            
        }






  }
  
  export const korisniciDeleteReducer = (state={},action)=>{

        switch(action.type)

        {
            case KORISNICKI_DELETE_REQUEST:
                return{loading:true}
            case KORISNICKI_DELETE_SUCCESS:
                return{loading:false,success:true}
            case KORISNICKI_DELETE_FAIL:
                return{loading:false,error:action.payload}
           default:
                 return state
      

            
        }






  }
  
