import './App.css';
import Home from './components/Home';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDetail from './components/product/ProductDetail';
import ProductSearch from './components/product/ProductSearch';
import Login from './components/user/Login';
import Register from './components/user/Register';
import { useEffect} from 'react';
import store from './store';
import { loadUser } from './actions/userActions';
import Profile from './components/user/Profile';
import ProtectedRoute from './components/route/ProtectedRoute';
import UpdateProfile from './components/user/UpdateProfile';
import UpdatePassword from './components/user/UpdatePassword';
import ForgotPassword from './components/user/ForgotPassword';
import ResetPassword from './components/user/ResetPassword';
import Cart from './components/cart/Cart';
import Designers from './components/Designers';
import About from './About';
import DesignerForm from './components/DesignerForm';
// import FilterIteam from './components/FilterIteam';
import SliderHome from './components/SliderHome';
import Searchproducts from './components/product/Searchproducts';
import PageNotFound from './PageNotFound';

function App() {

  useEffect(() => {
    store.dispatch(loadUser)
  },[])

  return (
    <Router>
      <div className="App">
        <HelmetProvider>
        
                <div>
                  <ToastContainer theme='dark' />
                  <Routes>
                      <Route path='/' element={<Home/>} />
                      <Route path='/search/:keyword' element={<Searchproducts />} />
                      <Route path='/about' element={<About />} />
                      {/* <Route path='/multi' element={<FilterIteam />} /> */}
                      <Route path='/joinus' element={<DesignerForm />} />
                      <Route path='/search/:keyword' element={<ProductSearch/>} />
                      <Route path='/alldesigners' element={<Designers />} />
                      <Route path='/slider' element={<SliderHome />} />
                      <Route path='/alldesigners/:id' element={<ProductDetail/>} />
                      <Route path='/login' element={<Login/>} />
                      <Route path='/register' element={<Register/>} />
                      <Route path='/myprofile' element={<ProtectedRoute><Profile/></ProtectedRoute> } />
                      {/* <Route path='/myprofilesample' element={<Profile/> } /> */}
                      <Route path='/myprofile/update' element={<ProtectedRoute><UpdateProfile/></ProtectedRoute> } />
                      <Route path='/myprofile/update/password' element={<ProtectedRoute><UpdatePassword/></ProtectedRoute> } />
                      <Route path='/password/forgot' element={<ForgotPassword/> } />
                      <Route path='/password/reset/:token' element={<ResetPassword/> } />
                      <Route path='/saved' element={<Cart/> } />
                      <Route path='*' element={<PageNotFound /> } />
                 
                  </Routes>
                </div>
    
            <Footer/>
        </HelmetProvider>
      </div>
    </Router>
  );
}

export default App;
