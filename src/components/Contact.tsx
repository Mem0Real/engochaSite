import React, { useState } from 'react';
import { Mail, Phone, MapPin, Building, User, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    role: '',
    inquiryType: 'demo',
    investmentRange: '',
    message: '',
    preferredMeeting: '',
    email: '',
    phone: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const inquiryTypes = [
    { value: 'demo', label: 'Product Demo' },
    { value: 'investor', label: 'Investment Opportunity' },
    { value: 'franchise', label: 'Franchise Partnership' },
    { value: 'technical', label: 'Technical Evaluation' },
    { value: 'media', label: 'Media Inquiry' },
    { value: 'other', label: 'Other' },
  ];

  const investmentRanges = [
    { value: '', label: 'Select range...' },
    { value: 'under-50k', label: 'Under $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-500k', label: '$100,000 - $500,000' },
    { value: '500k-1m', label: '$500,000 - $1,000,000' },
    { value: 'over-1m', label: 'Over $1,000,000' },
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      details: 'engocha@gmail.com',
      description: 'Send us an email anytime',
      color: 'text-blue-600 bg-blue-100',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+251 913 085 993',
      description: 'Call us during business hours',
      color: 'text-green-600 bg-green-100',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Addis Ababa, Ethiopia',
      description: 'Visit our development facility',
      color: 'text-purple-600 bg-purple-100',
    },
  ];

  if (isSubmitted) {
    return (
      <section id='contact' className='py-20 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-2xl mx-auto text-center'>
            <div className='w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6'>
              <CheckCircle className='w-10 h-10 text-green-600' />
            </div>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Thank You!</h2>
            <p className='text-lg text-gray-600 mb-8'>
              Your message has been received. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className='inline-flex items-center px-6 py-3 text-lg font-semibold text-amber-600 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors'
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id='contact' className='py-20 bg-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>Get in Touch</h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Ready to revolutionize your injera production? Contact us to schedule a demo, discuss investment
            opportunities, or explore partnership possibilities.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <div className='bg-gray-50 rounded-2xl p-8'>
            <div className='mb-8'>
              <h3 className='text-2xl font-bold text-gray-900 mb-2'>Send us a Message</h3>
              <p className='text-gray-600'>Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>

            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Name & Organization */}
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2'>
                    Full Name *
                  </label>
                  <div className='relative'>
                    <User className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400' />
                    <input
                      type='text'
                      id='name'
                      name='name'
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
                      placeholder='Your full name'
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor='organization' className='block text-sm font-medium text-gray-700 mb-2'>
                    Organization
                  </label>
                  <div className='relative'>
                    <Building className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400' />
                    <input
                      type='text'
                      id='organization'
                      name='organization'
                      value={formData.organization}
                      onChange={handleInputChange}
                      className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
                      placeholder='Company or organization'
                    />
                  </div>
                </div>
              </div>

              {/* Email & Phone */}
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                    Email Address *
                  </label>
                  <div className='relative'>
                    <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400' />
                    <input
                      type='email'
                      id='email'
                      name='email'
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
                      placeholder='your.email@domain.com'
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor='phone' className='block text-sm font-medium text-gray-700 mb-2'>
                    Phone Number
                  </label>
                  <div className='relative'>
                    <Phone className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400' />
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleInputChange}
                      className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
                      placeholder='+251 123 456 789'
                    />
                  </div>
                </div>
              </div>

              {/* Role & Inquiry Type */}
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <label htmlFor='role' className='block text-sm font-medium text-gray-700 mb-2'>
                    Your Role
                  </label>
                  <input
                    type='text'
                    id='role'
                    name='role'
                    value={formData.role}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
                    placeholder='e.g., CEO, Investor, Restaurant Owner'
                  />
                </div>
                <div>
                  <label htmlFor='inquiryType' className='block text-sm font-medium text-gray-700 mb-2'>
                    Inquiry Type *
                  </label>
                  <select
                    id='inquiryType'
                    name='inquiryType'
                    required
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Investment Range (conditional) */}
              {formData.inquiryType === 'investor' && (
                <div>
                  <label htmlFor='investmentRange' className='block text-sm font-medium text-gray-700 mb-2'>
                    Investment Interest Range
                  </label>
                  <select
                    id='investmentRange'
                    name='investmentRange'
                    value={formData.investmentRange}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
                  >
                    {investmentRanges.map((range) => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Preferred Meeting Time */}
              <div>
                <label htmlFor='preferredMeeting' className='block text-sm font-medium text-gray-700 mb-2'>
                  Preferred Meeting Time
                </label>
                <input
                  type='text'
                  id='preferredMeeting'
                  name='preferredMeeting'
                  value={formData.preferredMeeting}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
                  placeholder='e.g., Weekday mornings, EST timezone'
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>
                  Message *
                </label>
                <textarea
                  id='message'
                  name='message'
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
                  placeholder='Tell us more about your interest in Engocha...'
                />
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                className='w-full inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-amber-600 rounded-xl hover:bg-amber-700 transition-colors'
              >
                <Send className='w-5 h-5 mr-2' />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className='space-y-8'>
            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>Contact Information</h3>
              <div className='grid gap-6'>
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <div
                      key={index}
                      className='flex items-start p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300'
                    >
                      <div className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center mr-4`}>
                        <Icon className='w-6 h-6' />
                      </div>
                      <div>
                        <h4 className='font-semibold text-gray-900 mb-1'>{method.title}</h4>
                        <p className='font-medium text-amber-600 mb-1'>{method.details}</p>
                        <p className='text-sm text-gray-600'>{method.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
