import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Layout from './Layout';

import Features from './Components/Features';
import HowItWorks from './Components/HowItWorks';
import Testimonials from './Components/Testimonials';
import Navbar from './Components/Navbar';

import HeroSection from './Components/Slider';
import PurchesPlane from './Components/PurchesPlane';
import FAQ from './Components/FAQ';
import CtaSection from './Components/CtaSection';
import ContentGenerator from './Components/generateContante';
import UserCard from './Components/UserCard';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
     <Navbar/>
    <HeroSection/>
    <Features/>
    <HowItWorks/>
    <ContentGenerator/>
    {/* <PurchesPlane/> */}
    <Testimonials/>
    <FAQ/>
    <CtaSection/>
    <UserCard/>
    <Footer/>
   </>
  );
};

export default App;