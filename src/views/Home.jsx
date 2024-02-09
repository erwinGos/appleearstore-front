import React from 'react';
import Navbar from '../components/Navbar';
import PrimaryHomeSection from '../components/PrimaryHomeSection';
import SecondaryHomeSection from '../components/SecondaryHomeSection';
import ThirdHomeSection from '../components/ThirdHomeSection';
import Footer from '../components/Footer';

const Home = () => {
    return (
      <>
        <Navbar />
          <PrimaryHomeSection />
          <SecondaryHomeSection />
          <ThirdHomeSection />
        <Footer />
        </>
      );
    };
    
export default Home;