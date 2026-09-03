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
    <section className="py-24 bg-trisGray-light">
      <div className="container">
        <div className="text-center mb-16">
          <div className="badge bg-white text-gray-900 shadow-sm mb-4 px-4 py-2 uppercase tracking-widest font-bold">What Drives Us</div>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-gray-900 uppercase">
            Our <span className="text-trisBlue">Core Values</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
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
