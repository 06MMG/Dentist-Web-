import React from 'react';
import image from '../assets/The-Role-of-a-Dentist-in-Maintaining-Your-Oral-Health.png';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-200 to-blue-500 py-20 lg:py-28 overflow-hidden">
      {/* Diagonal Divider */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-blue-100 to-transparent transform -skew-y-6 -z-10"></div>
      
      <div className="container mx-auto px-6 lg:flex lg:items-center lg:space-x-12">
        {/* Content Section */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-wide drop-shadow-lg relative">
            Transform Your Smile <br />
            <span className="text-blue-900">With Expert Care</span>
            <div className="absolute -top-4 -left-4 text-blue-200 text-7xl lg:text-8xl font-bold opacity-20 pointer-events-none">
              Smile
            </div>
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-blue-50 drop-shadow-md">
            Discover advanced dental treatments delivered with compassion and precision. Your smile deserves the best care.
          </p>
          <div className="mt-8 flex flex-col lg:flex-row lg:space-x-4 justify-center lg:justify-start">
            <a
              href="#appointment"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-gradient-to-l hover:from-blue-700 hover:to-blue-500 hover:shadow-xl transition-all"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="mt-4 lg:mt-0 px-8 py-3 border-2 border-blue-600 text-blue-600 text-lg font-semibold rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all"
            >
              Explore Services
            </a>
          </div>
        </div>
        {/* Image Section */}
        <div className="mt-12 lg:mt-0 lg:w-1/2 relative">
          <div className="relative">
            <img
              src={image}
              alt="Dental care"
              className="w-full rounded-lg shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-500"
            />
            {/* Decorative Layered Circles */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-400 opacity-30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-500 opacity-25 rounded-full blur-2xl"></div>
          </div>
          {/* Floating Small Card */}
<div className="absolute top-8 right-4 lg:-right-16 bg-white shadow-lg p-4 rounded-lg text-center transform hover:translate-y-2 transition-all duration-300 max-w-[90%] lg:max-w-xs">
  <h3 className="text-lg font-semibold text-blue-600">Why Choose Us?</h3>
  <p className="mt-2 text-sm text-gray-600">
    Trusted by thousands for exceptional dental care.
  </p>
</div>

        </div>
      </div>
      {/* Additional Decorative Elements */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-300 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;

