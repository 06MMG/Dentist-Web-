import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsappSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: FaInstagram, url: "/", hoverColor: "hover:text-[#E1306C]" },
    { icon: FaLinkedin, url: "", hoverColor: "hover:text-[#3091e1]" },
    { icon: FaWhatsappSquare, url: "https://wa.me/+16472212308", hoverColor: "hover:text-green-500" },
  ];

  //const fiverrUrl = "https://www.fiverr.com/maliks_studio";

  return (
    <footer className="relative bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 py-12 text-white">
      <div className="max-w-[1240px] mx-auto px-6 grid lg:grid-cols-3 gap-8">
        {/* Logo and About Section */}
        <div>
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-blue-300 to-gray-100">
            DENTAL.
          </h1>
          <p className="mt-4 text-sm text-gray-200">
            Join our platform to Enhance, Care, and Transform smiles. We offer professional dental services to help bring your oral health goals to life.
          </p>

          <div className="flex space-x-6 mt-6">
            {socialLinks.map(({ icon: Icon, url, hoverColor }, index) => (
              <a key={index} href={url} target="_blank" rel="noopener noreferrer" className={`text-3xl ${hoverColor} transition duration-300`}>
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h6 className="text-xl font-semibold mb-4 text-gray-50">Quick Links</h6>
            <ul className="space-y-2 text-gray-200">
              {["Home", "About Us", 'Before & After', 'Choose Us','Dental Services','Team', "Contact Us"].map(
                (text, index) => (
                  <li key={index} className="text-sm transition-all duration-300 hover:text-gray-50 hover:scale-105">
                    <Link to={`/${text.replace(/\s+/g, '').toLowerCase()}`}>{text}</Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h6 className="text-xl font-semibold mb-4 text-gray-50">Contact</h6>
            <ul className="space-y-2 text-gray-200">
              <li className="text-sm transition-all duration-300 hover:text-gray-50">
                <Link to="/contactus">Contact Us</Link>
              </li>
              <li className="text-sm">
                Email:{" "}
                <a href="mailto:dental@gmail.com" className="hover:text-gray-50 transition duration-300">
                  dental@gmail.com
                </a>
              </li>
              <li className="text-sm">
                Phone:{" "}
                <a href="tel:+16472212308" className="hover:text-gray-50 transition duration-300">
                  +16472212308
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-purple-400 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-400 opacity-30 blur-3xl rounded-full"></div>

      {/* Footer Bottom */}
      <div className="text-center mt-12 text-gray-300 text-sm">
        <p>© 2025 Dentist | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

