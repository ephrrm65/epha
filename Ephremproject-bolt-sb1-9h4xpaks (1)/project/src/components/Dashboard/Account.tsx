import React from 'react';
import { User, Mail, Calendar, Copy, Shield, Bell } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export function Account() {
  const { user } = useAuth();

  const copyReferralCode = () => {
    if (user?.referralCode) {
      navigator.clipboard.writeText(user.referralCode);
      alert('Referral code copied to clipboard!');
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">My Account</h1>
        <p className="text-gray-600 mt-1">Manage your profile and account settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-6">
                <img
                  src={user?.avatar || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'}
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Change Photo
                  </button>
                  <p className="text-sm text-gray-500 mt-1">JPG, PNG or GIF. Max size 2MB</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400" size={18} />
                    <input
                      type="text"
                      value={user?.firstName || ''}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      readOnly
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400" size={18} />
                    <input
                      type="text"
                      value={user?.lastName || ''}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input
                    type="email"
                    value={user?.email || ''}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    readOnly
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Member Since</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input
                    type="text"
                    value={new Date(user?.joinDate || '').toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                    readOnly
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Update Profile
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Security Settings</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Shield className="text-green-500" size={20} />
                  <div>
                    <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                    <p className="text-sm text-gray-500">Extra security for your account</p>
                  </div>
                </div>
                <button className="bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm font-medium">
                  Enabled
                </button>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Bell className="text-blue-500" size={20} />
                  <div>
                    <p className="font-medium text-gray-900">Email Notifications</p>
                    <p className="text-sm text-gray-500">Receive updates about investments</p>
                  </div>
                </div>
                <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium">
                  Enabled
                </button>
              </div>
            </div>

            <div className="mt-6">
              <button className="text-red-600 hover:text-red-700 font-medium">
                Change Password
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white">
            <h3 className="text-lg font-semibold mb-4">Your Referral Code</h3>
            <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
              <code className="text-lg font-mono">{user?.referralCode}</code>
            </div>
            <button
              onClick={copyReferralCode}
              className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <Copy size={16} />
              <span>Copy Code</span>
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Statistics</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Investments</span>
                <span className="font-semibold">${user?.totalInvestment.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Referral Earnings</span>
                <span className="font-semibold text-green-600">${user?.totalBonus.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Referred Users</span>
                <span className="font-semibold">{user?.referredUsers}</span>
              </div>
              <div className="flex justify-between border-t pt-4">
                <span className="text-gray-600">Account Level</span>
                <span className="font-semibold text-blue-600">Premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}