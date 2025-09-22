import React from 'react';
import { TrendingUp, Shield, HeartHandshake, BookOpen, Phone, Target } from 'lucide-react';

const Franchise: React.FC = () => {
  const franchiseBenefits = [
    {
      icon: TrendingUp,
      title: 'Business Model',
      description: 'Revenue streams with clear ROI projections and scalable operations.',
      color: 'text-green-600 bg-green-100',
    },
    {
      icon: Shield,
      title: 'Protected Territory',
      description: 'Exclusive geographic rights with patent protection and trademark licensing.',
      color: 'text-blue-600 bg-blue-100',
    },
    {
      icon: BookOpen,
      title: 'Complete Training',
      description: 'Comprehensive training program covering operations, maintenance, and business management.',
      color: 'text-purple-600 bg-purple-100',
    },
    {
      icon: HeartHandshake,
      title: 'Support',
      description: '24/7 technical support, marketing assistance, and continuous business development.',
      color: 'text-amber-600 bg-amber-100',
    },
  ];

  const revenueStreams = [
    {
      stream: 'Machine Sales',
      description: 'Direct equipment sales to restaurants and facilities',
      percentage: '70%',
      color: 'bg-blue-500',
    },
    {
      stream: 'Service Contracts',
      description: 'Maintenance, training, and ongoing support services',
      percentage: '20%',
      color: 'bg-green-500',
    },
    {
      stream: 'Spare Parts',
      description: 'Replacement components and upgrade packages',
      percentage: '10%',
      color: 'bg-amber-500',
    },
  ];

  return (
    <section id='franchise' className='py-20 bg-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Business Model Overview */}
        <div className='bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 lg:p-12 mb-16'>
          <div className='text-center mb-12'>
            <h3 className='text-5xl font-bold text-gray-900 mb-4'>Business Model Overview</h3>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Multiple revenue streams create sustainable, profitable partnerships with strong market demand
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-12'>
            {/* Revenue Breakdown */}
            <div>
              <h4 className='text-xl font-bold text-gray-900 mb-6'>Revenue Streams</h4>
              <div className='space-y-4'>
                {revenueStreams.map((stream, index) => (
                  <div key={index} className='bg-white rounded-lg p-4 shadow-md'>
                    <div className='flex items-center justify-between mb-2'>
                      <h5 className='font-semibold text-gray-900'>{stream.stream}</h5>
                      <span className='font-bold text-amber-600'>{stream.percentage}</span>
                    </div>
                    <p className='text-sm text-gray-600 mb-3'>{stream.description}</p>
                    <div className='w-full bg-gray-200 rounded-full h-2'>
                      <div
                        className={`${stream.color} h-2 rounded-full transition-all duration-500`}
                        style={{ width: stream.percentage }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Opportunity */}
            <div>
              <h4 className='text-xl font-bold text-gray-900 mb-6'>Market Opportunity</h4>
              <div className='space-y-6'>
                <div className='bg-white rounded-lg p-6 shadow-md'>
                  <div className='flex items-center mb-4'>
                    <Target className='w-8 h-8 text-green-600 mr-3' />
                    <h5 className='font-bold text-gray-900'>Total Addressable Market (upto 3 years)</h5>
                  </div>
                  <div className='grid grid-cols-2 gap-4 text-center'>
                    <div>
                      <div className='text-2xl font-bold text-green-600'>200M ETB</div>
                      <div className='text-sm text-gray-600'>Market Size</div>
                    </div>
                    <div>
                      <div className='text-2xl font-bold text-blue-600'>30%</div>
                      <div className='text-sm text-gray-600'>Annual Growth Rate</div>
                    </div>
                  </div>
                </div>

                <div className='bg-white rounded-lg p-6 shadow-md'>
                  <h5 className='font-bold text-gray-900 mb-3'>Target Segments</h5>
                  <div className='space-y-2'>
                    <div className='flex justify-between items-center'>
                      <span className='text-gray-600'>Restaurants, Hotels & Enterprises</span>
                      <span className='font-semibold'>50%</span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-gray-600'>Export Facilities</span>
                      <span className='font-semibold'>25%</span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-gray-600'>Food Processors</span>
                      <span className='font-semibold'>25%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Franchise Benefits */}
        <div className='mb-16'>
          <h3 className='text-3xl font-bold text-gray-900 text-center mb-12'>Why Partner With Us</h3>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {franchiseBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className='text-center'>
                  <div
                    className={`w-16 h-16 ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className='w-8 h-8' />
                  </div>
                  <h4 className='text-lg font-bold text-gray-900 mb-3'>{benefit.title}</h4>
                  <p className='text-gray-600 text-sm'>{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className='text-center bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl p-12 text-white'>
          <h3 className='text-3xl font-bold mb-4'>Ready to Transform Your Market?</h3>
          <p className='text-xl mb-8 opacity-90'>
            Join our growing network of partners and bring revolutionary injera technology to your region
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='inline-flex items-center px-8 py-4 text-lg font-semibold text-amber-600 bg-white rounded-xl hover:bg-gray-50 transition-colors'>
              <HeartHandshake className='w-5 h-5 mr-2' />
              Become a Partner
            </button>
            <button className='inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-white/20 border-2 border-white rounded-xl hover:bg-white/30 transition-colors'>
              <Phone className='w-5 h-5 mr-2' />
              Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Franchise;
