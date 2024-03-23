import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


// Views
import Home from './views/Home';
import LoginPage from './views/LoginPage';
import SignupPage from './views/SignUpPage';
import ProductPage from './views/ProductPage';
import Catalog from './views/Catalog';

// Redux slices
import { checkAuthUser } from './features/user/UserSlice';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import ProtectedRoute from './components/ProtectedRoute';
import ProtectAuth from './components/ProtectAuth';

import ShoppingCart from './components/ShoppingCart/ShoppingCart';



import './App.scss';
import { GetAllCart } from './features/product/ProductSlice';
import Profile from './views/Profile';

import PersonalInformations from './components/Profile/PersonalInformations';
import Vouchers from './components/Profile/Vouchers/Vouchers';
import Address from './components/Profile/Addresses/Address';
import Orders from './components/Profile/Orders/Orders';
import Returns from './components/Profile/Returns/Returns';
import Tickets from './components/Profile/Tickets/Tickets';
import SuccessPaymentPage from './views/SuccessPaymentPage';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  useEffect(() => {
    dispatch(checkAuthUser());
    dispatch(GetAllCart());
  }, [])
  return (
    user.isAuth != null ?
    <BrowserRouter>
      <Navbar />
          <Routes>
              <Route path='/shoppingcart' 
              element={
                <ProtectedRoute>
                  <ShoppingCart />
                </ProtectedRoute>}/>

              <Route path="/" Component={Home} />

              <Route path="/login" 
              element={
                <ProtectAuth>
                  <LoginPage/>
                </ProtectAuth>}/>

              <Route path="/signup" 
              element={
                <ProtectAuth>
                  <SignupPage/>
                </ProtectAuth>}/>
              


              {/* Profile */}
              <Route path='/profile/personal-settings' element={<ProtectedRoute><Profile content={<PersonalInformations/>}/></ProtectedRoute>} />
              <Route path='/profile/vouchers' element={<ProtectedRoute><Profile content={<Vouchers/>}/></ProtectedRoute>} />
              <Route path='/profile/addresses' element={<ProtectedRoute><Profile content={<Address/>}/></ProtectedRoute>} />
              <Route path='/profile/orders' element={<ProtectedRoute><Profile content={<Orders/>}/></ProtectedRoute>} />
              <Route path='/profile/returns' element={<ProtectedRoute><Profile content={<Returns/>}/></ProtectedRoute>} />
              <Route path='/profile/tickets' element={<ProtectedRoute><Profile content={<Tickets/>}/></ProtectedRoute>} />




              <Route path='/productdetails/:productId' Component={ProductPage} />
              <Route path='/catalog/:categoryName?' Component={Catalog} />
              <Route path='/ordersuccesspayment/:orderNumber?' Component={SuccessPaymentPage} />
          </Routes>
      <Footer />
    </BrowserRouter> : null
  );
}

export default App;
