import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-trisDark text-white pt-20 pb-10 font-body">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          
          {/* Column 1: Company Info */}
          <div className="flex flex-col items-start">
            <Link to="/" className="inline-block mb-6 bg-white px-4 py-3 rounded-xl shadow-md">
              <img src="/Tris _logo.png" alt="Tris Electric Logo" className="h-12 object-contain" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-medium mb-6">
              Pioneering smart, sustainable, and affordable electric mobility for everyone. Join us in making cities cleaner and quieter.
            </p>
          </div>
          
          {/* Column 2: Quick Info */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6 text-white uppercase tracking-wider relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-trisBlue">Quick Info</h4>
            <ul className="space-y-3 font-medium">
              <li><Link to="/about" className="text-gray-400 hover:text-trisBlue transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-trisBlue rounded-full"></span> About us</Link></li>
              <li><Link to="/how-it-works" className="text-gray-400 hover:text-trisBlue transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-trisBlue rounded-full"></span> How it works</Link></li>
              <li><Link to="/plans" className="text-gray-400 hover:text-trisBlue transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-trisBlue rounded-full"></span> Subscription Plans</Link></li>
              <li><Link to="/faqs" className="text-gray-400 hover:text-trisBlue transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-trisBlue rounded-full"></span> FAQs</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-trisBlue transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-trisBlue rounded-full"></span> Contact us</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-trisBlue transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-trisBlue rounded-full"></span> Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-trisBlue transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-trisBlue rounded-full"></span> Privacy Policy</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Contact Us */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6 text-white uppercase tracking-wider relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-trisBlue">Contact Us</h4>
            
            <div className="space-y-5 font-medium">
              <div className="flex items-start gap-4 text-gray-400">
                <FaMapMarkerAlt className="text-trisBlue text-xl shrink-0 mt-1" />
                <p className="leading-relaxed text-sm">
                  <span className="text-white font-bold block mb-1">Head Office:</span>
                  VIP Road, Alambagh,<br/>
                  Lucknow, Uttar Pradesh 226005
                </p>
              </div>
              
              <div className="flex items-center gap-4 text-gray-400 hover:text-trisBlue transition-colors text-sm">
                <FaEnvelope className="text-trisBlue text-xl shrink-0" />
                <a href="mailto:Triss.electric@gmail.com">Triss.electric@gmail.com</a>
              </div>
              
              <div className="flex items-center gap-4 text-gray-400 hover:text-trisBlue transition-colors text-sm">
                <FaPhoneAlt className="text-trisBlue text-xl shrink-0" />
                <a href="tel:+918840204114">+91 88402 04114</a>
              </div>
            </div>
          </div>

          {/* Column 4: Connect With Us */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6 text-white uppercase tracking-wider relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-trisBlue">Connect With Us</h4>
            <p className="text-gray-400 text-sm leading-relaxed font-medium mb-6">
              Follow us on social media to stay updated with the latest news and eco-friendly tips.
            </p>
            <div className="flex flex-wrap gap-4">
              {/* Brand Colored Social Icons */}
              <a href="#" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1877F2] hover:scale-110 hover:shadow-[0_0_15px_rgba(24,119,242,0.6)] transition-all">
                <FaFacebookF className="text-xl" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1DA1F2] hover:scale-110 hover:shadow-[0_0_15px_rgba(29,161,242,0.6)] transition-all">
                <FaTwitter className="text-xl" />
              </a>
              <a href="https://www.instagram.com/tris.electric?igsi=Y3EzenVob2tnNGkz" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#E1306C] hover:scale-110 hover:shadow-[0_0_15px_rgba(225,48,108,0.6)] transition-all">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#0A66C2] hover:scale-110 hover:shadow-[0_0_15px_rgba(10,102,194,0.6)] transition-all">
                <FaLinkedinIn className="text-xl" />
              </a>
            </div>
          </div>
          
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-medium">
          <p>
            Copyright © 2024 - TravelTech Experiences Pvt. Ltd. (Operated as Tris) <br/>
            Crafted By <a href="https://digicoders.in" target="_blank" rel="noopener noreferrer" className="text-trisBlue hover:underline">Team DigiCoders</a>
          </p>
          <div className="flex space-x-6">
            <Link to="/terms" className="hover:text-trisBlue transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-trisBlue transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
