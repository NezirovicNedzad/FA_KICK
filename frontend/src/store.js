
import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { campListReducers,campDetailsReducers,campDeleteReducer,campCreateReducer,campUpdateReducer } from './reducers/campsReducers'

import { novostByIDReducer, novostCreateReducer, novostDeleteReducer, novostReducer } from './reducers/novostReducers'
import { korisnickiLoginReducers,korisnickiRegisterReducers,korisnickDetaljiReducer,korisnickUpdateReducer, kordinatoriListaReducer,korisniciListaReducer,korisniciDeleteReducer, korisniciListazaKampReducer, korisnickiVerifyReducers, ForgetPasswordReducer,ResetPasswordReducer } from './reducers/korisnickiReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import {arhCampCreateReducer, arhCampDetailsReducers, arhCampListReducers, CreateReviewReducer} from "./reducers/arhcampReducers"
import { prijavaByIdReducer, prijaveKreirajReducer,prijaveListReducer,prijaveDeleteReducer, CreateOcenaReducer, prijavazaKampReducer, prijavazaKorisnikeReducer, prijavaZaKampReducer } from './reducers/prijaveReducers'

const reducer=combineReducers({


campList:campListReducers,
campDetails:campDetailsReducers,
campDelete:campDeleteReducer,
campCreate:campCreateReducer,
campUpdate:campUpdateReducer,
korisnickiLogin:korisnickiLoginReducers,
korisnickiRegister:korisnickiRegisterReducers,
korisnickiKordinator:kordinatoriListaReducer,
korisnickiDetalji:korisnickDetaljiReducer,
korisnickiUpdate:korisnickUpdateReducer,
novostList:novostReducer,
novostDetails:novostByIDReducer,
novostDelete:novostDeleteReducer,
novostCreate:novostCreateReducer,
korisniciLista:korisniciListaReducer,
korisniciDelete:korisniciDeleteReducer,
korisnicizaPrijave:korisniciListazaKampReducer,
korisniciVerify:korisnickiVerifyReducers,
korisniciForgot:ForgetPasswordReducer,
korisniciReset:ResetPasswordReducer,
prijaveKreiraj:prijaveKreirajReducer,
prijaveList:prijaveListReducer,
prijaveDetalji:prijavaByIdReducer,
prijaveDelete:prijaveDeleteReducer,
prijavaOceni:CreateOcenaReducer,
prijavaKamp:prijavazaKampReducer,
prijavasviKorisnici:prijavazaKorisnikeReducer,
prijavazaKamp:prijavaZaKampReducer,
arhiviraniCreate:arhCampCreateReducer,
arhiviraniList:arhCampListReducers,
arhiviraniDetails:arhCampDetailsReducers,
arhiviraniReview:CreateReviewReducer,

})


const userInfoFromStorage=
localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')):null

const initialState={

korisnickiLogin:{userInfo:userInfoFromStorage}
 
}
const middleaware=[thunk]


const store=createStore(reducer,initialState,
    composeWithDevTools(applyMiddleware(...middleaware)))



    export default store;