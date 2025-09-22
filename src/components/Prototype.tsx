import React from 'react';
import { timeline } from '../data/timeline';
import { CheckCircle, Clock, Calendar, Lightbulb, Wrench, Award, Rocket } from 'lucide-react';

const Prototype: React.FC = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return CheckCircle;
      case 'current':
        return Clock;
      case 'planned':
        return Calendar;
      default:
        return Clock;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-100';
      case 'current':
        return 'text-amber-600 bg-amber-100';
      case 'planned':
        return 'text-gray-600 bg-gray-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getMilestoneIcon = (milestone: string) => {
    if (milestone.includes('Concept')) return Lightbulb;
    if (milestone.includes('Prototype')) return Wrench;
    if (milestone.includes('Patent')) return Award;
    if (milestone.includes('Launch')) return Rocket;
    return CheckCircle;
  };

  return (
    <section id='prototype' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>Prototype & Development</h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            From concept to prototype development — our journey combines rigorous testing with continuous innovation.
          </p>
        </div>

        {/* Development Timeline */}
        <div className='mb-20'>
          <h3 className='text-2xl font-bold text-gray-900 text-center mb-12'>Development Timeline</h3>

          <div className='relative'>
            {/* Timeline Line */}
            <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-amber-200'></div>

            <div className='space-y-12'>
              {timeline.map((item, index) => {
                const StatusIcon = getStatusIcon(item.status);
                const MilestoneIcon = getMilestoneIcon(item.milestone);
                const statusColorClass = getStatusColor(item.status);

                return (
                  <div key={index} className='relative flex items-start ml-16'>
                    {/* Timeline Dot */}
                    <div
                      className={`absolute -left-[4.5rem] w-16 h-16 ${
                        statusColorClass.replace('text-', 'bg-').replace('bg-', 'bg-').split(' ')[1]
                      } rounded-full flex items-center justify-center border-4 border-white shadow-lg`}
                    >
                      <StatusIcon className={`w-6 h-6 ${statusColorClass.split(' ')[0]}`} />
                    </div>

                    {/* Timeline Content */}
                    <div className='bg-white rounded-xl shadow-lg p-6 w-full hover:shadow-xl transition-shadow duration-300'>
                      <div className='flex items-start justify-between mb-4'>
                        <div className='flex items-center space-x-3'>
                          <div className='w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center'>
                            <MilestoneIcon className='w-6 h-6 text-amber-600' />
                          </div>
                          <div>
                            <h4 className='text-xl font-bold text-gray-900'>{item.milestone}</h4>
                            <p className='text-amber-600 font-medium'>
                              {item.year} {item.quarter}
                            </p>
                          </div>
                        </div>

                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColorClass}`}>
                          {item.status === 'completed'
                            ? 'Completed'
                            : item.status === 'current'
                            ? 'In Progress'
                            : 'Planned'}
                        </span>
                      </div>

                      <p className='text-gray-600'>{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Prototype Gallery & Stats */}
        <div className='grid grid-cols-2 gap-12 mb-16 w-full'>
          {/* Prototype Images */}
          <div className='space-y-6'>
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>Prototype Gallery</h3>

            {/* Main Prototype Image */}
            <div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
              <div className='aspect-video bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center'>
                <div className='text-center'>
                  <Wrench className='w-16 h-16 text-amber-600 mx-auto mb-4' />
                  <p className='text-lg font-semibold text-gray-700'>Latest Prototype</p>
                  <p className='text-sm text-gray-500'>ESP32 Control System</p>
                </div>
              </div>
              <div className='p-6'>
                <h4 className='font-bold text-gray-900 mb-2'>Engocha MVP</h4>
                <p className='text-gray-600 text-sm'>
                  Production-ready prototype with automated batter dispensing and PID temperature control
                </p>
              </div>
            </div>
          </div>

          <div className='space-y-6'>
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>Stats</h3>
            {/* Testing Highlights */}
            <div className='bg-white rounded-xl p-6 shadow-lg'>
              <div className='space-y-6'>
                <div className='flex items-center'>
                  <CheckCircle className='w-5 h-5 text-green-600 mr-3' />
                  <div>
                    <div className='font-medium text-gray-900'>Quality Consistency</div>
                    <div className='text-sm text-gray-600'>±2mm thickness variance across all injera</div>
                  </div>
                </div>

                <div className='flex items-center'>
                  <CheckCircle className='w-5 h-5 text-green-600 mr-3' />
                  <div>
                    <div className='font-medium text-gray-900'>Energy Efficiency</div>
                    <div className='text-sm text-gray-600'>30% reduction in power consumption</div>
                  </div>
                </div>

                <div className='flex items-center'>
                  <CheckCircle className='w-5 h-5 text-green-600 mr-3' />
                  <div>
                    <div className='font-medium text-gray-900'>Labor Reduction</div>
                    <div className='text-sm text-gray-600'>Fully automated operation reduces manual labor by 80%</div>
                  </div>
                </div>

                <div className='flex items-center'>
                  <CheckCircle className='w-5 h-5 text-green-600 mr-3' />
                  <div>
                    <div className='font-medium text-gray-900'>Health & Safety</div>
                    <div className='text-sm text-gray-600'>Eliminates heat exposure and repetitive strain injuries</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Patent Information */}
            <div className='bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6'>
              <div className='flex items-center mb-4'>
                <Award className='w-8 h-8 text-amber-600 mr-3' />
                <div>
                  <h4 className='font-bold text-gray-900'>Patent Protection</h4>
                  <p className='text-amber-600 font-medium'>ET UM1207B1</p>
                </div>
              </div>
              <p className='text-gray-600 text-sm'>
                Our utility model patent covers the innovative automated batter dispensing system and temperature
                control mechanism, providing strong IP protection for investors and partners.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center'>
          <h3 className='text-2xl font-bold text-gray-900 mb-4'>See the Prototype in Action</h3>
          <p className='text-gray-600 mb-8 max-w-2xl mx-auto'>
            Schedule a live demonstration to experience Engocha's capabilities firsthand and discuss how it can
            transform your injera production.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-amber-600 rounded-xl hover:bg-amber-700 transition-colors'>
              <Calendar className='w-5 h-5 mr-2' />
              Schedule Demo
            </button>
            <button className='inline-flex items-center px-8 py-4 text-lg font-semibold text-amber-600 bg-white border-2 border-amber-600 rounded-xl hover:bg-amber-50 transition-colors'>
              <Wrench className='w-5 h-5 mr-2' />
              Technical Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prototype;
