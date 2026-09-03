import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const services = [
  {
    title: 'Bike Rentals',
    description: 'Perfect for quick city commutes and avoiding traffic. Our agile e-bikes offer unmatched convenience, making your daily short trips faster, greener, and incredibly cost-effective.',
    image: '/bike_rental.jpg'
  },
  {
    title: 'Scooter Rentals',
    description: 'Efficient and eco-friendly delivery solutions for your business. Equip your fleet with our high-capacity, durable electric scooters designed specifically for heavy-duty last-mile logistics.',
    image: '/scooter_rental.jpg'
  },
  {
    title: 'Car Rentals',
    description: 'Comfortable premium cars for long drives and family trips. Experience the luxury of silent, zero-emission travel with our top-tier electric cars, featuring extended range and fast charging.',
    image: '/car_rental.jpg'
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-trisGray-light font-body" id="services">
      <div className="container">
        <div className="text-center mb-16">
          <div className="badge bg-white text-trisBlue shadow-sm mb-4 px-4 py-2 uppercase tracking-widest font-bold">Offerings</div>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-gray-900 uppercase">
            Our <span className="text-trisBlue">Services</span>
          </h2>
          <p className="text-lg text-trisGray-text max-w-2xl mx-auto mt-4 font-medium">
            Explore our diverse range of electric vehicles tailored to meet your unique mobility and business requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-300 group flex flex-col h-full border border-gray-100 cursor-pointer"
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Text Content Section */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-heading font-bold mb-3 text-gray-900 group-hover:text-trisBlue transition-colors">
                  {service.title}
                </h3>
                <p className="text-trisGray-text leading-relaxed font-medium mb-6 flex-grow text-sm md:text-base">
                  {service.description}
                </p>
                
                {/* Action Link */}
                <div className="flex items-center text-trisBlue font-bold uppercase text-sm tracking-wider mt-auto group-hover:translate-x-2 transition-transform duration-300">
                  <span>Explore Options</span>
                  <FaArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
