import React, { useState } from 'react';
import { Menu, X, Download, Calendar } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className='bg-white shadow-sm sticky top-0 z-50'>
      <nav className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4'>
          {/* Logo */}
          <div className='flex items-center space-x-3'>
            <div className='w-16 h-16 bg-transparent rounded-lg flex items-center justify-center'>
              <img src='/logo.png' className='rounded-full' />
            </div>
            <div className='text-3xl font-bold text-gray-900 leading-tight'>Engocha</div>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-8'>
            <button
              onClick={() => scrollToSection('home')}
              className='text-gray-700 hover:text-amber-600 transition-colors'
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('product')}
              className='text-gray-700 hover:text-amber-600 transition-colors'
            >
              Product
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className='text-gray-700 hover:text-amber-600 transition-colors'
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('technology')}
              className='text-gray-700 hover:text-amber-600 transition-colors'
            >
              Technology
            </button>
            <button
              onClick={() => scrollToSection('prototype')}
              className='text-gray-700 hover:text-amber-600 transition-colors'
            >
              Development
            </button>
            <button
              onClick={() => scrollToSection('franchise')}
              className='text-gray-700 hover:text-amber-600 transition-colors'
            >
              Franchise
            </button>
            <button
              onClick={() => scrollToSection('investors')}
              className='text-gray-700 hover:text-amber-600 transition-colors'
            >
              Investors
            </button>
          </div>

          {/* CTA Buttons */}
          <div className='hidden lg:flex items-center space-x-4'>
            <button
              onClick={() => scrollToSection('contact')}
              className='inline-flex items-center px-4 py-2 text-sm font-medium text-amber-600 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors'
            >
              <Calendar className='w-4 h-4 mr-2' />
              Book Demo
            </button>
            <button
              onClick={() => scrollToSection('downloads')}
              className='inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-amber-600 rounded-lg hover:bg-amber-700 transition-colors'
            >
              <Download className='w-4 h-4 mr-2' />
              Investor Pack
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='lg:hidden p-2 rounded-md text-gray-700 hover:text-amber-600'
          >
            {isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='lg:hidden py-4 border-t'>
            <div className='flex flex-col space-y-4'>
              <button
                onClick={() => scrollToSection('home')}
                className='text-left py-2 text-gray-700 hover:text-amber-600'
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('product')}
                className='text-left py-2 text-gray-700 hover:text-amber-600'
              >
                Product
              </button>
              <button
                onClick={() => scrollToSection('technology')}
                className='text-left py-2 text-gray-700 hover:text-amber-600'
              >
                Technology
              </button>
              <button
                onClick={() => scrollToSection('prototype')}
                className='text-left py-2 text-gray-700 hover:text-amber-600'
              >
                Development
              </button>
              <button
                onClick={() => scrollToSection('franchise')}
                className='text-left py-2 text-gray-700 hover:text-amber-600'
              >
                Franchise
              </button>
              <button
                onClick={() => scrollToSection('investors')}
                className='text-left py-2 text-gray-700 hover:text-amber-600'
              >
                Investors
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className='text-left py-2 text-gray-700 hover:text-amber-600'
              >
                Gallery
              </button>
              <div className='flex flex-col space-y-2 pt-4 border-t'>
                <button
                  onClick={() => scrollToSection('contact')}
                  className='inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-amber-600 bg-amber-50 rounded-lg hover:bg-amber-100'
                >
                  <Calendar className='w-4 h-4 mr-2' />
                  Book Demo
                </button>
                <button
                  onClick={() => scrollToSection('downloads')}
                  className='inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-amber-600 rounded-lg hover:bg-amber-700'
                >
                  <Download className='w-4 h-4 mr-2' />
                  Investor Pack
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
