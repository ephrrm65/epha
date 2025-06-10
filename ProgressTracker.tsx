import React from 'react';
import { TrendingUp, Users, DollarSign, Target, Calendar, Award } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Referral } from '../../types';

export function ProgressTracker() {
  const { user } = useAuth();

  const mockReferrals: Referral[] = [
    {
      id: '1',
      referredUserId: '101',
      referredUserName: 'Alice Johnson',
      investmentAmount: 5000,
      bonusEarned: 2500,
      date: '2024-01-20',
      status: 'confirmed'
    },
    {
      id: '2',
      referredUserId: '102',
      referredUserName: 'Bob Smith',
      investmentAmount: 3000,
      bonusEarned: 1500,
      date: '2024-01-18',
      status: 'confirmed'
    },
    {
      id: '3',
      referredUserId: '103',
      referredUserName: 'Carol Davis',
      investmentAmount: 10000,
      bonusEarned: 5000,
      date: '2024-01-15',
      status: 'pending'
    }
  ];

  const monthlyData = [
    { month: 'Jan', referrals: 3, earnings: 2500 },
    { month: 'Feb', referrals: 5, earnings: 4200 },
    { month: 'Mar', referrals: 7, earnings: 6800 },
    { month: 'Apr', referrals: 4, earnings: 3600 },
    { month: 'May', referrals: 8, earnings: 7500 },
    { month: 'Jun', referrals: 6, earnings: 5400 }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Progress Tracker</h1>
        <p className="text-gray-600 mt-1">Monitor your referral performance and earnings</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Users className="text-blue-600" size={24} />
            </div>
            <span className="text-sm font-medium text-green-600">+12.5%</span>
          </div>
          <h3 className="text-sm font-medium text-gray-500">Total Referrals</h3>
          <p className="text-2xl font-bold text-gray-900">{user?.referredUsers}</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <DollarSign className="text-green-600" size={24} />
            </div>
            <span className="text-sm font-medium text-green-600">+8.2%</span>
          </div>
          <h3 className="text-sm font-medium text-gray-500">Total Earnings</h3>
          <p className="text-2xl font-bold text-gray-900">${user?.totalBonus.toLocaleString()}</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Target className="text-purple-600" size={24} />
            </div>
            <span className="text-sm font-medium text-green-600">+5 this month</span>
          </div>
          <h3 className="text-sm font-medium text-gray-500">This Month</h3>
          <p className="text-2xl font-bold text-gray-900">8</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-100 rounded-lg">
              <TrendingUp className="text-orange-600" size={24} />
            </div>
            <span className="text-sm font-medium text-green-600">+15.7%</span>
          </div>
          <h3 className="text-sm font-medium text-gray-500">Avg. Bonus</h3>
          <p className="text-2xl font-bold text-gray-900">${(user?.totalBonus / Math.max(user?.referredUsers, 1)).toFixed(0)}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Monthly Performance</h3>
          <div className="space-y-4">
            {monthlyData.map((data, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-medium text-blue-600">{data.month}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{data.referrals} Referrals</p>
                    <p className="text-sm text-gray-500">${data.earnings.toLocaleString()} earned</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="w-24 h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-blue-600 rounded-full"
                      style={{ width: `${(data.referrals / 10) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Referrals</h3>
          <div className="space-y-4">
            {mockReferrals.map((referral) => (
              <div key={referral.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-600">
                      {referral.referredUserName.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{referral.referredUserName}</p>
                    <p className="text-sm text-gray-500">
                      Invested ${referral.investmentAmount.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">+${referral.bonusEarned.toLocaleString()}</p>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    referral.status === 'confirmed'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {referral.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Referral Achievements</h2>
            <p className="text-purple-100 mb-4">
              You're doing great! Keep sharing to unlock more rewards.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Award className="text-yellow-300" size={20} />
                <span className="font-medium">Top Referrer Badge</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="text-green-300" size={20} />
                <span className="font-medium">15+ Referrals</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold">{user?.referredUsers}/20</p>
            <p className="text-purple-100">Next milestone</p>
          </div>
        </div>
      </div>
    </div>
  );
}