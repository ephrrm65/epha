import React from 'react';
import { TrendingUp, Users, DollarSign, Award } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export function Home() {
  const { user } = useAuth();

  const stats = [
    {
      title: 'Total Investment',
      value: `$${user?.totalInvestment.toLocaleString()}`,
      icon: DollarSign,
      color: 'bg-blue-500',
      change: '+12.5%'
    },
    {
      title: 'Referral Bonus',
      value: `$${user?.totalBonus.toLocaleString()}`,
      icon: Award,
      color: 'bg-green-500',
      change: '+8.2%'
    },
    {
      title: 'Referred Users',
      value: user?.referredUsers.toString() || '0',
      icon: Users,
      color: 'bg-purple-500',
      change: '+3 this month'
    },
    {
      title: 'Portfolio Growth',
      value: '18.7%',
      icon: TrendingUp,
      color: 'bg-orange-500',
      change: '+2.1%'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.firstName}!
          </h1>
          <p className="text-gray-600 mt-1">
            Here's your investment overview for today
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Member since</p>
          <p className="text-lg font-semibold text-gray-900">
            {new Date(user?.joinDate || '').toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <Icon className="text-white" size={24} />
                </div>
                <span className="text-sm font-medium text-green-600">
                  {stat.change}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Your Referral Code</h2>
            <p className="text-blue-100 mb-4">
              Share this code and earn 50% of every investment made by your referrals
            </p>
            <div className="bg-white bg-opacity-20 rounded-lg p-4 inline-block">
              <code className="text-xl font-mono font-bold">{user?.referralCode}</code>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold">${user?.totalBonus.toLocaleString()}</p>
            <p className="text-blue-100">Total Earned</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: 'Investment in Bitcoin Mining Facility', amount: '$5,000', date: '2 days ago' },
              { action: 'Referral bonus earned from John S.', amount: '+$750', date: '5 days ago' },
              { action: 'Investment in Downtown Office Complex', amount: '$10,000', date: '1 week ago' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b last:border-b-0">
                <div>
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.date}</p>
                </div>
                <span className={`font-semibold ${
                  activity.amount.startsWith('+') ? 'text-green-600' : 'text-blue-600'
                }`}>
                  {activity.amount}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Explore New Investments
            </button>
            <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium">
              Add Payment Method
            </button>
            <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              View Referral Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}