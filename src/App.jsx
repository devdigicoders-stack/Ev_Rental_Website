import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import HowItWorksPage from './pages/HowItWorksPage';
import Faqs from './pages/Faqs';
import Plans from './pages/Plans';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="app-container font-body">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />

        {/* Floating Action Buttons */}
        <div className="fixed bottom-12 right-6 z-50 flex flex-col gap-4">
          {/* Call Button */}
          <a 
            href="tel:+918840204114" 
            className="bg-trisBlue text-white w-14 h-14 rounded-full shadow-[0_10px_25px_rgba(30,160,229,0.4)] flex items-center justify-center hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(30,160,229,0.6)] transition-all duration-300" 
            aria-label="Call Us"
          >
            <FaPhoneAlt className="w-6 h-6" />
          </a>
          
          {/* WhatsApp Button */}
          <a 
            href="https://wa.me/918840204114" 
            className="bg-[#25D366] text-white w-14 h-14 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] flex items-center justify-center hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(37,211,102,0.6)] transition-all duration-300" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
          >
            <FaWhatsapp className="w-8 h-8" />
          </a>
        </div>
      </div>
    </Router>
  );
}

export default App;
