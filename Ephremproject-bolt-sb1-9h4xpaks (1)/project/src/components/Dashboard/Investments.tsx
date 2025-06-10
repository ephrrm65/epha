import React, { useState } from 'react';
import { investments } from '../../data/investments';
import { Investment } from '../../types';
import { TrendingUp, Building, Cpu, Rocket, Users, Target } from 'lucide-react';

export function Investments() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedInvestment, setSelectedInvestment] = useState<Investment | null>(null);

  const categories = [
    { id: 'all', label: 'All Investments' },
    { id: 'real-estate', label: 'Real Estate' },
    { id: 'cryptocurrency', label: 'Cryptocurrency' },
    { id: 'startup', label: 'Startups' }
  ];

  const filteredInvestments = selectedCategory === 'all' 
    ? investments 
    : investments.filter(inv => inv.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'real-estate': return Building;
      case 'cryptocurrency': return Cpu;
      case 'startup': return Rocket;
      default: return TrendingUp;
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'high': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const handleInvest = (investment: Investment) => {
    // This would normally open a payment modal
    alert(`Investment in "${investment.title}" initiated. Payment gateway would open here.`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Investment Opportunities</h1>
          <p className="text-gray-600 mt-1">Discover and invest in premium opportunities</p>
        </div>
      </div>

      <div className="flex space-x-4 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors ${
              selectedCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInvestments.map((investment) => {
          const Icon = getCategoryIcon(investment.category);
          const progress = (investment.totalRaised / investment.targetAmount) * 100;
          
          return (
            <div
              key={investment.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={investment.image}
                  alt={investment.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white bg-opacity-90 p-2 rounded-lg">
                    <Icon size={20} className="text-blue-600" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getRiskColor(investment.riskLevel)}`}>
                    {investment.riskLevel.toUpperCase()} RISK
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{investment.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{investment.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Expected Return</span>
                    <span className="font-semibold text-green-600">{investment.expectedReturn}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Duration</span>
                    <span className="font-medium">{investment.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Min. Investment</span>
                    <span className="font-medium">${investment.minInvestment.toLocaleString()}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500">Progress</span>
                    <span className="font-medium">{progress.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${Math.min(progress, 100)}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>${investment.totalRaised.toLocaleString()} raised</span>
                    <span>{investment.investorsCount} investors</span>
                  </div>
                </div>

                <button
                  onClick={() => handleInvest(investment)}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Invest Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}