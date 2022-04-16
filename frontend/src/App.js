import{BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from './components/Header';
import Onama from "./Screens/Onama";
import Footer from "./components/Footer";
import LoginScreen from './Screens/LoginScreen';
import Kampovi from './Screens/Kampovi';
import RegisterScreen from './Screens/RegisterScreen'
import ProfilScreen from './Screens/ProfilScreen'; 
import UpdateScreen from './Screens/UpdateScreen';
import Kampdetalji from './Screens/Kampdetalji';
import ListaKorisnika from './Screens/ListaKorisnika';
import ListaKampova from './Screens/ListaKampova';
import CampEditScreen from './Screens/EditCamp';
import PrijavaDetalji from './Screens/PrijavaDetalji';
import KampPrijaveDetalji from './Screens/KampPrijaveDetalji';
import Novostdetails from './Screens/Novostdetails';
import ListNovosti from './Screens/ListNovosti'
import VerifyScreen from './Screens/verifyScreen';
import NovostCreateScreen from './Screens/NovostCreateScreen';
import ArhiviraniScreen from './Screens/ArhiviraniScreen';
import OceniScreen from './Screens/OceniScreen'
import ForgetScreen from './Screens/ForgetPassScreen';
import ResetPasswordScreen from './Screens/ResetPaswordScreen';
import Objekti from './Screens/Objekti';

const App =() => {
  return (
    <Router>
    <Header/>
    <main  >
    <Routes>
  
      
      
      
      <Route path='/kampovi' element={<Kampovi/>}/>
      <Route path='/profil' element={<ProfilScreen/>}/>
      <Route path='/objekti' element={<Objekti/>}/>
      <Route path='/profil/update' element={<UpdateScreen/>}/>
      <Route path='/kamp/:id' element={<Kampdetalji />}/>
      <Route path='/register' element={<RegisterScreen/>}/>
      <Route path='/admin/listakorisnika' element={<ListaKorisnika/>}/>
      <Route path='/admin/listakampova' element={<ListaKampova/>}/>
      <Route path='/admin/listanovosti' element={<ListNovosti/>}/>
      <Route path='/admin/listanovosti/kreiraj' element={<NovostCreateScreen/>}/>
      <Route path='/admin/kamp/:id/edit' element={<CampEditScreen/>}/>
      <Route path='/arhivirani/:id' element={<ArhiviraniScreen/>}/>
      
      <Route path='/login'  element={<LoginScreen/>}/>
      
      <Route path='/login/verify-email'  element={<VerifyScreen/>}/>
      <Route path='/' element={<Onama/>} exact/>
      <Route path='/admin/listakorisnika/page/:pageNumber' element={<ListaKorisnika/>} />
      <Route path='/search/:keyword' element={<Onama/>} exact/>
      <Route path='/profil/prijave/:id/:kampId' element={<PrijavaDetalji/>}></Route>
      <Route path='/profil/prijave/:id/:kampId/page/:pageNumber' element={<PrijavaDetalji/>}></Route>
      <Route path='/novosti/:id' element={<Novostdetails/>}/>
      <Route path='/kamp/prijave/:id/page/:pageNumber' element={<KampPrijaveDetalji/>}/>
      <Route path='/kamp/prijave/:id' element={<KampPrijaveDetalji/>}/>
      <Route path='/kamp/prijave/:id/ocene' element={<OceniScreen/>}/>
      <Route path='/forgotPassword' element={<ForgetScreen></ForgetScreen>}></Route>
      <Route path='/login/reset-password' element={<ResetPasswordScreen></ResetPasswordScreen>} />
      
   </Routes>
    </main>
    <Footer/>
    </Router>
  );
}

export default App;
