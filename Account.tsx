import React, { useState } from 'react';
import { User, Mail, Calendar, Copy, Shield, Bell, Wallet, Plus, ArrowDownToLine, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { WithdrawalMethod, WithdrawalRequest } from '../../types';

export function Account() {
  const { user } = useAuth();
  const [showWithdrawalModal, setShowWithdrawalModal] = useState(false);
  const [showAddWithdrawalMethod, setShowAddWithdrawalMethod] = useState(false);
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [selectedWithdrawalMethod, setSelectedWithdrawalMethod] = useState('');

  // Mock withdrawal methods
  const [withdrawalMethods] = useState<WithdrawalMethod[]>([
    {
      id: '1',
      type: 'bank',
      name: 'Chase Bank',
      details: 'Account ending in 5678',
      accountNumber: '****5678',
      isDefault: true
    },
    {
      id: '2',
      type: 'crypto',
      name: 'Bitcoin Wallet',
      details: 'BTC Address',
      walletAddress: '1A1z...P2SH',
      isDefault: false
    }
  ]);

  // Mock withdrawal history
  const [withdrawalHistory] = useState<WithdrawalRequest[]>([
    {
      id: '1',
      amount: 1500,
      withdrawalMethodId: '1',
      status: 'completed',
      requestDate: '2024-01-10',
      processedDate: '2024-01-12',
      transactionId: 'TXN123456'
    },
    {
      id: '2',
      amount: 800,
      withdrawalMethodId: '2',
      status: 'processing',
      requestDate: '2024-01-20'
    }
  ]);

  const canWithdraw = (user?.referredUsers || 0) >= 4;
  const availableBalance = (user?.totalBonus || 0) - (user?.withdrawnAmount || 0);

  const copyReferralCode = () => {
    if (user?.referralCode) {
      navigator.clipboard.writeText(user.referralCode);
      alert('Referral code copied to clipboard!');
    }
  };

  const handleWithdrawal = () => {
    if (!withdrawalAmount || !selectedWithdrawalMethod) {
      alert('Please fill in all fields');
      return;
    }

    const amount = parseFloat(withdrawalAmount);
    if (amount > availableBalance) {
      alert('Insufficient balance');
      return;
    }

    if (amount < 50) {
      alert('Minimum withdrawal amount is $50');
      return;
    }

    // Process withdrawal (in real app, this would call an API)
    alert(`Withdrawal request of $${amount} has been submitted and is being processed.`);
    setShowWithdrawalModal(false);
    setWithdrawalAmount('');
    setSelectedWithdrawalMethod('');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'processing': return 'text-yellow-600 bg-yellow-100';
      case 'pending': return 'text-blue-600 bg-blue-100';
      case 'failed': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'processing': return Clock;
      case 'pending': return Clock;
      case 'failed': return AlertCircle;
      default: return Clock;
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

          {/* Withdrawal Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Withdrawal Center</h2>
              <div className="flex items-center space-x-2">
                <Wallet className="text-green-500" size={20} />
                <span className="text-lg font-semibold text-green-600">
                  ${availableBalance.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Available for Withdrawal</h3>
                  <p className="text-3xl font-bold text-green-600">${availableBalance.toLocaleString()}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Referrals: {user?.referredUsers || 0}/4 required
                  </p>
                </div>
                <div className="text-right">
                  {canWithdraw ? (
                    <button
                      onClick={() => setShowWithdrawalModal(true)}
                      className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center space-x-2"
                    >
                      <ArrowDownToLine size={18} />
                      <span>Withdraw</span>
                    </button>
                  ) : (
                    <div className="text-center">
                      <div className="bg-gray-100 text-gray-500 px-6 py-3 rounded-lg font-medium">
                        Withdrawal Locked
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Invite {4 - (user?.referredUsers || 0)} more users
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Withdrawal Progress */}
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Referral Progress</span>
                <span className="font-medium">{user?.referredUsers || 0}/4 users</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all"
                  style={{ width: `${Math.min(((user?.referredUsers || 0) / 4) * 100, 100)}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {canWithdraw ? 'Withdrawal unlocked!' : `${4 - (user?.referredUsers || 0)} more referrals needed`}
              </p>
            </div>

            {/* Withdrawal History */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Withdrawals</h3>
              <div className="space-y-3">
                {withdrawalHistory.length > 0 ? (
                  withdrawalHistory.map((withdrawal) => {
                    const StatusIcon = getStatusIcon(withdrawal.status);
                    return (
                      <div key={withdrawal.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <StatusIcon className="text-gray-400" size={20} />
                          <div>
                            <p className="font-medium text-gray-900">${withdrawal.amount.toLocaleString()}</p>
                            <p className="text-sm text-gray-500">
                              {new Date(withdrawal.requestDate).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(withdrawal.status)}`}>
                          {withdrawal.status.charAt(0).toUpperCase() + withdrawal.status.slice(1)}
                        </span>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <ArrowDownToLine className="mx-auto mb-2" size={48} />
                    <p>No withdrawals yet</p>
                  </div>
                )}
              </div>
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
                <span className="text-gray-600">Total Withdrawn</span>
                <span className="font-semibold text-blue-600">${(user?.withdrawnAmount || 0).toLocaleString()}</span>
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

      {/* Withdrawal Modal */}
      {showWithdrawalModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Withdraw Funds</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Withdrawal Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">$</span>
                  <input
                    type="number"
                    value={withdrawalAmount}
                    onChange={(e) => setWithdrawalAmount(e.target.value)}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0.00"
                    min="50"
                    max={availableBalance}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Available: ${availableBalance.toLocaleString()} • Minimum: $50
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Withdrawal Method
                </label>
                <select
                  value={selectedWithdrawalMethod}
                  onChange={(e) => setSelectedWithdrawalMethod(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select withdrawal method</option>
                  {withdrawalMethods.map((method) => (
                    <option key={method.id} value={method.id}>
                      {method.name} - {method.details}
                    </option>
                  ))}
                </select>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Processing Time</h4>
                <p className="text-sm text-blue-700">
                  Bank transfers: 1-3 business days<br />
                  Crypto withdrawals: 10-30 minutes
                </p>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              <button
                onClick={() => setShowWithdrawalModal(false)}
                className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleWithdrawal}
                className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Withdraw
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}