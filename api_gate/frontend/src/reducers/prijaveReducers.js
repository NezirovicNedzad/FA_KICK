import {CREATE_OCENA_FAIL, CREATE_OCENA_REQUEST, CREATE_OCENA_RESET, CREATE_OCENA_SUCCESS, PRIJAVE_BYID_FAIL, PRIJAVE_BYID_REQUEST, PRIJAVE_BYID_SUCCESS, PRIJAVE_DELETE_FAIL, PRIJAVE_DELETE_REQUEST, PRIJAVE_DELETE_RESET, PRIJAVE_DELETE_SUCCESS, PRIJAVE_KREIRAJ_FAIL,PRIJAVE_KREIRAJ_REQUEST,PRIJAVE_KREIRAJ_RESET,PRIJAVE_KREIRAJ_SUCCESS, 
    PRIJAVE_LIST_FAIL, PRIJAVE_LIST_REQUEST, PRIJAVE_LIST_SUCCESS,PRIJAVE_KAMPBYID_REQUEST,PRIJAVE_KAMPBYID_SUCCESS,PRIJAVE_KAMPBYID_FAIL, PRIJAVE_KORISNICI_FAIL, PRIJAVE_KORISNICI_REQUEST
,PRIJAVE_KORISNICI_SUCCESS,
PRIJAVE_ZAKAMP_FAIL,
PRIJAVE_ZAKAMP_SUCCESS,
PRIJAVE_ZAKAMP_REQUEST,
DELETE_OCENA_RESET,
DELETE_OCENA_SUCCESS,
DELETE_OCENA_REQUEST,
DELETE_OCENA_FAIL} from '../constants/prijaveConstants'

export const prijaveKreirajReducer =(state={},action) =>{


   switch(action.type)
   {

   case PRIJAVE_KREIRAJ_REQUEST:
       return{loading:true}
   case PRIJAVE_KREIRAJ_SUCCESS:
       return{loading:false,success:true,prijave:action.payload}
   case PRIJAVE_KREIRAJ_FAIL:
       return{loading:false,fail:true,error:action.payload}
   case PRIJAVE_KREIRAJ_RESET:
       return {}
    default:
        return state   

   }

}
export const prijaveListReducer =(state={prijave:[]},action) =>{


   switch(action.type)
   {

   case PRIJAVE_LIST_REQUEST:
       return{loading:true,prijave:[]}
   case PRIJAVE_LIST_SUCCESS:
       return{loading:false,prijave:action.payload}
   case PRIJAVE_LIST_FAIL:
       return{loading:false,error:action.payload}
    default:
        return state   

   }

}

export const prijavaByIdReducer =(state={prijava:{ocene:[]}},action) =>{


   switch(action.type)
   {

   case PRIJAVE_BYID_REQUEST:
       return{loading:true,...state}
   case PRIJAVE_BYID_SUCCESS:
       return{loading:false,prijava:action.payload}
   case PRIJAVE_BYID_FAIL:
       return{loading:false,error:action.payload}
    default:
        return state   

   }

}

export const prijavazaKampReducer =(state={prijave:[]},action) =>{


   switch(action.type)
   {

   case PRIJAVE_KAMPBYID_REQUEST:
       return{loading:true,...state}
   case PRIJAVE_KAMPBYID_SUCCESS:
       return{loading:false,prijave:action.payload.prijave,pages:action.payload.pages,page:action.payload.page,count:action.payload.count}
   case PRIJAVE_KAMPBYID_FAIL:
       return{loading:false,error:action.payload}
    default:
        return state   

   }

}
export const prijavaZaKampReducer =(state={prijave:[]},action) =>{


   switch(action.type)
   {

   case PRIJAVE_ZAKAMP_REQUEST:
       return{loading:true,...state}
   case PRIJAVE_ZAKAMP_SUCCESS:
       return{loading:false,prijave:action.payload.prijave,count:action.payload.count}
   case PRIJAVE_ZAKAMP_FAIL:
       return{loading:false,error:action.payload}
    default:
        return state   

   }

}
export const prijavazaKorisnikeReducer =(state={prijave:[]},action) =>{


   switch(action.type)
   {

   case PRIJAVE_KORISNICI_REQUEST:
       return{loading:true,...state}
   case PRIJAVE_KORISNICI_SUCCESS:
       return{loading:false,prijave:action.payload.prijave,pages:action.payload.pages,page:action.payload.page,count:action.payload.count}
   case PRIJAVE_KORISNICI_FAIL:
       return{loading:false,error:action.payload}
    default:
        return state   

   }

}




export const prijaveDeleteReducer = (state={},action)=>{

    switch(action.type)

    {
        case PRIJAVE_DELETE_REQUEST:
            return{loading:true}
        case PRIJAVE_DELETE_SUCCESS:
            return{loading:false,success:true}
        case PRIJAVE_DELETE_FAIL:
            return{loading:false,error:action.payload}
        case PRIJAVE_DELETE_RESET:
            return{}
       default:
             return state
  

        
    }



}

export const CreateOcenaReducer= (state={},action)=>{

    //3 tipa akcije
  
    switch(action.type)
    {
      case CREATE_OCENA_REQUEST:
          return{loading:true}
      case CREATE_OCENA_SUCCESS:
          return{loading:false,success:true}
      case CREATE_OCENA_FAIL:
          return{loading:false,error:action.payload}
      case CREATE_OCENA_RESET:
          return{

          }
     default:
           return state
  
  
    }
  
  
  
  }

export const DeleteOcenaReducer= (state={},action)=>{

    //3 tipa akcije
  
    switch(action.type)
    {
      case DELETE_OCENA_REQUEST:
          return{loading:true}
      case DELETE_OCENA_SUCCESS:
          return{loading:false,success:true}
      case DELETE_OCENA_FAIL:
          return{loading:false,error:action.payload}
      case DELETE_OCENA_RESET:
          return{

          }
     default:
           return state
  
  
    }
  
  
  
  }

