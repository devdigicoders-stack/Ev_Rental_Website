import React, { useEffect } from 'react';
import HowItWorksComponent from '../components/HowItWorks';
import AdvantageGrid from '../components/AdvantageGrid';
import { Link } from 'react-router-dom';
import { FaIdCard, FaMobileAlt, FaMoneyBillWave, FaIdBadge } from 'react-icons/fa';

const HowItWorksPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Clean & Attractive Hero Section for How It Works */}
      <div 
        className="relative min-h-[55vh] lg:min-h-[60vh] flex items-center overflow-hidden py-16 lg:py-24 bg-gray-900"
        style={{
          backgroundImage: "url('/how_it_works_hero_bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      >
        {/* Gradient overlay: dark on left for text readability, clearer on right for the bike */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/25"></div>

        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="max-w-xl text-left">
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-trisGreen shadow-[0_0_8px_#25D366]"></span>
              <span className="text-gray-200 font-bold tracking-wider text-xs uppercase">Simple Process</span>
            </div>

            {/* Clean Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold uppercase tracking-tight text-white mb-4 leading-tight">
              Get Started in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-trisGreen to-teal-300">
                3 Easy Steps
              </span>
            </h1>

            {/* Concise Description */}
            <p className="text-base sm:text-lg text-gray-200 mb-8 leading-relaxed font-normal">
              Renting an eBike is seamless. Complete your quick KYC, select the right plan, and pick up your vehicle from our nearest hub.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="/plans"
                className="bg-trisGreen hover:bg-[#1EBE5C] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-[0_5px_15px_rgba(37,211,102,0.4)] transition-all duration-300 hover:-translate-y-0.5"
              >
                View Plans
              </a>
              <a 
                href="#prerequisites"
                className="bg-white/10 hover:bg-white hover:text-gray-900 text-white border border-white/30 font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
              >
                KYC Requirements
              </a>
            </div>
          </div>
        </div>
      </div>

      <HowItWorksComponent />

      {/* Prerequisites Section */}
      <section className="py-12 bg-gray-50 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-heading font-black uppercase mb-4 text-gray-900">
              What You <span className="text-trisBlue">Need</span>
            </h2>
            <p className="text-base text-trisGray-text max-w-2xl mx-auto font-medium">
              We've kept the requirements minimal so you can start riding immediately. Make sure you have these ready before you begin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-trisBlue/10 text-trisBlue rounded-full flex items-center justify-center text-2xl mb-6">
                <FaIdCard />
              </div>
              <h3 className="text-xl font-bold mb-2">Aadhar Card</h3>
              <p className="text-gray-600">For identity and address verification. Must be linked to your mobile number.</p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-trisGreen/10 text-trisGreen rounded-full flex items-center justify-center text-2xl mb-6">
                <FaIdBadge />
              </div>
              <h3 className="text-xl font-bold mb-2">Driving License</h3>
              <p className="text-gray-600">A valid Indian driving license is required for our high-speed eBike models.</p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-trisBlue/10 text-trisBlue rounded-full flex items-center justify-center text-2xl mb-6">
                <FaMobileAlt />
              </div>
              <h3 className="text-xl font-bold mb-2">Smartphone</h3>
              <p className="text-gray-600">An active iOS or Android device to use the Tris app for locking and tracking.</p>
            </div>
            
            {/* Card 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-trisGreen/10 text-trisGreen rounded-full flex items-center justify-center text-2xl mb-6">
                <FaMoneyBillWave />
              </div>
              <h3 className="text-xl font-bold mb-2">Security Deposit</h3>
              <p className="text-gray-600">A fully refundable security deposit depending on your selected rental plan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tris Advantage Section */}
      <AdvantageGrid />

      {/* Call To Action Section */}
      <section className="py-16 relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-trisBlue/20 to-trisGreen/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30"></div>
        </div>
        
        <div className="container relative z-10 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-black text-white uppercase mb-6 drop-shadow-lg">
            Ready To Start Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-trisGreen via-trisBlue to-trisGreen animate-shine bg-[length:200%_auto]">
              Journey?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-medium">
            Join thousands of riders who have already made the switch to smart, eco-friendly commuting. Book your eBike today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            <Link to="/plans" className="px-10 py-4 text-lg bg-gradient-to-r from-trisBlue to-trisGreen hover:from-trisGreen hover:to-trisBlue text-white font-bold rounded-full shadow-[0_10px_30px_rgba(30,160,229,0.3)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.4)] transition-all transform hover:-translate-y-1 w-full sm:w-auto text-center">
              View Subscription Plans
            </Link>
            <Link to="/contact" className="px-10 py-4 text-lg bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold rounded-full backdrop-blur-sm transition-all w-full sm:w-auto text-center">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
