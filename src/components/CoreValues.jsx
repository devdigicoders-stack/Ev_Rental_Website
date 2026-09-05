import React from 'react';
import { FaLeaf, FaLightbulb, FaShieldAlt } from 'react-icons/fa';

const CoreValues = () => {
  const values = [
    {
      icon: FaLeaf,
      title: 'Sustainability First',
      description: 'We are committed to reducing the carbon footprint by providing zero-emission mobility solutions for businesses and individuals.',
      color: 'text-trisGreen',
      bg: 'bg-trisGreen/10',
    },
    {
      icon: FaLightbulb,
      title: 'Tech-Driven Innovation',
      description: 'Leveraging cutting-edge IoT and smart fleet management to offer a seamless, reliable, and advanced riding experience.',
      color: 'text-trisBlue',
      bg: 'bg-trisBlue-light',
    },
    {
      icon: FaShieldAlt,
      title: 'Unmatched Reliability',
      description: 'From comprehensive insurance to regular wear & tear maintenance, we ensure your journey is always smooth and safe.',
      color: 'text-[#F05A41]',
      bg: 'bg-[#F05A41]/10',
    }
  ];

  return (
    <section className="py-16 bg-trisGray-light">
      <div className="container">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-trisBlue/10 border border-trisBlue/20 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-trisBlue"></span>
            <span className="text-trisBlue font-bold tracking-widest text-xs uppercase">Our Core Values</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-gray-800 uppercase tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-trisBlue to-trisGreen drop-shadow-sm">Core Values</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 ${value.bg} ${value.color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-trisGray-text font-medium leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
