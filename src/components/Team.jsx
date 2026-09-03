import React from 'react';

const team = [
  {
    name: 'Gaurav Rathore',
    title: 'Co-Founder',
    image: 'https://ui-avatars.com/api/?name=Gaurav+Rathore&background=1EA0E5&color=fff&size=256'
  },
  {
    name: 'Abhishek Dwivedi',
    title: 'Co-Founder',
    image: 'https://ui-avatars.com/api/?name=Abhishek+Dwivedi&background=1EA0E5&color=fff&size=256'
  }
];

const Team = () => {
  return (
    <section className="py-20 bg-trisGray-light">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase text-gray-900 mb-4">
            Our <span className="text-trisBlue">Team</span>
          </h2>
          <p className="text-lg text-trisGray-text max-w-2xl mx-auto">
            The passionate individuals driven by technology and sustainable lifestyle behind Tris Electric.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {team.map((member, index) => (
            <div className="text-center group" key={index}>
              <div className="w-48 h-48 mx-auto rounded-full border-4 border-white shadow-xl overflow-hidden mb-6 transition-transform duration-300 group-hover:scale-105 group-hover:border-trisBlue">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-900">{member.name}</h3>
              <p className="text-trisBlue font-semibold uppercase tracking-wide mt-1">{member.title}</p>
            </div>
          ))}
        </div>
        

      </div>
    </section>
  );
};

export default Team;
