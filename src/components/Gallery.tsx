import React, { useState } from 'react';
import { Play, ZoomIn, Image, Video, FileText } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      category: 'prototype',
      title: 'Latest Prototype - Front View',
      description: 'Production-ready Engocha with ESP32 control system',
      thumbnail: 'prototype-front',
      fullSize: 'prototype-front-full',
    },
    {
      id: 2,
      type: 'video',
      category: 'demo',
      title: 'Automated Production Demo',
      description: 'Watch the complete injera-making process',
      thumbnail: 'demo-video',
      duration: '2:45',
    },
    {
      id: 3,
      type: 'image',
      category: 'injera',
      title: 'Perfect Injera Quality',
      description: 'Consistent thickness and texture achieved',
      thumbnail: 'injera-quality',
      fullSize: 'injera-quality-full',
    },
    {
      id: 4,
      type: 'image',
      category: 'prototype',
      title: 'Control Panel Interface',
      description: '7-inch touchscreen with intuitive controls',
      thumbnail: 'control-panel',
      fullSize: 'control-panel-full',
    },
    {
      id: 5,
      type: 'video',
      category: 'demo',
      title: 'Batter Dispensing System',
      description: 'Precision spiral pattern dispensing',
      thumbnail: 'batter-demo',
      duration: '1:30',
    },
    {
      id: 6,
      type: 'image',
      category: 'injera',
      title: 'Before & After Comparison',
      description: 'Manual vs automated production results',
      thumbnail: 'comparison',
      fullSize: 'comparison-full',
    },
    {
      id: 7,
      type: 'image',
      category: 'prototype',
      title: 'Griddle Surface Detail',
      description: 'Ceramic-coated traditional clay composite',
      thumbnail: 'griddle-detail',
      fullSize: 'griddle-detail-full',
    },
    {
      id: 8,
      type: 'document',
      category: 'technical',
      title: 'Patent Documentation',
      description: 'ET UM1207B1 - Utility Model Patent',
      thumbnail: 'patent-doc',
      fileType: 'PDF',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Media', icon: Image },
    { id: 'prototype', label: 'Prototype', icon: Image },
    { id: 'demo', label: 'Demos', icon: Video },
    { id: 'injera', label: 'Results', icon: Image },
    { id: 'technical', label: 'Technical', icon: FileText },
  ];

  const filteredItems =
    selectedCategory === 'all' ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory);

  const MediaCard: React.FC<{ item: any }> = ({ item }) => {
    const getTypeIcon = () => {
      switch (item.type) {
        case 'video':
          return Play;
        case 'document':
          return FileText;
        default:
          return ZoomIn;
      }
    };

    const TypeIcon = getTypeIcon();

    return (
      <div className='group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer'>
        {/* Thumbnail */}
        <div className='aspect-video bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center relative overflow-hidden'>
          {item.type === 'video' && (
            <div className='absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20'></div>
          )}

          <div className='text-center z-10'>
            <TypeIcon
              className={`w-16 h-16 mx-auto mb-4 ${
                item.type === 'video' ? 'text-white' : item.type === 'document' ? 'text-amber-600' : 'text-gray-600'
              }`}
            />

            {item.type === 'video' && (
              <div className='bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium'>{item.duration}</div>
            )}

            {item.type === 'document' && (
              <div className='bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium'>{item.fileType}</div>
            )}
          </div>

          {/* Hover Overlay */}
          <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
            <div className='text-white text-center'>
              <TypeIcon className='w-12 h-12 mx-auto mb-2' />
              <p className='font-medium'>
                {item.type === 'video' ? 'Play Video' : item.type === 'document' ? 'View Document' : 'View Full Size'}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className='p-6'>
          <h3 className='font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors'>{item.title}</h3>
          <p className='text-gray-600 text-sm'>{item.description}</p>
        </div>
      </div>
    );
  };

  return (
    <section id='gallery' className='py-20 bg-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>Gallery & Media</h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Explore our prototype development journey, see the machine in action, and view the exceptional injera
            quality our technology produces.
          </p>
        </div>

        {/* Category Filter */}
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-amber-50 hover:text-amber-600'
                }`}
              >
                <Icon className='w-5 h-5 mr-2' />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {filteredItems.map((item) => (
            <MediaCard key={item.id} item={item} />
          ))}
        </div>

        {/* Call to Action */}
        <div className='text-center mt-12'>
          <h3 className='text-2xl font-bold text-gray-900 mb-4'>Want to See More?</h3>
          <p className='text-gray-600 mb-8 max-w-2xl mx-auto'>
            Schedule a live demonstration to experience Engocha in person and see firsthand how it can transform your
            injera production.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-amber-600 rounded-xl hover:bg-amber-700 transition-colors'>
              <Play className='w-5 h-5 mr-2' />
              Watch Full Demo
            </button>
            <button className='inline-flex items-center px-8 py-4 text-lg font-semibold text-amber-600 bg-white border-2 border-amber-600 rounded-xl hover:bg-amber-50 transition-colors'>
              <ZoomIn className='w-5 h-5 mr-2' />
              View All Images
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
