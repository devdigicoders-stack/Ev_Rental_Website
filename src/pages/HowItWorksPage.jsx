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
      {/* Enhanced Hero Section */}
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
              <span className="text-gray-200 font-semibold tracking-wider text-sm uppercase ml-1">Simple Process</span>
            </div>

            {/* Main Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-black mb-6 text-white uppercase tracking-tight leading-tight drop-shadow-2xl">
              Get Started in <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-trisGreen via-trisBlue to-trisGreen bg-[length:200%_auto] animate-shine">
                3 Easy Steps
              </span>
            </h1>
            
            {/* Description */}
            <div className="relative group mt-4 w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-trisBlue to-trisGreen rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <p className="relative text-lg md:text-xl text-gray-200 font-medium leading-relaxed bg-gray-900/60 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl">
                Renting an eBike has never been this simple. We have streamlined the entire process so you can get on the road quickly. <br className="hidden md:block"/>
                <span className="text-white font-bold inline-block mt-2">Verify, choose your plan, and ride!</span>
              </p>
            </div>
            
          </div>
        </div>
        
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
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
