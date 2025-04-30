import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './styles.css';

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const emailUrl = "mailto:example@domain.com";

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLinkClick = (sectionId: string) => {
    setNav(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
      }`}>
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-gray-800">
        {/* Brand Name */}
        <div className="flex items-center">
          <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-gray-300 tracking-wide">
            DENTAL.
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className='flex space-x-6'>
            <li>
              <button
                onClick={() => handleLinkClick('home')}
                className="p-2 transition-all duration-300 ease-in-out rounded-md font-bold hover:bg-blue-500 hover:text-white text-gray-800"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick('about')}
                className="p-2 transition-all duration-300 ease-in-out rounded-md font-bold hover:bg-blue-500 hover:text-white text-gray-800"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("gallery")}
                className="p-2 transition-all duration-300 ease-in-out rounded-md font-bold hover:bg-blue-500 hover:text-white text-gray-800"
              >
                Before & After
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("why-choose-us")}
                className="p-2 transition-all duration-300 ease-in-out rounded-md font-bold hover:bg-blue-500 hover:text-white text-gray-800"
              >
                Choose Us
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("services")}
                className="p-2 transition-all duration-300 ease-in-out rounded-md font-bold hover:bg-blue-500 hover:text-white text-gray-800"
              >
                Dental Services
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("team")}
                className="p-2 transition-all duration-300 ease-in-out rounded-md font-bold hover:bg-blue-500 hover:text-white text-gray-800"
              >
                Team
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("contact")}
                className="p-2 transition-all duration-300 ease-in-out rounded-md font-bold hover:bg-blue-500 hover:text-white text-gray-800"
              >
                Contact Us
              </button>
            </li>
            {/* Add other menu items similarly */}
          </ul>

          {/* Contact Info */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 font-bold text-gray-700 hover:text-blue-500 transition-colors duration-300">
              <FaPhoneAlt />
              <span>+16472212308</span>
            </div>
            <div
              className="flex items-center space-x-2 font-bold text-gray-700 hover:text-blue-500 transition-colors duration-300 cursor-pointer"
              onClick={() => window.open(emailUrl)}
            >
              <FaEnvelope />
            </div>
          </div>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center space-x-4">
          <FaPhoneAlt size={20} className="text-gray-700" />
          <span className="text-gray-700 font-bold">+16472212308</span>
          <div onClick={handleNav} className="z-50 cursor-pointer">
            {nav ? <AiOutlineClose size={24} className="text-blue-500" /> : <AiOutlineMenu size={24} className="text-blue-500" />}
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`${nav ? 'fixed left-0 top-0 w-[60%] h-full bg-gray-900 z-50' : 'hidden'} transition-all ease-in-out duration-500`}>
        <h1 className="w-full text-3xl font-bold text-blue-500 m-6">DENTAL.</h1>
        <div className='py-4 flex flex-col'>
          <ul className='uppercase'>
            <li>
              <button
                onClick={() => handleLinkClick('home')}
                className='py-4 text-sm text-gray-300 hover:text-white px-6 w-full text-left'
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick('about')}
                className='py-4 text-sm text-gray-300 hover:text-white px-6 w-full text-left'
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick('gallery')}
                className='py-4 text-sm text-gray-300 hover:text-white px-6 w-full text-left'
              >
                Before & After
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick('why-choose-us')}
                className='py-4 text-sm text-gray-300 hover:text-white px-6 w-full text-left'
              >
                Choose Us
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick('services')}
                className='py-4 text-sm text-gray-300 hover:text-white px-6 w-full text-left'
              >
                Dental Services
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick('team')}
                className='py-4 text-sm text-gray-300 hover:text-white px-6 w-full text-left'
              >
                Team
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick('contact')}
                className='py-4 text-sm text-gray-300 hover:text-white px-6 w-full text-left'
              >
                Contact Us
              </button>
            </li>

            {/* Add other mobile menu items similarly */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;