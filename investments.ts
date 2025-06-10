import { Investment } from '../types';

export const investments: Investment[] = [
  {
    id: '1',
    title: 'Downtown Manhattan Office Complex',
    description: 'Prime commercial real estate in the heart of Manhattan. Fully leased with AAA-rated tenants.',
    category: 'real-estate',
    minInvestment: 10000,
    expectedReturn: '12-15%',
    duration: '5 years',
    riskLevel: 'low',
    image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg',
    totalRaised: 2800000,
    targetAmount: 5000000,
    investorsCount: 142
  },
  {
    id: '2',
    title: 'Bitcoin Mining Facility',
    description: 'State-of-the-art mining facility with renewable energy sources and latest ASIC hardware.',
    category: 'cryptocurrency',
    minInvestment: 5000,
    expectedReturn: '18-25%',
    duration: '3 years',
    riskLevel: 'high',
    image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg',
    totalRaised: 1200000,
    targetAmount: 2000000,
    investorsCount: 89
  },
  {
    id: '3',
    title: 'GreenTech Startup - Solar Innovation',
    description: 'Revolutionary solar panel technology with 40% higher efficiency than traditional panels.',
    category: 'startup',
    minInvestment: 2500,
    expectedReturn: '25-40%',
    duration: '4 years',
    riskLevel: 'high',
    image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg',
    totalRaised: 800000,
    targetAmount: 1500000,
    investorsCount: 156
  },
  {
    id: '4',
    title: 'Luxury Resort Development',
    description: 'Exclusive beachfront resort development in Costa Rica with guaranteed rental income.',
    category: 'real-estate',
    minInvestment: 15000,
    expectedReturn: '14-18%',
    duration: '6 years',
    riskLevel: 'medium',
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
    totalRaised: 3500000,
    targetAmount: 8000000,
    investorsCount: 78
  },
  {
    id: '5',
    title: 'DeFi Protocol Investment',
    description: 'Next-generation decentralized finance protocol with innovative yield farming strategies.',
    category: 'cryptocurrency',
    minInvestment: 1000,
    expectedReturn: '20-35%',
    duration: '2 years',
    riskLevel: 'high',
    image: 'https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg',
    totalRaised: 950000,
    targetAmount: 1200000,
    investorsCount: 234
  },
  {
    id: '6',
    title: 'AI Healthcare Platform',
    description: 'Revolutionary AI-powered diagnostic platform partnered with major hospitals.',
    category: 'startup',
    minInvestment: 7500,
    expectedReturn: '30-50%',
    duration: '5 years',
    riskLevel: 'medium',
    image: 'https://images.pexels.com/photos/3825454/pexels-photo-3825454.jpeg',
    totalRaised: 2100000,
    targetAmount: 3000000,
    investorsCount: 67
  }
];