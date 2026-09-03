import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `relative font-heading font-bold text-lg tracking-wide uppercase transition-colors duration-200 
     ${isActive ? 'text-trisBlue' : 'text-gray-900 hover:text-trisBlue'} 
     after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-trisBlue 
     after:transition-all after:duration-200 ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`;

  return (
    <>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-50 bg-white transition-all duration-300 border-b ${isScrolled ? 'py-4 shadow-sm border-trisGray-border' : 'py-6 border-transparent'}`}>
        <div className="container flex justify-between items-center">
          <Link to="/" className="flex flex-col">
            <img src="/Tris _logo.png" alt="Tris Electric Logo" className="h-10 md:h-12 object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              <li><NavLink to="/" className={navLinkClass}>HOME</NavLink></li>
              <li><NavLink to="/about" className={navLinkClass}>ABOUT</NavLink></li>
              <li><NavLink to="/how-it-works" className={navLinkClass}>HOW IT WORKS?</NavLink></li>
              <li><NavLink to="/faqs" className={navLinkClass}>FAQ'S</NavLink></li>
              <li><NavLink to="/contact" className={navLinkClass}>CONTACT</NavLink></li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-900" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" strokeLinejoin="round"/>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        <div className={`absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 overflow-hidden md:hidden ${isMobileMenuOpen ? 'max-h-96 border-b' : 'max-h-0'}`}>
          <ul className="flex flex-col items-center py-6 gap-6">
            <li><NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className={navLinkClass}>HOME</NavLink></li>
            <li><NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)} className={navLinkClass}>ABOUT</NavLink></li>
            <li><NavLink to="/how-it-works" onClick={() => setIsMobileMenuOpen(false)} className={navLinkClass}>HOW IT WORKS?</NavLink></li>
            <li><NavLink to="/faqs" onClick={() => setIsMobileMenuOpen(false)} className={navLinkClass}>FAQ'S</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={navLinkClass}>CONTACT</NavLink></li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
