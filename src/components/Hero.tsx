import React from 'react';
import { ArrowRight, Play, Shield, Zap, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id='home' className='relative bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-10 left-10 w-32 h-32 bg-amber-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10 right-10 w-48 h-48 bg-orange-600 rounded-full blur-3xl'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-600 rounded-full blur-3xl'></div>
      </div>

      <div className='relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Hero Content */}
          <div className='space-y-8'>
            {/* Patent Badge */}
            <div className='inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-amber-700 border border-amber-200'>
              <Shield className='w-4 h-4 mr-2' />
              Patent: ET UM1207B1 — Utility Model
            </div>

            {/* Main Headline */}
            <div className='space-y-4'>
              <h1 className='text-4xl lg:text-6xl font-bold text-gray-900 leading-tight'>
                Automating a<span className='text-amber-600 block'>Daily National </span>
                <span className='text-amber-600 block'>Staple Food</span>
                <p className='text-xl lg:text-2xl text-gray-900 leading-relaxed'>
                  For the second largest population in
                  <span className='text-green-600 text-3xl'> Africa</span>
                </p>
              </h1>
              <p className='text-xl lg:text-2xl text-gray-700 leading-relaxed'>
                The first patented automatic injera machine for hands-free production, consistent quality, and healthier
                work environments.
              </p>
            </div>

            {/* Key Stats */}
            <div className='grid grid-cols-3 gap-6 py-6'>
              <div className='text-center'>
                <div className='text-2xl lg:text-3xl font-bold text-amber-600'>240+</div>
                <div className='text-sm text-gray-600'>Pieces/Hour</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl lg:text-3xl font-bold text-amber-600'>30%</div>
                <div className='text-sm text-gray-600'>Energy Savings</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl lg:text-3xl font-bold text-amber-600'>100%</div>
                <div className='text-sm text-gray-600'>Hands-Free</div>
              </div>
            </div>

            {/* CTAs */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <button
                onClick={() => scrollToSection('contact')}
                className='inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-amber-600 rounded-xl hover:bg-amber-700 transform hover:scale-105 transition-all duration-200 shadow-lg'
              >
                Request Demo
                <ArrowRight className='w-5 h-5 ml-2' />
              </button>
              <button
                onClick={() => scrollToSection('downloads')}
                className='inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-amber-600 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-white border-2 border-amber-600 transition-all duration-200'
              >
                Download Investor Pack
              </button>
            </div>

            {/* Trust Indicators */}
            <div className='flex flex-wrap items-center gap-6 text-sm text-gray-600'>
              <div className='flex items-center'>
                <div className='w-2 h-2 bg-green-500 rounded-full mr-2'></div>
                Prototype Tested
              </div>
              <div className='flex items-center'>
                <div className='w-2 h-2 bg-green-500 rounded-full mr-2'></div>
                Patent Protected
              </div>
            </div>
          </div>

          {/* Hero Image/Video Placeholder */}
          <div className='relative'>
            <div className='relative bg-white rounded-2xl shadow-2xl overflow-hidden'>
              {/* Main Image Placeholder */}
              <div className='aspect-video bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center'>
                <div className='text-center'>
                  <Play className='w-16 h-16 text-amber-600 mx-auto mb-4' />
                  <p className='text-lg font-semibold text-gray-700'>Watch Prototype Demo</p>
                  <p className='text-sm text-gray-500'>See Engocha in action</p>
                </div>
              </div>
            </div>
          </div>
          <div className='relative flex flex-col md:flex-row justify-center items-center gap-4 w-full'>
            {/* Floating Stats Cards */}
            <div className='bg-white rounded-xl shadow-lg p-4 border'>
              <div className='flex items-center space-x-3'>
                <div className='w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center'>
                  <Zap className='w-5 h-5 text-green-600' />
                </div>
                <div>
                  <div className='font-semibold text-gray-900'>Energy Efficient</div>
                  <div className='text-sm text-gray-500'>30% less power usage</div>
                </div>
              </div>
            </div>

            <div className='bg-white rounded-xl shadow-lg p-4 border'>
              <div className='flex items-center space-x-3'>
                <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center'>
                  <Users className='w-5 h-5 text-blue-600' />
                </div>
                <div>
                  <div className='font-semibold text-gray-900'>Social Impact</div>
                  <div className='text-sm text-gray-500'>Reduces labor burden</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
