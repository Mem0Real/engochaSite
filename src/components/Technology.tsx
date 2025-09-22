import React from 'react';
import { techSpecs } from '../data/techSpecs';
import { Cpu, Thermometer, Shield, Gauge, Leaf, Settings, CheckCircle } from 'lucide-react';

const Technology: React.FC = () => {
  const getIcon = (feature: string) => {
    switch (feature) {
      case 'Temperature Control':
        return Thermometer;
      case 'Control System':
        return Cpu;
      case 'Safety Features':
        return Shield;
      case 'Energy Efficiency':
        return Leaf;
      case 'Production Capacity':
        return Gauge;
      case 'Quality Control':
        return CheckCircle;
      default:
        return Settings;
    }
  };

  const getIconColor = (feature: string) => {
    switch (feature) {
      case 'Temperature Control':
        return 'text-red-600 bg-red-100';
      case 'Control System':
        return 'text-blue-600 bg-blue-100';
      case 'Safety Features':
        return 'text-green-600 bg-green-100';
      case 'Energy Efficiency':
        return 'text-emerald-600 bg-emerald-100';
      case 'Production Capacity':
        return 'text-purple-600 bg-purple-100';
      case 'Quality Control':
        return 'text-amber-600 bg-amber-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section id='technology' className='py-20 bg-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>Advanced Technology</h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Our patented system combines traditional injera-making knowledge with cutting-edge automation technology for
            consistent, high-quality production.
          </p>
        </div>

        {/* Technical Specifications Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
          {techSpecs.map((spec, index) => {
            const Icon = getIcon(spec.feature);
            const iconColorClass = getIconColor(spec.feature);

            return (
              <div
                key={index}
                className='bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300'
              >
                <div className={`w-12 h-12 ${iconColorClass} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className='w-6 h-6' />
                </div>

                <h3 className='text-lg font-bold text-gray-900 mb-2'>{spec.feature}</h3>
                <p className='text-sm font-medium text-amber-600 mb-3'>{spec.specification}</p>
                <p className='text-gray-600 text-sm'>{spec.benefit}</p>
              </div>
            );
          })}
        </div>

        {/* Innovation Highlights */}
        <div className='bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 lg:p-12'>
          <div className='text-center mb-12'>
            <h3 className='text-3xl font-bold text-gray-900 mb-4'>Innovation Highlights</h3>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Our breakthrough technology addresses the key challenges in traditional injera production
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Gauge className='w-8 h-8 text-white' />
              </div>
              <h4 className='text-xl font-bold text-gray-900 mb-3'>Precision Control</h4>
              <p className='text-gray-600'>
                Automated batter dispensing ensures perfect thickness and consistency for every injera, eliminating
                human error.
              </p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Leaf className='w-8 h-8 text-white' />
              </div>
              <h4 className='text-xl font-bold text-gray-900 mb-3'>Sustainability</h4>
              <p className='text-gray-600'>
                Energy-efficient design reduces power consumption by 30% while maintaining superior cooking performance.
              </p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Shield className='w-8 h-8 text-white' />
              </div>
              <h4 className='text-xl font-bold text-gray-900 mb-3'>Worker Safety</h4>
              <p className='text-gray-600'>
                Eliminates exposure to high heat and repetitive strain, creating safer, healthier work environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
