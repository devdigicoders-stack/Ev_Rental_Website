import React from 'react';

const advantages = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>,
    title: 'Zero Maintenance',
    desc: 'We take care of all regular servicing and repairs at no extra cost.'
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>,
    title: 'Doorstep Delivery',
    desc: 'Get your eBike delivered right to your home in under 24 hours.'
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>,
    title: 'Premium E-Bikes',
    desc: 'Ride the latest and most advanced electric scooters in the market.'
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
    title: 'Flexible Plans',
    desc: 'Weekly, monthly, or yearly. Choose a plan that fits your lifestyle.'
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
    title: '24/7 Assistance',
    desc: 'Round the clock roadside assistance to keep you moving.'
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>,
    title: 'Swap & Go',
    desc: 'Never wait to charge. Swap your battery instantly at our hubs.'
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>,
    title: 'Smart Tracking',
    desc: 'Track your rides, range, and savings directly from our app.'
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>,
    title: 'Eco-Friendly',
    desc: 'Reduce your carbon footprint. 100% emission-free travel.'
  }
];

const AdvantageGrid = () => {
  return (
    <section className="relative overflow-hidden bg-trisDark py-20" id="about">
      {/* Radial Gradient Background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(30,160,229,0.1)_0%,transparent_50%)] pointer-events-none"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold uppercase mb-4 text-white">
            The <span className="text-trisBlue">Tris</span> Advantage
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-medium">
            Experience the future of mobility with our all-inclusive rental plans designed for maximum convenience and minimal hassle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((adv, index) => (
            <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-trisBlue/50 hover:shadow-[0_15px_40px_rgba(30,160,229,0.15)] flex flex-col items-start" key={index}>
              <div className="w-14 h-14 rounded-xl bg-trisBlue/20 text-trisBlue flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-trisBlue group-hover:text-white group-hover:shadow-[0_0_20px_rgba(30,160,229,0.6)]">
                {adv.icon}
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-white group-hover:text-trisBlue transition-colors">{adv.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantageGrid;
