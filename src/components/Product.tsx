import React from 'react';
import { machineModels } from '../data/machineModels';
import { Download, Zap, Users, Factory, Building } from 'lucide-react';

const Product: React.FC = () => {
  const getIcon = (targetMarket: string) => {
    switch (targetMarket) {
      case 'Small Business': return Users;
      case 'Commercial': return Building;
      case 'Industrial': return Factory;
      case 'Enterprise': return Factory;
      default: return Users;
    }
  };

  const getIconColor = (targetMarket: string) => {
    switch (targetMarket) {
      case 'Small Business': return 'text-green-600 bg-green-100';
      case 'Commercial': return 'text-blue-600 bg-blue-100';
      case 'Industrial': return 'text-purple-600 bg-purple-100';
      case 'Enterprise': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section id="product" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Product Models
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scalable solutions for every business size — from small cafes to large industrial facilities. 
            Each model features our patented automatic injera production technology.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {machineModels.map((model) => {
            const Icon = getIcon(model.targetMarket);
            const iconColorClass = getIconColor(model.targetMarket);
            
            return (
              <div key={model.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                {/* Card Header */}
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${iconColorClass.replace('text-', 'text-white bg-').replace('bg-', 'bg-white/20')}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                      {model.targetMarket}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{model.name}</h3>
                  <p className="text-amber-100">{model.useCase}</p>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Key Specs Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-amber-600">{model.griddleCount}</div>
                      <div className="text-sm text-gray-600">Griddles</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-amber-600">{model.throughputPieces}</div>
                      <div className="text-sm text-gray-600">Pieces/Hour</div>
                    </div>
                  </div>

                  {/* Specifications */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Daily Output</span>
                      <span className="font-semibold text-gray-900">{model.throughputKg} pieces/day</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Dimensions</span>
                      <span className="font-semibold text-gray-900">{model.dimensions}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Power</span>
                      <span className="font-semibold text-gray-900">{model.power}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600">Price Range</span>
                      <span className="font-bold text-amber-600">{model.priceRange}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button className="flex-1 inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-amber-600 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      Spec Sheet
                    </button>
                    <button className="flex-1 inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white bg-amber-600 rounded-lg hover:bg-amber-700 transition-colors">
                      Request Quote
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b">
            <h3 className="text-xl font-bold text-gray-900">Model Comparison</h3>
            <p className="text-gray-600">Quick overview of all models and their specifications</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Model</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Griddles</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Output/Hour</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Daily Capacity</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Power</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Price Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {machineModels.map((model, index) => (
                  <tr key={model.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-900">{model.name}</div>
                      <div className="text-sm text-gray-500">{model.useCase}</div>
                    </td>
                    <td className="px-6 py-4 text-center font-medium">{model.griddleCount}</td>
                    <td className="px-6 py-4 text-center">{model.throughputPieces} pcs</td>
                    <td className="px-6 py-4 text-center">{model.throughputKg} kg</td>
                    <td className="px-6 py-4 text-center text-sm">{model.power}</td>
                    <td className="px-6 py-4 text-center font-semibold text-amber-600">{model.priceRange}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Need help choosing the right model for your business?
          </p>
          <button className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-amber-600 rounded-xl hover:bg-amber-700 transition-colors">
            <Zap className="w-5 h-5 mr-2" />
            Get Personalized Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;