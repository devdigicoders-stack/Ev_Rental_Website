import React, { useState } from 'react';
import { FaCheckCircle, FaMotorcycle, FaUser, FaEnvelope, FaPhoneAlt, FaBuilding, FaBicycle } from 'react-icons/fa';

const LeadForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Track form values to calculate progress
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    ebikes: '',
    company: ''
  });

  // Calculate progress (0 to 5 fields)
  const filledFields = Object.values(formData).filter(val => val.trim().length > 0).length;
  const progressPercent = (filledFields / 5) * 100;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', mobile: '', ebikes: '', company: '' });
    }, 5000);
  };

  return (
    <section className="py-20 bg-[#F4F4F4]" id="contact">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full">
          
          {/* Left Side: Graphic */}
          <div className="w-full lg:w-1/2 relative flex justify-center items-center">
            <div className="relative">
              {/* Speech Bubble */}
              <div className="absolute -top-8 right-0 bg-white border-2 border-gray-900 rounded-3xl px-6 py-3 text-center shadow-md z-10 hidden md:block">
                <p className="font-heading font-black text-sm uppercase text-gray-900 leading-tight">
                  SIGN UP NOW<br/>AND START SAVING
                </p>
                {/* Speech Bubble Tail */}
                <div className="absolute -bottom-3 left-10 w-0 h-0 border-l-[10px] border-l-transparent border-t-[15px] border-t-gray-900 border-r-[10px] border-r-transparent"></div>
                <div className="absolute -bottom-2 left-[41px] w-0 h-0 border-l-[8px] border-l-transparent border-t-[12px] border-t-white border-r-[8px] border-r-transparent"></div>
              </div>
              
              <img 
                src="/signup_rider.jpg" 
                alt="Sign Up Rider" 
                className="w-full max-w-lg object-contain mix-blend-multiply"
              />
              
              {/* Watermark Logo */}
              <div className="absolute bottom-6 left-6 z-20 opacity-80 drop-shadow-md">
                <img src="/Tris _logo.png" alt="Tris Logo" className="h-8 md:h-12 object-contain" />
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Form */}
          <div className="w-full lg:w-1/2 relative">
            <h2 className="text-3xl font-heading font-black uppercase tracking-wide text-gray-900 mb-2">
              SIGN UP
            </h2>
            
            {/* Interactive Progress Bike */}
            <div className="mb-8 relative w-full max-w-sm">
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden shadow-inner">
                <div 
                  className="h-full bg-gradient-to-r from-trisBlue to-trisGreen transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
              
              <div 
                className="absolute top-1/2 -translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-10"
                style={{ left: `calc(${progressPercent}% - 16px)` }}
              >
                <div className={`p-2 rounded-full border-2 bg-white shadow-lg transition-colors duration-500 relative ${progressPercent === 100 ? 'border-trisGreen text-trisGreen scale-110' : progressPercent > 0 ? 'border-trisBlue text-trisBlue' : 'border-gray-400 text-gray-400'}`}>
                  <FaMotorcycle className="w-5 h-5" />
                  {/* Small exhaust puff when moving */}
                  {progressPercent > 0 && progressPercent < 100 && (
                    <div className="absolute -left-2 top-1/2 w-1 h-1 bg-gray-400 rounded-full animate-ping"></div>
                  )}
                </div>
              </div>
              <p className="text-[10px] uppercase font-bold text-gray-500 mt-3 tracking-widest transition-colors duration-300" style={{ color: progressPercent === 100 ? '#25D366' : '' }}>
                {progressPercent === 100 ? "Ready to take off!" : "Fill the form to start engine..."}
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 text-center animate-fade-in-up">
                <div className="w-20 h-20 bg-trisGreen/10 text-trisGreen rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <div className="absolute inset-0 border-4 border-trisGreen rounded-full animate-ping opacity-20"></div>
                  <FaCheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-heading font-black text-gray-900 mb-2">Request Received!</h3>
                <p className="text-trisGray-text text-md">Our team will get back to you shortly. Get ready for a green ride.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Custom Input Wrapper for Name */}
                <div className="space-y-1.5 relative group">
                  <label className="text-xs font-bold text-gray-800 uppercase tracking-wide transition-colors group-focus-within:text-trisBlue">Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-trisBlue transition-colors duration-300">
                      <FaUser className="w-4 h-4" />
                    </div>
                    <input 
                      name="name"
                      placeholder='enter your name here '
                      value={formData.name}
                      onChange={handleChange}
                      type="text" 
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-transparent bg-white shadow-[0_2px_15px_rgba(0,0,0,0.04)] focus:bg-white focus:border-trisBlue focus:shadow-[0_4px_25px_rgba(30,160,229,0.15)] transition-all duration-300 outline-none text-sm font-medium" 
                      required 
                    />
                  </div>
                </div>
                
                {/* Custom Input Wrapper for Email */}
                <div className="space-y-1.5 relative group">
                  <label className="text-xs font-bold text-gray-800 uppercase tracking-wide transition-colors group-focus-within:text-trisBlue">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-trisBlue transition-colors duration-300">
                      <FaEnvelope className="w-4 h-4" />
                    </div>
                    <input 
                      name="email"
                      placeholder='enter your email here ' 
                      value={formData.email}
                      onChange={handleChange}
                      type="email" 
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-transparent bg-white shadow-[0_2px_15px_rgba(0,0,0,0.04)] focus:bg-white focus:border-trisBlue focus:shadow-[0_4px_25px_rgba(30,160,229,0.15)] transition-all duration-300 outline-none text-sm font-medium" 
                      required 
                    />
                  </div>
                </div>

                {/* Custom Input Wrapper for Mobile */}
                <div className="space-y-1.5 relative group">
                  <label className="text-xs font-bold text-gray-800 uppercase tracking-wide transition-colors group-focus-within:text-trisBlue">Mobile</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-trisBlue transition-colors duration-300">
                      <FaPhoneAlt className="w-4 h-4" />
                    </div>
                    <input 
                      name="mobile"
                      placeholder='enter your mobile here ' 
                      value={formData.mobile}
                      onChange={handleChange}
                      type="tel" 
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-transparent bg-white shadow-[0_2px_15px_rgba(0,0,0,0.04)] focus:bg-white focus:border-trisBlue focus:shadow-[0_4px_25px_rgba(30,160,229,0.15)] transition-all duration-300 outline-none text-sm font-medium" 
                      required 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Custom Select for Ebikes */}
                  <div className="space-y-1.5 relative group">
                    <label className="text-xs font-bold text-gray-800 uppercase tracking-wide transition-colors group-focus-within:text-trisBlue">Ebikes Required</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-trisBlue transition-colors duration-300 z-10">
                        <FaBicycle className="w-4 h-4" />
                      </div>
                      <select 
                        name="ebikes"
                        value={formData.ebikes}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-transparent bg-white shadow-[0_2px_15px_rgba(0,0,0,0.04)] focus:bg-white focus:border-trisBlue focus:shadow-[0_4px_25px_rgba(30,160,229,0.15)] transition-all duration-300 outline-none text-sm font-medium appearance-none relative" 
                        required
                      >
                        <option value="" disabled>Select Quantity</option>
                        <option value="1-5">1 - 5</option>
                        <option value="6-20">6 - 20</option>
                        <option value="21-50">21 - 50</option>
                        <option value="50+">50+</option>
                      </select>
                      {/* Custom dropdown arrow */}
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Custom Input for Company */}
                  <div className="space-y-1.5 relative group">
                    <label className="text-xs font-bold text-gray-800 uppercase tracking-wide transition-colors group-focus-within:text-trisBlue">Company Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-trisBlue transition-colors duration-300">
                        <FaBuilding className="w-4 h-4" />
                      </div>
                      <input 
                        name="company"
                        placeholder='enter your company name here '  
                        value={formData.company}
                        onChange={handleChange}
                        type="text" 
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-transparent bg-white shadow-[0_2px_15px_rgba(0,0,0,0.04)] focus:bg-white focus:border-trisBlue focus:shadow-[0_4px_25px_rgba(30,160,229,0.15)] transition-all duration-300 outline-none text-sm font-medium" 
                        required 
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-6">
                  <button 
                    type="submit" 
                    className={`relative overflow-hidden group text-white text-sm font-bold uppercase tracking-widest py-3.5 px-12 rounded-xl shadow-lg transition-all duration-500 ${progressPercent === 100 ? 'bg-trisGreen hover:bg-trisGreen-hover shadow-trisGreen/30 transform hover:-translate-y-1' : 'bg-gray-800 hover:bg-gray-900'}`}
                  >
                    <span className="relative z-10">Submit</span>
                    {/* Hover shine effect */}
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-white opacity-20 group-hover:animate-shine" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default LeadForm;
