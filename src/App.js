import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import LoginPage from './views/LoginPage';
import SignupPage from './views/SignUpPage';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';


import { useDispatch } from 'react-redux';
import { checkAuthUser } from './features/user/UserSlice';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import ProtectedRoute from './components/ProtectedRoute';

import './App.scss';
import { GetAllCart } from './features/product/ProductSlice';

import ProductPage from './views/ProductPage';
function App() {
  const dispatch = useDispatch();
  dispatch(checkAuthUser());
  dispatch(GetAllCart());
  return (
    <BrowserRouter>
      <Navbar />
          <Routes>
              <Route path='/shoppingcart' element={<ProtectedRoute>
                  <ShoppingCart />
              </ProtectedRoute>} />
              <Route path="/" Component={Home} />
              <Route path="/login" Component={LoginPage} />
              <Route path="/signup" Component={SignupPage} />
              <Route path='/productdetails/:id' Component={ProductPage} />
          </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
