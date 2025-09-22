import React from 'react';
import {
  TrendingUp,
  DollarSign,
  Target,
  Award,
  Download,
  Calendar,
  BarChart3,
  PieChart,
  Users,
  Globe,
} from 'lucide-react';

const Investors: React.FC = () => {
  const financialHighlights = [
    {
      metric: 'Investment Ask',
      value: '6.7M ETB',
      description: 'Series A funding round',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      icon: DollarSign,
    },
    {
      metric: 'Projected ROI',
      value: '0.66%+',
      description: '~ 2 years',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      icon: TrendingUp,
    },
    {
      metric: 'Break-even',
      value: '18 months',
      description: 'Post-investment',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      icon: Target,
    },
    {
      metric: 'Market Size',
      value: '200M ETB',
      description: 'TAM',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      icon: Globe,
    },
  ];

  const useOfFunds = [
    { category: 'Raw Materials & Imported Components', percentage: 56.7, amount: '3.8M ETB', color: 'bg-purple-500' },
    { category: 'Manufacturing Setup', percentage: 29.8, amount: '2M ETB', color: 'bg-blue-500' },
    { category: 'Working Capital', percentage: 8.95, amount: '600K ETB', color: 'bg-gray-500' },
    { category: 'R&D & Product Development', percentage: 3, amount: '200K ETB', color: 'bg-green-500' },
    { category: 'Marketing & Promotion', percentage: 1.4, amount: '100K ETB', color: 'bg-amber-500' },
  ];

  const milestones = [
    {
      year: '2026',
      quarter: 'Q2',
      milestone: 'Manufacturing Launch',
      target: '50 units/year production capacity',
      status: 'current',
    },

    {
      year: '2026',
      quarter: 'Q4',
      milestone: 'Market Entry',
      target: 'First 25 customers onboarded',
      status: 'planned',
    },

    {
      year: '2027',
      quarter: 'Q3',
      milestone: 'Profitability',
      target: 'Positive cash flow achieved',
      status: 'planned',
    },

    {
      year: '2028',
      quarter: 'Q1',
      milestone: 'International Expansion',
      target: 'Export to 3 countries',
      status: 'planned',
    },
  ];

  const revenueProjections = [
    { year: '2026', revenue: '10.1M ETB', units: 13, growth: null },
    { year: '2027', revenue: '14.4M ETB', units: 17, growth: '30%' },
    { year: '2028', revenue: '18.7M ETB', units: 22, growth: '35%' },
    { year: '2029', revenue: '25.5M ETB', units: 30, growth: '40%' },
    { year: '2030', revenue: '33.1M ETB', units: 39, growth: '45%' },
  ];

  return (
    <section id='investors' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>Investment Opportunity</h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Revolutionizing a 200M ETB market with patented technology, proven demand, and clear path to profitability.
            Join us in transforming injera production globally.
          </p>
        </div>

        {/* Financial Highlights */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
          {financialHighlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`${item.bgColor} rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300`}
              >
                <div
                  className={`w-12 h-12 ${item.color
                    .replace('text-', 'bg-')
                    .replace('-600', '-600')} rounded-lg flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon className='w-6 h-6 text-white' />
                </div>
                <div className={`text-3xl font-bold ${item.color} mb-2`}>{item.value}</div>
                <div className='font-semibold text-gray-900 mb-1'>{item.metric}</div>
                <div className='text-sm text-gray-600'>{item.description}</div>
              </div>
            );
          })}
        </div>

        {/* Investment Overview */}
        <div className='grid lg:grid-cols-2 gap-12 mb-16'>
          {/* Use of Funds */}
          <div className='bg-white rounded-2xl p-8 shadow-lg'>
            <div className='flex items-center mb-6'>
              <PieChart className='w-8 h-8 text-blue-600 mr-3' />
              <h3 className='text-2xl font-bold text-gray-900'>Use of Funds</h3>
            </div>

            <div className='space-y-4 mb-8'>
              {useOfFunds.map((item, index) => (
                <div key={index} className='flex items-center justify-between'>
                  <div className='flex-1'>
                    <div className='flex justify-between items-center mb-2'>
                      <span className='font-medium text-gray-900'>{item.category}</span>
                      <span className='text-sm font-semibold text-gray-600'>{item.amount}</span>
                    </div>
                    <div className='w-full bg-gray-200 rounded-full h-2'>
                      <div
                        className={`${item.color} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className='ml-4 text-sm font-medium text-gray-500'>{item.percentage}%</span>
                </div>
              ))}
            </div>

            <div className='text-center'>
              <div className='text-3xl font-bold text-blue-600 mb-2'>6.7M ETB</div>
              <div className='text-gray-600'>Total Investment Required</div>
            </div>
          </div>

          {/* Revenue Projections */}
          <div className='bg-white rounded-2xl p-8 shadow-lg'>
            <div className='flex items-center mb-6'>
              <BarChart3 className='w-8 h-8 text-green-600 mr-3' />
              <h3 className='text-2xl font-bold text-gray-900'>Revenue Projections</h3>
            </div>

            <div className='space-y-4'>
              {revenueProjections.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${index === 0 ? 'bg-amber-50 border border-amber-200' : 'bg-gray-50'}`}
                >
                  <div className='flex justify-between items-center'>
                    <div>
                      <div className='font-bold text-lg text-gray-900'>{item.year}</div>
                      <div className='text-sm text-gray-600'>{item.units} units sold</div>
                    </div>
                    <div className='text-right'>
                      <div className='font-bold text-xl text-green-600'>{item.revenue}</div>
                      {item.growth && <div className='text-sm text-green-600 font-medium'>+{item.growth}</div>}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className='mt-6 p-4 bg-green-50 rounded-lg text-center'>
              <div className='text-2xl font-bold text-green-600'>101.8M ETB</div>
              <div className='text-gray-600'>Cumulative Revenue (5 years)</div>
            </div>
          </div>
        </div>

        {/* Milestones & Timeline */}
        <div className='bg-white rounded-2xl p-8 shadow-lg mb-16'>
          <div className='text-center mb-8'>
            <h3 className='text-2xl font-bold text-gray-900 mb-4'>Key Milestones</h3>
            <p className='text-gray-600'>Strategic roadmap to profitability and market leadership</p>
          </div>

          <div className='relative'>
            {/* Timeline line */}
            <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200'></div>

            <div className='space-y-8'>
              {milestones.map((milestone, index) => (
                <div key={index} className='relative flex items-center ml-16'>
                  <div className='absolute -left-[4.5rem] w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg'>
                    <span className='text-white font-bold text-sm'>{milestone.quarter}</span>
                  </div>

                  <div className='bg-gray-50 rounded-xl p-6 flex-1'>
                    <div className='flex justify-between items-start mb-3'>
                      <div>
                        <h4 className='text-lg font-bold text-gray-900'>{milestone.milestone}</h4>
                        <p className='text-amber-600 font-medium'>
                          {milestone.year} {milestone.quarter}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          milestone.status === 'current' ? 'bg-amber-100 text-amber-600' : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {milestone.status === 'current' ? 'In Progress' : 'Planned'}
                      </span>
                    </div>
                    <p className='text-gray-600'>{milestone.target}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Investment Highlights */}
        <div className='grid md:grid-cols-3 gap-8 mb-16'>
          <div className='bg-white rounded-xl p-6 shadow-lg text-center'>
            <Award className='w-12 h-12 text-amber-600 mx-auto mb-4' />
            <h4 className='text-lg font-bold text-gray-900 mb-3'>Patent Protection</h4>
            <p className='text-gray-600 text-sm'>
              Strong IP position with utility model patent and trademark protection
            </p>
          </div>

          <div className='bg-white rounded-xl p-6 shadow-lg text-center'>
            <Users className='w-12 h-12 text-blue-600 mx-auto mb-4' />
            <h4 className='text-lg font-bold text-gray-900 mb-3'>Market Demand</h4>
            <p className='text-gray-600 text-sm'>Validated with 500+ prototype test cycles</p>
          </div>

          <div className='bg-white rounded-xl p-6 shadow-lg text-center'>
            <Globe className='w-12 h-12 text-green-600 mx-auto mb-4' />
            <h4 className='text-lg font-bold text-gray-900 mb-3'>Scalable Model</h4>
            <p className='text-gray-600 text-sm'>Franchise-ready business model with multiple revenue streams</p>
          </div>
        </div>

        {/* Investment Documents & CTA */}
        <div className='bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 lg:p-12 text-white text-center'>
          <h3 className='text-3xl font-bold mb-4'>Ready to Invest in the Future?</h3>
          <p className='text-xl mb-8 opacity-90'>
            Download our comprehensive investor package with detailed financial projections, market analysis, and
            technical specifications.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
            <button className='inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-xl hover:bg-gray-50 transition-colors'>
              <Download className='w-5 h-5 mr-2' />
              Download Investor Pack
            </button>
            <button className='inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-white/20 border-2 border-white rounded-xl hover:bg-white/30 transition-colors'>
              <Calendar className='w-5 h-5 mr-2' />
              Schedule Due Diligence
            </button>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center'>
            <div className='bg-white/10 rounded-lg p-4'>
              <div className='text-2xl font-bold mb-1'>45</div>
              <div className='text-sm opacity-80'>Page Business Plan</div>
            </div>
            <div className='bg-white/10 rounded-lg p-4'>
              <div className='text-2xl font-bold mb-1'>5-Year</div>
              <div className='text-sm opacity-80'>Financial Model</div>
            </div>
            <div className='bg-white/10 rounded-lg p-4'>
              <div className='text-2xl font-bold mb-1'>Market</div>
              <div className='text-sm opacity-80'>Research Report</div>
            </div>
            <div className='bg-white/10 rounded-lg p-4'>
              <div className='text-2xl font-bold mb-1'>Technical</div>
              <div className='text-sm opacity-80'>Specifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investors;
