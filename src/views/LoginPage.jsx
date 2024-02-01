import React from 'react';
import Navbar from '../components/Navbar';
import Login from '../components/Login';
import Footer from '../components/Footer';

import AnimatedPage from '../components/AnimatedPage';

const LoginPage = () => {
    return (
      <AnimatedPage>
          <Navbar />
          <Login />
          <Footer />
      </AnimatedPage>
      );
    };
    
export default LoginPage;