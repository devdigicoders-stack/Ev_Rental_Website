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
      {/* Clean & Attractive Hero Section for Contact Page */}
      <div 
        className="relative min-h-[50vh] lg:min-h-[55vh] flex items-center overflow-hidden py-16 lg:py-24 bg-gray-900"
        style={{
          backgroundImage: "url('/ev_fleet_hero_bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      >
        {/* Gradient overlay: dark on left for text readability, clearer on right for vehicles */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/25"></div>

        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="max-w-xl text-left">
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-trisBlue shadow-[0_0_8px_#1EA0E5]"></span>
              <span className="text-gray-200 font-bold tracking-wider text-xs uppercase">Get In Touch</span>
            </div>

            {/* Clean Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold uppercase tracking-tight text-white mb-4 leading-tight">
              We're Here to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-trisBlue to-cyan-300">
                Help You
              </span>
            </h1>

            {/* Concise Description */}
            <p className="text-base sm:text-lg text-gray-200 mb-8 leading-relaxed font-normal">
              Have questions about plans, pricing, or fleet subscriptions? Drop us a line or call us — our team is ready to assist you.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="tel:+918840204114"
                className="bg-trisBlue hover:bg-[#158BC6] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-[0_5px_15px_rgba(30,160,229,0.4)] transition-all duration-300 hover:-translate-y-0.5 flex items-center"
              >
                <FaPhoneAlt className="mr-2 text-sm" />
                Call +91 88402 04114
              </a>
              <a 
                href="#lead-form"
                className="bg-white/10 hover:bg-white hover:text-gray-900 text-white border border-white/30 font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
              >
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Info Cards Section */}
      <section className="py-12 bg-gray-50 relative -mt-8 z-20 rounded-t-[3rem]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Call Us */}
            <div className="bg-white p-7 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 text-center flex flex-col items-center group h-full">
              <div className="w-14 h-14 bg-trisBlue/10 text-trisBlue rounded-full flex items-center justify-center text-xl mb-5 transition-colors group-hover:bg-trisBlue group-hover:text-white shrink-0">
                <FaPhoneAlt />
              </div>
              <h3 className="text-base sm:text-lg font-heading font-bold mb-1.5 text-gray-900">Call Us</h3>
              <p className="text-gray-500 mb-4 text-xs font-medium">Mon-Sat from 9am to 6pm</p>
              <div className="mt-auto pt-2">
                <a href="tel:+918840204114" className="text-trisBlue font-bold text-sm sm:text-base hover:underline transition-colors block">
                  +91 88402 04114
                </a>
              </div>
            </div>
            
            {/* Card 2: Email Us */}
            <div className="bg-white p-7 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 text-center flex flex-col items-center group h-full">
              <div className="w-14 h-14 bg-trisGreen/10 text-trisGreen rounded-full flex items-center justify-center text-xl mb-5 transition-colors group-hover:bg-trisGreen group-hover:text-white shrink-0">
                <FaEnvelope />
              </div>
              <h3 className="text-base sm:text-lg font-heading font-bold mb-1.5 text-gray-900">Email Us</h3>
              <p className="text-gray-500 mb-4 text-xs font-medium">Send us a message anytime</p>
              <div className="mt-auto pt-2 w-full">
                <a href="mailto:Triss.electric@gmail.com" className="text-trisBlue font-bold text-xs sm:text-sm hover:underline transition-colors block break-all">
                  Triss.electric@gmail.com
                </a>
              </div>
            </div>
            
            {/* Card 3: Head Office */}
            <div className="bg-white p-7 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 text-center flex flex-col items-center group h-full">
              <div className="w-14 h-14 bg-trisBlue/10 text-trisBlue rounded-full flex items-center justify-center text-xl mb-5 transition-colors group-hover:bg-trisBlue group-hover:text-white shrink-0">
                <FaMapMarkerAlt />
              </div>
              <h3 className="text-base sm:text-lg font-heading font-bold mb-1.5 text-gray-900">Head Office</h3>
              <p className="text-gray-500 mb-2 text-xs font-medium">VIP Road, Alambagh</p>
              <div className="mt-auto pt-2">
                <a 
                  href="https://maps.google.com/?q=VIP+Road+Alambagh+Lucknow+Uttar+Pradesh+226005" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-trisBlue font-bold text-xs transition-colors block"
                >
                  Lucknow, UP 226005
                  <span className="block text-[11px] text-trisBlue font-semibold mt-0.5">View on Map →</span>
                </a>
              </div>
            </div>
            
            {/* Card 4: Business Hours */}
            <div className="bg-white p-7 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 text-center flex flex-col items-center group h-full">
              <div className="w-14 h-14 bg-trisGreen/10 text-trisGreen rounded-full flex items-center justify-center text-xl mb-5 transition-colors group-hover:bg-trisGreen group-hover:text-white shrink-0">
                <FaClock />
              </div>
              <h3 className="text-base sm:text-lg font-heading font-bold mb-1.5 text-gray-900">Business Hours</h3>
              <p className="text-gray-500 mb-4 text-xs font-medium">Monday - Saturday</p>
              <div className="mt-auto pt-2">
                <span className="text-gray-900 font-bold text-sm sm:text-base block">
                  9:00 AM - 6:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <div className="py-10">
        <LeadForm />
      </div>

      {/* FAQ CTA Section */}
      <section className="py-16 relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-trisBlue/20 to-trisGreen/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30"></div>
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-black text-white uppercase mb-6 drop-shadow-lg">
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
