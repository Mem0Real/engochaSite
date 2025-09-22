import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Shield, Award, Leaf, Users } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Product Models', id: 'product' },
    { label: 'Technology', id: 'technology' },
    { label: 'Development', id: 'prototype' },
    { label: 'Franchise', id: 'franchise' },
    { label: 'Investors', id: 'investors' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Downloads', id: 'downloads' },
    { label: 'Contact', id: 'contact' },
  ];

  const legalLinks = [
    'Privacy Policy',
    'Terms of Service',
    'Patent Information',
    'Trademark Notice',
    'Franchise Disclosure',
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
  ];

  const trustBadges = [
    { icon: Award, label: 'Patent Protected', description: 'ET UM1207B1' },
    { icon: Shield, label: 'Quality Assured', description: 'ISO Standards' },
    { icon: Leaf, label: 'Eco-Friendly', description: '30% Energy Savings' },
    { icon: Users, label: 'Trusted Partner', description: '5+ Restaurants' },
  ];

  return (
    <footer className='bg-gray-900 text-white'>
      {/* Main Footer */}
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid lg:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div className='lg:col-span-1 space-y-6'>
            {/* Logo */}
            <div className='flex items-center space-x-3'>
              <div className='w-10 h-10 bg-transparent rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-lg'>
                  <img src='../../public/images/logo.png' className='w-8' />
                </span>
              </div>
              <div className='text-xl font-bold'>
                Engocha
                <div className='text-xs text-amber-400 font-medium'>Automated Injera Solutions</div>
              </div>
            </div>

            <p className='text-gray-300 leading-relaxed'>
              Revolutionizing injera production with patented automation technology. Bringing consistency, efficiency,
              and health benefits to traditional injera making.
            </p>

            {/* Contact Info */}
            <div className='space-y-3'>
              <div className='flex items-center text-gray-300'>
                <Mail className='w-5 h-5 mr-3 text-amber-400' />
                <span>engocha@gmail.com</span>
              </div>
              <div className='flex items-center text-gray-300'>
                <Phone className='w-5 h-5 mr-3 text-amber-400' />
                <span>+251 913 085 993</span>
              </div>
              <div className='flex items-center text-gray-300'>
                <MapPin className='w-5 h-5 mr-3 text-amber-400' />
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>

            {/* Social Links */}
            <div className='flex space-x-4'>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className='w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-colors duration-200'
                    aria-label={social.label}
                  >
                    <Icon className='w-5 h-5' />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-6'>
            <h3 className='text-lg font-bold text-white'>Quick Links</h3>
            <nav className='grid grid-cols-2 gap-2'>
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  className='text-gray-300 hover:text-amber-400 transition-colors duration-200 text-left text-sm py-1'
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Legal & Resources */}
          <div className='space-y-6'>
            <h3 className='text-lg font-bold text-white'>Legal & Resources</h3>
            <nav className='space-y-2'>
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href='#'
                  className='block text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm py-1'
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Newsletter & Trust Badges */}
          <div className='space-y-6'>
            <h3 className='text-lg font-bold text-white'>Stay Updated</h3>

            {/* Newsletter Signup */}
            <div className='space-y-3'>
              <p className='text-gray-300 text-sm'>
                Get the latest updates on our technology and business opportunities.
              </p>
              <form className='flex'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-white'
                />
                <button
                  type='submit'
                  className='px-4 py-2 bg-amber-600 hover:bg-amber-700 rounded-r-lg transition-colors duration-200'
                >
                  <Mail className='w-5 h-5' />
                </button>
              </form>
            </div>

            {/* Trust Badges */}
            <div className='space-y-3'>
              <h4 className='font-semibold text-white text-sm'>Our Credentials</h4>
              <div className='grid grid-cols-2 gap-2'>
                {trustBadges.map((badge, index) => {
                  const Icon = badge.icon;
                  return (
                    <div key={index} className='flex items-center space-x-2'>
                      <Icon className='w-4 h-4 text-amber-400' />
                      <div>
                        <div className='text-xs font-medium text-white'>{badge.label}</div>
                        <div className='text-xs text-gray-400'>{badge.description}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-gray-800'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='text-gray-400 text-sm text-center md:text-left'>
              <p>
                © 2024 Engocha. All rights reserved.
                <span className='ml-2'>Patent: ET UM1207B1</span>
              </p>
            </div>

            <div className='flex items-center space-x-6 text-sm text-gray-400'>
              <span className='flex items-center'>
                <Award className='w-4 h-4 mr-2 text-amber-400' />
                Patent Protected
              </span>
              <span className='flex items-center'>
                <Shield className='w-4 h-4 mr-2 text-green-400' />
                Quality Assured
              </span>
              <span className='flex items-center'>
                <Leaf className='w-4 h-4 mr-2 text-emerald-400' />
                Sustainable Technology
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
