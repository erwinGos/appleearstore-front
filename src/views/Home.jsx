import React from 'react';
import Navbar from '../components/Navbar';
import PrimaryHomeSection from '../components/PrimaryHomeSection';
import SecondaryHomeSection from '../components/SecondaryHomeSection';
import ThirdHomeSection from '../components/ThirdHomeSection';
import Footer from '../components/Footer';

import AnimatedPage from '../components/AnimatedPage';

const Home = () => {
    return (
        <AnimatedPage>
          <Navbar />
          <PrimaryHomeSection />
          <SecondaryHomeSection />
          <ThirdHomeSection />
          <Footer />
        </AnimatedPage>
      );
    };
    
export default Home;