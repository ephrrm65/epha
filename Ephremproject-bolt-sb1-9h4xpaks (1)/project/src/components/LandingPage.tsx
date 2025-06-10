import React from 'react';
import { TrendingUp, Users, Shield, Award, ArrowRight, CheckCircle } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  const features = [
    {
      icon: TrendingUp,
      title: 'High Returns',
      description: 'Access premium investment opportunities with returns up to 50% annually'
    },
    {
      icon: Shield,
      title: 'Secure Platform',
      description: 'Bank-grade security with encrypted transactions and data protection'
    },
    {
      icon: Users,
      title: 'Referral Rewards',
      description: 'Earn substantial bonuses by referring friends and family to our platform'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Over $100M invested by thousands of satisfied investors worldwide'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Real Estate Investor',
      content: 'ATRAFI has transformed my investment portfolio. The returns are incredible and the referral system is a game-changer.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    },
    {
      name: 'Michael Chen',
      role: 'Crypto Enthusiast',
      content: 'The cryptocurrency opportunities here are unmatched. I\'ve earned more in referrals than my day job!',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Startup Investor',
      content: 'Being part of ATRAFI feels like having access to exclusive deals. The platform is professional and trustworthy.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              ATRAFI
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              The Future of Premium Investment Opportunities
            </p>
            <p className="text-lg mb-12 text-blue-200 max-w-2xl mx-auto">
              Join thousands of investors accessing exclusive real estate, cryptocurrency, and startup investments with guaranteed returns and revolutionary referral rewards.
            </p>
            <button
              onClick={onGetStarted}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center space-x-2"
            >
              <span>Start Investing Today</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose ATRAFI?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide unparalleled access to premium investment opportunities with industry-leading returns and rewards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="bg-blue-100 p-4 rounded-lg inline-block mb-6">
                    <Icon className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">$100M+</div>
              <div className="text-blue-200">Total Invested</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15,000+</div>
              <div className="text-blue-200">Active Investors</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">35%</div>
              <div className="text-blue-200">Average Returns</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50%</div>
              <div className="text-blue-200">Referral Bonus</div>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Categories */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Premium Investment Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Diversify your portfolio with our carefully curated investment opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg"
                alt="Real Estate"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Real Estate</h3>
                <p className="text-gray-600 mb-4">
                  Premium commercial and residential properties in prime locations with guaranteed rental income.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Prime locations</li>
                  <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Guaranteed income</li>
                  <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Professional management</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg"
                alt="Cryptocurrency"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cryptocurrency</h3>
                <p className="text-gray-600 mb-4">
                  Next-generation blockchain projects and mining operations with industry-leading returns.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Cutting-edge technology</li>
                  <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />High growth potential</li>
                  <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Expert management</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://images.pexels.com/photos/3825454/pexels-photo-3825454.jpeg"
                alt="Startups"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Startups</h3>
                <p className="text-gray-600 mb-4">
                  Revolutionary companies in AI, healthcare, and green technology with massive growth potential.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Innovative solutions</li>
                  <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Explosive growth</li>
                  <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Early access</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Investors Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied investors who have transformed their financial future with ATRAFI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Investment Journey?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join ATRAFI today and gain access to exclusive investment opportunities with guaranteed returns and incredible referral rewards.
          </p>
          <button
            onClick={onGetStarted}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center space-x-2"
          >
            <span>Get Started Now</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}