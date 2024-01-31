import React from 'react';
import Navbar from '../components/Navbar';
import SignUp from '../components/SignUp';

import AnimatedPage from '../components/AnimatedPage';

const SignUpPage = () => {
    return (
      <AnimatedPage>
          <Navbar />
          <SignUp />
      </AnimatedPage>
      );
    };
    
export default SignUpPage;