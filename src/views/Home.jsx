import React from 'react';
import Navbar from '../components/Navbar';
import PrimaryHomeSection from '../components/PrimaryHomeSection';

import AnimatedPage from '../components/AnimatedPage';

const Home = () => {
    return (
        <AnimatedPage>
          <Navbar />
          <PrimaryHomeSection />
        </AnimatedPage>
      );
    };
    
export default Home;