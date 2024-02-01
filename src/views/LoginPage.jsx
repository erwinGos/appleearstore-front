import React from 'react';
import Navbar from '../components/Navbar';
import Login from '../components/Login';

import AnimatedPage from '../components/AnimatedPage';

const LoginPage = () => {
    return (
      <AnimatedPage>
          <Navbar />
          <Login />
      </AnimatedPage>
      );
    };
    
export default LoginPage;