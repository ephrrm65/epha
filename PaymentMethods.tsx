import React, { useState } from 'react';
import { CreditCard, Plus, Trash2, Check, Building, Bitcoin, Wallet, Globe } from 'lucide-react';
import { PaymentMethod } from '../../types';

export function PaymentMethods() {
  const [paymentMethods] = useState<PaymentMethod[]>([
    {
      id: '1',
      type: 'card',
      name: 'Visa ****1234',
      details: 'Expires 12/26',
      isDefault: true
    },
    {
      id: '2',
      type: 'bank',
      name: 'Chase Bank',
      details: 'Account ending in 5678',
      isDefault: false
    },
    {
      id: '3',
      type: 'binance',
      name: 'Binance',
      details: 'Connected wallet',
      isDefault: false
    },
    {
      id: '4',
      type: 'bybit',
      name: 'Bybit',
      details: 'Trading account linked',
      isDefault: false
    },
    {
      id: '5',
      type: 'okx',
      name: 'OKX',
      details: 'Exchange wallet',
      isDefault: false
    },
    {
      id: '6',
      type: 'bitget',
      name: 'Bitget',
      details: 'Spot trading account',
      isDefault: false
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);

  const getPaymentIcon = (type: string) => {
    switch (type) {
      case 'card': return CreditCard;
      case 'bank': return Building;
      case 'binance':
      case 'bybit':
      case 'okx':
      case 'bitget':
      case 'cbe':
      case 'teller': return Bitcoin;
      default: return Wallet;
    }
  };

  const getPaymentColor = (type: string) => {
    switch (type) {
      case 'card': return 'bg-blue-500';
      case 'bank': return 'bg-green-500';
      case 'binance': return 'bg-yellow-500';
      case 'bybit': return 'bg-orange-500';
      case 'okx': return 'bg-black';
      case 'bitget': return 'bg-blue-600';
      case 'cbe': return 'bg-purple-500';
      case 'teller': return 'bg-indigo-500';
      default: return 'bg-gray-500';
    }
  };

  const paymentOptions = [
    { type: 'card', name: 'Credit/Debit Card', icon: CreditCard, color: 'bg-blue-500' },
    { type: 'bank', name: 'Bank Account', icon: Building, color: 'bg-green-500' },
    { type: 'binance', name: 'Binance', icon: Bitcoin, color: 'bg-yellow-500' },
    { type: 'bybit', name: 'Bybit', icon: Bitcoin, color: 'bg-orange-500' },
    { type: 'okx', name: 'OKX', icon: Bitcoin, color: 'bg-black' },
    { type: 'bitget', name: 'Bitget', icon: Bitcoin, color: 'bg-blue-600' },
    { type: 'cbe', name: 'CBE', icon: Bitcoin, color: 'bg-purple-500' },
    { type: 'teller', name: 'Teller', icon: Bitcoin, color: 'bg-indigo-500' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Payment Methods</h1>
          <p className="text-gray-600 mt-1">Manage your payment options for investments</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus size={20} />
          <span>Add Payment Method</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paymentMethods.map((method) => {
          const Icon = getPaymentIcon(method.type);
          return (
            <div
              key={method.id}
              className="bg-white rounded-xl shadow-lg p-6 relative hover:shadow-xl transition-shadow"
            >
              {method.isDefault && (
                <div className="absolute top-4 right-4">
                  <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                    <Check size={12} />
                    <span>Default</span>
                  </div>
                </div>
              )}
              
              <div className="flex items-center space-x-4 mb-4">
                <div className={`p-3 rounded-lg ${getPaymentColor(method.type)}`}>
                  <Icon className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{method.name}</h3>
                  <p className="text-sm text-gray-500">{method.details}</p>
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                  Edit
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          );
        })}

        <div
          onClick={() => setShowAddForm(true)}
          className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <Plus className="text-gray-400 mb-4" size={48} />
          <h3 className="text-lg font-medium text-gray-500 mb-2">Add New Payment Method</h3>
          <p className="text-sm text-gray-400">Connect your exchange or payment method</p>
        </div>
      </div>

      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Add Payment Method</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {paymentOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <button
                      key={option.type}
                      className="p-4 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors flex flex-col items-center space-y-2"
                    >
                      <div className={`p-2 rounded-lg ${option.color}`}>
                        <Icon className="text-white" size={20} />
                      </div>
                      <span className="text-sm font-medium text-center">{option.name}</span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Supported Exchanges & Methods</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-blue-700">
                  <div>• Credit/Debit Cards</div>
                  <div>• Bank Transfers</div>
                  <div>• Binance Exchange</div>
                  <div>• Bybit Exchange</div>
                  <div>• OKX Exchange</div>
                  <div>• Bitget Exchange</div>
                  <div>• CBE Platform</div>
                  <div>• Teller Network</div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              <button
                onClick={() => setShowAddForm(false)}
                className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}