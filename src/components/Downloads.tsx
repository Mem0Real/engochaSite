import React, { useEffect, useState } from 'react';
import { Download, FileText, BarChart3, Wrench, Award, Lock, Users, Mail } from 'lucide-react';
import PdfViewer from './PdfModal';
import PdfModal from './PdfModal';

const Downloads: React.FC = () => {
  const downloadItems = [
    {
      id: 1,
      title: 'Feasibility Study',
      description: 'Comprehensive market analysis, technical validation, and financial projections',
      fileSize: '8.2 MB',
      pages: '42 pages',
      icon: BarChart3,
      color: 'text-blue-600 bg-blue-100',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      category: 'Business',
      restricted: false,
    },
    {
      id: 2,
      title: 'Technical Datasheet',
      description: 'Detailed specifications, system architecture, and performance metrics',
      fileSize: '2.1 MB',
      pages: '16 pages',
      icon: Wrench,
      color: 'text-green-600 bg-green-100',
      buttonColor: 'bg-green-600 hover:bg-green-700',
      category: 'Technical',
      restricted: false,
    },
    {
      id: 3,
      title: 'Patent Documentation',
      description: 'Official patent filing ET UM1207B1 with technical drawings and claims',
      fileSize: '5.4 MB',
      pages: '24 pages',
      icon: Award,
      color: 'text-purple-600 bg-purple-100',
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
      category: 'Legal',
      restricted: false,
    },
    {
      id: 4,
      title: 'Investor Pack',
      description: 'Complete investment proposal with business plan, financial model, and projections',
      fileSize: '15.7 MB',
      pages: '68 pages',
      icon: FileText,
      color: 'text-amber-600 bg-amber-100',
      buttonColor: 'bg-amber-600 hover:bg-amber-700',
      category: 'Investment',
      restricted: true,
    },
    {
      id: 5,
      title: 'Franchise Guide',
      description: 'Partnership opportunities, investment levels, and support programs',
      fileSize: '4.8 MB',
      pages: '28 pages',
      icon: Users,
      color: 'text-indigo-600 bg-indigo-100',
      buttonColor: 'bg-indigo-600 hover:bg-indigo-700',
      category: 'Partnership',
      restricted: true,
    },
  ];

  const categories = ['All', 'Business', 'Technical', 'Legal', 'Investment', 'Partnership'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [showEmailForm, setShowEmailForm] = React.useState(false);
  const [selectedDownload, setSelectedDownload] = React.useState<any>(null);

  const [openPdf, setOpenPdf] = useState(false);

  const filteredItems =
    selectedCategory === 'All' ? downloadItems : downloadItems.filter((item) => item.category === selectedCategory);

  const handleDownload = (item: any) => {
    if (item.restricted) {
      // setSelectedDownload(item);
      // setShowEmailForm(true);
    } else {
      // Direct download for unrestricted files
      setOpenPdf(true);
      console.log('Downloading:', item.title);
    }
  };

  const EmailCaptureModal = () =>
    showEmailForm && (
      <div className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4'>
        <div className='bg-white rounded-2xl p-8 max-w-md w-full'>
          <div className='text-center mb-6'>
            <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Mail className='w-8 h-8 text-amber-600' />
            </div>
            <h3 className='text-xl font-bold text-gray-900 mb-2'>Download {selectedDownload?.title}</h3>
            <p className='text-gray-600 text-sm'>Please provide your details to access this document</p>
          </div>

          <form className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Full Name</label>
              <input
                type='text'
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
                placeholder='Enter your full name'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Email Address</label>
              <input
                type='email'
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
                placeholder='Enter your email address'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Organization</label>
              <input
                type='text'
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
                placeholder='Company or organization'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Interest</label>
              <select className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500'>
                <option>Investment Opportunity</option>
                <option>Franchise Partnership</option>
                <option>Technical Evaluation</option>
                <option>Media/Research</option>
              </select>
            </div>

            <div className='flex gap-3 pt-4'>
              <button
                type='button'
                onClick={() => setShowEmailForm(false)}
                className='flex-1 py-3 px-4 text-gray-700 bg-gray-100 rounded-lg font-medium hover:bg-gray-200 transition-colors'
              >
                Cancel
              </button>
              <button
                type='submit'
                className='flex-1 py-3 px-4 text-white bg-amber-600 rounded-lg font-medium hover:bg-amber-700 transition-colors'
              >
                Download
              </button>
            </div>
          </form>
        </div>
      </div>
    );

  return (
    <section id='downloads' className='py-20 bg-gray-50'>
      <PdfModal isOpen={openPdf} onClose={() => setOpenPdf(false)} file='/doc.pdf' />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>Downloads & Resources</h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Access comprehensive documentation, technical specifications, and business materials. All resources are
            available for download to help you evaluate our technology.
          </p>
        </div>

        {/* Category Filter */}
        <div className='flex flex-wrap justify-center gap-3 mb-12'>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-600 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Downloads Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {filteredItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden'
              >
                {/* Card Header */}
                <div className='p-6 pb-4'>
                  <div className='flex items-start justify-between mb-4'>
                    <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center`}>
                      <Icon className='w-6 h-6' />
                    </div>
                    {item.restricted && (
                      <div className='flex items-center text-xs text-gray-500'>
                        <Lock className='w-3 h-3 mr-1' />
                        Email Required
                      </div>
                    )}
                  </div>

                  <h3 className='text-xl font-bold text-gray-900 mb-2'>{item.title}</h3>
                  <p className='text-gray-600 text-sm mb-4'>{item.description}</p>

                  <div className='flex items-center gap-4 text-xs text-gray-500 mb-4'>
                    <span className='flex items-center'>
                      <FileText className='w-3 h-3 mr-1' />
                      {item.pages}
                    </span>
                    <span>{item.fileSize}</span>
                    <span className='bg-gray-100 px-2 py-1 rounded'>{item.category}</span>
                  </div>
                </div>

                {/* Card Footer */}
                <div className='px-6 pb-6'>
                  <button
                    onClick={() => handleDownload(item)}
                    className={`w-full inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-white rounded-lg transition-colors ${item.buttonColor}`}
                  >
                    <Download className='w-4 h-4 mr-2' />
                    Download {item.restricted ? '(Email Required)' : 'Free'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Email Capture Modal */}
      <EmailCaptureModal />
    </section>
  );
};

export default Downloads;
