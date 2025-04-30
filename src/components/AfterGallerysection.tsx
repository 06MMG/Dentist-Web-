import React from 'react';
import after from '../assets/after.png';
import before from '../assets/before.png';
import after1 from '../assets/after1.png';
import before1 from '../assets/before1.png';
import after2 from '../assets/after2.png';
import before2 from '../assets/before2.png';

const BeforeAfterGallery: React.FC = () => {
  const galleryItems = [
    {
      beforeImage: before,
      afterImage: after,
      title: 'Smile Makeover',
    },
    {
      beforeImage: before1,
      afterImage: after1,
      title: 'Teeth Whitening',
    },
    {
      beforeImage: before2,
      afterImage: after2,
      title: 'Orthodontic Treatment',
    },
  ];

  return (
    <section className="relative bg-gray-50 py-16">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 rounded-b-full"></div>
        <div className="absolute bottom-0 right-0 w-full h-40 bg-gradient-to-l from-purple-400 to-blue-500 opacity-20 rounded-t-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Title */}
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-12">
          Before & After Gallery
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
            >
              <div className="relative">
                {/* Before Image */}
                <div className="h-40 sm:h-48 md:h-56 w-full">
                  <img
                    src={item.beforeImage}
                    alt={`${item.title} Before`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="absolute top-2 left-2 bg-blue-500 text-white text-sm sm:text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  Before
                </span>
              </div>
              <div className="relative">
                {/* After Image */}
                <div className="h-40 sm:h-48 md:h-56 w-full">
                  <img
                    src={item.afterImage}
                    alt={`${item.title} After`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="absolute top-2 left-2 bg-green-500 text-white text-sm sm:text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  After
                </span>
              </div>
              {/* Title Overlay */}
              <div className="absolute bottom-4 left-4 text-white text-sm sm:text-lg font-bold bg-black bg-opacity-50 px-2 py-1 rounded">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white text-sm sm:text-lg font-semibold rounded-full shadow-md hover:bg-blue-700 transition-all"
          >
            Book Your Transformation
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-16 left-10 w-48 sm:w-64 h-48 sm:h-64 bg-purple-500 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-16 right-10 w-56 sm:w-72 h-56 sm:h-72 bg-blue-400 opacity-30 rounded-full blur-3xl"></div>
    </section>
  );
};

export default BeforeAfterGallery;
