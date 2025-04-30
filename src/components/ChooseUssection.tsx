import React from 'react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="relative bg-white py-16 sm:py-20 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 rounded-b-full"></div>
        <div className="absolute bottom-0 right-0 w-full h-40 bg-gradient-to-l from-purple-400 to-blue-500 opacity-20 rounded-t-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Title */}
        <h2 className="text-center text-3xl sm:text-5xl font-extrabold text-gray-800 mb-12 sm:mb-16">
          Why Choose Us?
        </h2>

        {/* Feature Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {[
            {
              title: 'Experienced Professionals',
              description: 'Our team of experts brings years of experience to ensure top-notch care.',
              icon: '👩‍⚕️',
              color: 'bg-blue-500',
            },
            {
              title: 'State-of-the-Art Technology',
              description: 'We use the latest tools for accurate and effective treatments.',
              icon: '💻',
              color: 'bg-purple-500',
            },
            {
              title: 'Patient-Centered Care',
              description: 'We prioritize your comfort and satisfaction above all.',
              icon: '❤️',
              color: 'bg-red-500',
            },
            {
              title: 'Flexible Appointments',
              description: 'We work around your schedule to make visits convenient.',
              icon: '📅',
              color: 'bg-green-500',
            },
            {
              title: 'Affordable Services',
              description: 'High-quality care at prices that won’t break the bank.',
              icon: '💰',
              color: 'bg-yellow-500',
            },
            {
              title: 'Safe & Hygienic',
              description: 'We follow strict hygiene protocols for your safety.',
              icon: '🧼',
              color: 'bg-teal-500',
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`relative rounded-xl shadow-xl p-6 sm:p-8 text-white ${item.color} hover:scale-105 transform transition-all duration-300`}
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-16 sm:h-20 bg-white text-3xl sm:text-4xl rounded-full flex items-center justify-center shadow-md">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-2xl font-bold mt-10 sm:mt-12 text-center">
                {item.title}
              </h3>
              <p className="text-sm sm:text-lg mt-4 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-20 left-10 w-48 sm:w-64 h-48 sm:h-64 bg-blue-400 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 right-10 w-56 sm:w-72 h-56 sm:h-72 bg-purple-600 opacity-20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default WhyChooseUs;
