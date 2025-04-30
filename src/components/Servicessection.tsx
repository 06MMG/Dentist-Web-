import React from 'react';

const ServicesOverview: React.FC = () => {
  return (
    <section className="relative bg-gray-50 py-10 lg:py-20 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 lg:h-40 bg-gradient-to-r from-blue-400 to-purple-500 opacity-30 rounded-b-full"></div>
        <div className="absolute bottom-0 right-0 w-full h-32 lg:h-40 bg-gradient-to-l from-purple-400 to-blue-500 opacity-30 rounded-t-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Title */}
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-10 lg:mb-16">
          Our Dental Services
        </h2>

        {/* Service Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {[
            {
              title: 'Preventive Care',
              description: 'Routine check-ups and cleanings to keep your smile healthy.',
              icon: '🦷',
              color: 'bg-blue-500',
            },
            {
              title: 'Cosmetic Dentistry',
              description: 'Transform your smile with whitening, veneers, and more.',
              icon: '✨',
              color: 'bg-green-500',
            },
            {
              title: 'Restorative Care',
              description: 'Get your smile back with crowns, fillings, and implants.',
              icon: '🔧',
              color: 'bg-purple-500',
            },
            {
              title: 'Orthodontics',
              description: 'Straighten your teeth with braces or aligners.',
              icon: '🦷',
              color: 'bg-pink-500',
            },
            {
              title: 'Pediatric Dentistry',
              description: 'Gentle dental care for your little ones.',
              icon: '🎈',
              color: 'bg-yellow-500',
            },
            {
              title: 'Emergency Services',
              description: 'Quick care for unexpected dental issues.',
              icon: '🚑',
              color: 'bg-red-500',
            },
          ].map((service, index) => (
            <div
              key={index}
              className={`relative shadow-xl rounded-xl p-6 sm:p-8 text-white ${service.color} hover:scale-105 transform transition-all duration-300`}
            >
              <div className="absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-white text-3xl sm:text-4xl rounded-full flex items-center justify-center shadow-md">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mt-10 sm:mt-12 text-center">
                {service.title}
              </h3>
              <p className="text-center text-sm sm:text-lg mt-4">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10 sm:mt-16 text-center">
          <a
            href="#contact"
            className="px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white text-sm sm:text-lg font-semibold rounded-full shadow-md hover:bg-blue-700 transition-all"
          >
            Explore All Services
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-10 sm:-top-20 left-10 sm:left-20 w-32 sm:w-64 h-32 sm:h-64 bg-purple-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 sm:-bottom-20 right-10 sm:right-20 w-36 sm:w-72 h-36 sm:h-72 bg-blue-600 opacity-30 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ServicesOverview;
