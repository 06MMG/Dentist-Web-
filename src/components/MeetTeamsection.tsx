import React from 'react';
import teamMember1 from '../assets/doctor.png';
import teamMember2 from '../assets/doctor1.png';

const MeetTheTeam: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Lead Dentist',
      image: teamMember1,
      bio: 'Expert in cosmetic dentistry with over 15 years of experience.',
    },
    {
      name: 'Dr. Michael Brown',
      role: 'Orthodontist',
      image: teamMember2,
      bio: 'Specialist in braces and Invisalign treatments for all ages.',
    },
  ];

  return (
    <section className="relative bg-gray-50 py-20">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 rounded-b-full"></div>
        <div className="absolute bottom-0 right-0 w-full h-40 bg-gradient-to-l from-purple-400 to-blue-500 opacity-20 rounded-t-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Title */}
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-10 sm:mb-16">
          Meet the Team
        </h2>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative rounded-lg shadow-lg bg-white overflow-hidden hover:shadow-2xl transform transition-all duration-300"
            >
              {/* Team Member Image */}
              <div className="relative h-56 sm:h-64 w-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-60"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-base sm:text-lg font-bold">{member.name}</h3>
                  <p className="text-sm">{member.role}</p>
                </div>
              </div>

              {/* Team Member Bio */}
              <div className="p-4 sm:p-6 text-center">
                <p className="text-gray-700 text-sm sm:text-base">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <a
            href="#contact"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white text-sm sm:text-lg font-semibold rounded-full shadow-md hover:bg-blue-700 transition-all"
          >
            Schedule Your Consultation
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-20 left-10 sm:left-20 w-40 h-40 sm:w-64 sm:h-64 bg-purple-500 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 right-10 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-blue-400 opacity-30 rounded-full blur-3xl"></div>
    </section>
  );
};

export default MeetTheTeam;

