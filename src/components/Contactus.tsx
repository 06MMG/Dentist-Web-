import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <section className="relative bg-gray-50 py-20">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 rounded-b-full"></div>
        <div className="absolute bottom-0 right-0 w-full h-40 bg-gradient-to-l from-purple-400 to-blue-500 opacity-20 rounded-t-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Title */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-12">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
              Get in Touch
            </h3>
            <p className="text-gray-600 mb-4">
              We'd love to hear from you! Whether you have a question about our
              services, pricing, or anything else, our team is ready to answer
              all your questions.
            </p>
            <div className="mt-6 space-y-4">
              <p className="flex items-center text-gray-800">
                <i className="fas fa-phone-alt text-blue-500 mr-4"></i>
                <span>+1 (555) 123-4567</span>
              </p>
              <p className="flex items-center text-gray-800">
                <i className="fas fa-envelope text-purple-500 mr-4"></i>
                <span>info@dentalcare.com</span>
              </p>
              <p className="flex items-center text-gray-800">
                <i className="fas fa-map-marker-alt text-blue-500 mr-4"></i>
                <span>123 Dental St, Smile City, USA</span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
              Send Us a Message
            </h3>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full mb-4 px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full mb-4 px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full mb-4 px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              ></textarea>
              <button
                type="submit"
                className="w-full py-2 sm:py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-20 left-10 sm:left-20 w-40 sm:w-64 h-40 sm:h-64 bg-purple-500 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-blue-400 opacity-30 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ContactUs;

