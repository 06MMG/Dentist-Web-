import React from 'react';

const QualitySection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-100 to-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-r from-blue-300 to-purple-400 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-300 to-blue-400 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center py-16">
          <h2 className="text-6xl font-extrabold text-gray-800">
            Unmatched Excellence
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover how we redefine quality, comfort, and technology for your care.
          </p>
        </div>

        {/* Features Section */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-16">
          {[
            {
              title: 'QUALITY',
              description: 'Precision and care for exceptional results.',
              gradient: 'from-blue-500 to-indigo-500',
              icon: '🌟',
            },
            {
              title: 'COMFORT',
              description: 'Relax in an environment designed for you.',
              gradient: 'from-green-400 to-teal-500',
              icon: '🛋️',
            },
            {
              title: 'TECHNOLOGY',
              description: 'Advanced tools for modern dental care.',
              gradient: 'from-purple-500 to-pink-500',
              icon: '💡',
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${item.gradient} p-8 rounded-xl shadow-xl hover:shadow-2xl transform transition-transform hover:scale-105`}
            >
              <div className="absolute -top-6 -right-6 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg text-3xl">
                {item.icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-white text-lg">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Interactive Grid Section */}
        <div className="mt-20">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Section */}
            <div className="relative group">
              <div className="rounded-lg overflow-hidden shadow-xl transform group-hover:scale-105 transition">
                <img
                  src="https://via.placeholder.com/600x400?text=Dr.+James"
                  alt="Dr. James"
                  className="w-full object-cover"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-60 group-hover:opacity-80 transition"></div>
              <p className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                Dr. James, Dentistry Expert
              </p>
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-5xl font-extrabold text-gray-800 mb-6">
                Meet Dr. James
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Dr. James is at the forefront of modern dentistry, combining
                years of expertise with cutting-edge technology to ensure
                every patient receives outstanding care.
              </p>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-center">
                  <span className="mr-4 text-blue-500">✔</span>
                  Personalized care plans tailored to your needs.
                </li>
                <li className="flex items-center">
                  <span className="mr-4 text-blue-500">✔</span>
                  Advanced techniques for precise results.
                </li>
                <li className="flex items-center">
                  <span className="mr-4 text-blue-500">✔</span>
                  A compassionate approach for your comfort.
                </li>
              </ul>
              <a
                href="#about"
                className="mt-8 inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full shadow-md hover:bg-opacity-90 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-28 py-16 bg-gray-50 rounded-lg shadow-inner">
          <div className="container mx-auto text-center">
            <h3 className="text-4xl font-extrabold text-gray-800">
              Hear From Our Patients
            </h3>
            <p className="mt-4 text-gray-600 text-lg">
              Stories of happy smiles from those we've served.
            </p>

            {/* Testimonials */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Sarah J.',
                  feedback:
                    'Dr. James and his team made me feel so comfortable during my treatment. I couldn’t be happier with the results!',
                  img: 'https://via.placeholder.com/150?text=Sarah',
                },
                {
                  name: 'Michael T.',
                  feedback:
                    'State-of-the-art technology and a friendly staff! Highly recommend Dr. James for all your dental needs.',
                  img: 'https://via.placeholder.com/150?text=Michael',
                },
                {
                  name: 'Emily R.',
                  feedback:
                    'They truly care about their patients. Every step was explained clearly, and the results were amazing!',
                  img: 'https://via.placeholder.com/150?text=Emily',
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="p-8 bg-white shadow-lg rounded-lg hover:shadow-2xl transform transition-transform hover:-translate-y-2"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover shadow-md"
                    />
                    <h4 className="text-xl font-bold text-gray-800">
                      {testimonial.name}
                    </h4>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white">
            Book Your Appointment Today
          </h2>
          <p className="mt-4 text-blue-100 text-lg">
            Let us transform your smile with care and precision.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block px-12 py-4 bg-white text-blue-600 font-bold rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;








