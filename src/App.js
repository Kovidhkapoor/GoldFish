import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Consultant from './components/consultants';
import UseClient from './components/UseClient';
import Footer from './components/footer';
import ContactSection from './components/ContactSection';
import Services from './components/services';
import ConsultingServices from './components/ConsultingServices';
import AboutUs from './components/AboutUs'; // Import About Us Page

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={
          <>
            <Home />
            <Consultant />
            <UseClient />
            <ConsultingServices />
            <ContactSection />
            <Footer />
          </>
        } />

        {/* Services Page Route */}
        <Route path="/services" element={
          <>
            <Services />
            <Footer />
          </>
        } />

        {/* About Us Page Route */}
        <Route path="/aboutus" element={
          <>
            <AboutUs />
            <Footer />
          </>
        } />


         
      </Routes>
    </Router>
  );
};

export default App;
