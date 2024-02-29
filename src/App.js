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
              <Route path='/productdetails/:id' Component={ProductPage} />
            <Route path='/catalog/:categoryName?' Component={Catalog} />
          </Routes>
      <Footer />
    </BrowserRouter> : null
  );
}

export default App;
