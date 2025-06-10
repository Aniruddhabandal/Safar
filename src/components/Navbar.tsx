import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/destinations', text: 'Destinations' },
    { to: '/guides', text: 'Travel Guides' },
    { to: '/about', text: 'About' },
    { to: '/contact', text: 'Contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || location.pathname !== '/' 
        ? 'bg-white shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <MapPin className={`h-8 w-8 ${
              isScrolled || location.pathname !== '/' 
                ? 'text-blue-600' 
                : 'text-white'
            }`} />
            <span className={`text-xl font-bold ${
              isScrolled || location.pathname !== '/' 
                ? 'text-gray-900' 
                : 'text-white'
            }`}>
              Safar
            </span>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? 'bg-blue-600 text-white'
                      : isScrolled || location.pathname !== '/'
                      ? 'text-gray-900 hover:text-blue-600'
                      : 'text-white hover:text-blue-200'
                  }`}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                isScrolled || location.pathname !== '/'
                  ? 'text-gray-900 hover:text-blue-600'
                  : 'text-white hover:text-blue-200'
              }`}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Sign Up
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                isScrolled || location.pathname !== '/'
                  ? 'text-gray-900'
                  : 'text-white'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.to
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-900 hover:text-blue-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </Link>
            ))}
            <div className="border-t pt-4">
              <Link
                to="/login"
                className="block px-3 py-2 text-gray-900 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;