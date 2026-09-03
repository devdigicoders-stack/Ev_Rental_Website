import React, { useEffect } from 'react';
import LeadForm from '../components/LeadForm';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Enhanced Hero Section for Contact Page */}
      <div className="relative pt-24 pb-24 bg-gray-900 overflow-hidden flex items-center min-h-[50vh]">
        
        {/* EV Bike Background Image */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 lg:opacity-40 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-trisBlue/40 to-trisGreen/40 blur-[150px] rounded-full w-full h-full m-auto animate-pulse mix-blend-screen"></div>
          <img 
            src="/hero-bike.png" 
            alt="" 
            className="w-[200%] md:w-[150%] lg:w-[110%] max-w-none transform translate-y-4 lg:translate-y-10 object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)]"
          />
        </div>

        {/* Dynamic Background Pattern with Animations */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-gradient-to-r from-trisBlue to-transparent blur-[120px] transform -skew-x-12 opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-gradient-to-l from-trisGreen to-transparent blur-[120px] transform skew-x-12 opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-[1px]"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-xl">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-trisGreen opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-trisGreen"></span>
              </span>
              <span className="text-gray-200 font-semibold tracking-wider text-sm uppercase ml-1">Get In Touch</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 text-white uppercase tracking-tight leading-tight drop-shadow-2xl">
              We're Here to <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-trisGreen via-trisBlue to-trisGreen bg-[length:200%_auto] animate-shine">
                Help You
              </span>
            </h1>
            
            {/* Description */}
            <div className="relative group mt-4 w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-trisBlue to-trisGreen rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <p className="relative text-lg md:text-xl text-gray-200 font-medium leading-relaxed bg-gray-900/60 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl">
                Have questions about our plans? Want to partner with us? Our support team is ready to assist you with any inquiries. <br className="hidden md:block"/>
                <span className="text-white font-bold inline-block mt-2">Drop us a message and we'll get back to you shortly!</span>
              </p>
            </div>
            
          </div>
        </div>
        
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
      </div>
      
      {/* Contact Info Cards Section */}
      <section className="py-20 bg-gray-50 relative -mt-8 z-20 rounded-t-[3rem]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center flex flex-col items-center group">
              <div className="w-16 h-16 bg-trisBlue/10 text-trisBlue rounded-full flex items-center justify-center text-2xl mb-6 transition-colors group-hover:bg-trisBlue group-hover:text-white">
                <FaPhoneAlt />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-500 mb-4 text-sm">We're here to help you</p>
              <a href="tel:+918840204114" className="text-trisBlue font-bold text-lg hover:underline mt-auto">+91 88402 04114</a>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center flex flex-col items-center group">
              <div className="w-16 h-16 bg-trisGreen/10 text-trisGreen rounded-full flex items-center justify-center text-2xl mb-6 transition-colors group-hover:bg-trisGreen group-hover:text-white">
                <FaEnvelope />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-500 mb-4 text-sm">Send us a message anytime</p>
              <a href="mailto:support@tristechnology.com" className="text-trisBlue font-bold text-lg hover:underline mt-auto truncate w-full">support@tristechnology.com</a>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center flex flex-col items-center group">
              <div className="w-16 h-16 bg-trisBlue/10 text-trisBlue rounded-full flex items-center justify-center text-2xl mb-6 transition-colors group-hover:bg-trisBlue group-hover:text-white">
                <FaMapMarkerAlt />
              </div>
              <h3 className="text-xl font-bold mb-2">Head Office</h3>
              <p className="text-gray-500 mb-4 text-sm">AIHP Executive Center</p>
              <p className="text-gray-900 font-bold text-sm mt-auto">Sector 32, Gurugram, Haryana</p>
            </div>
            
            {/* Card 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center flex flex-col items-center group">
              <div className="w-16 h-16 bg-trisGreen/10 text-trisGreen rounded-full flex items-center justify-center text-2xl mb-6 transition-colors group-hover:bg-trisGreen group-hover:text-white">
                <FaClock />
              </div>
              <h3 className="text-xl font-bold mb-2">Business Hours</h3>
              <p className="text-gray-500 mb-4 text-sm">Monday - Saturday</p>
              <p className="text-gray-900 font-bold text-lg mt-auto">9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <div className="py-10">
        <LeadForm />
      </div>

      {/* FAQ CTA Section */}
      <section className="py-24 relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-trisBlue/20 to-trisGreen/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30"></div>
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white uppercase mb-6 drop-shadow-lg">
            Still Have <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-trisGreen via-trisBlue to-trisGreen animate-shine bg-[length:200%_auto]">
              Questions?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-medium">
            Can't find what you're looking for? Check out our frequently asked questions for quick answers to common queries.
          </p>
          <Link to="/faqs" className="px-10 py-4 text-lg bg-gradient-to-r from-trisBlue to-trisGreen hover:from-trisGreen hover:to-trisBlue text-white font-bold rounded-full shadow-[0_10px_30px_rgba(30,160,229,0.3)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.4)] transition-all transform hover:-translate-y-1 inline-block">
            Visit Help Center
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Contact;
