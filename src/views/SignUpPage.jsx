import React from 'react';
import Navbar from '../components/Navbar';
import SignUp from '../components/SignUp';
import Footer from '../components/Footer';

import AnimatedPage from '../components/AnimatedPage';

const SignUpPage = () => {
    return (
      <AnimatedPage>
          <Navbar />
          <SignUp />
          <Footer />
      </AnimatedPage>
      );
    };
    
export default SignUpPage;