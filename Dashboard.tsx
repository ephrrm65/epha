import React, { useState } from 'react';
import { Sidebar } from '../Layout/Sidebar';
import { Home } from './Home';
import { Investments } from './Investments';
import { Account } from './Account';
import { PaymentMethods } from './PaymentMethods';
import { ProgressTracker } from './ProgressTracker';

export function Dashboard() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'investments':
        return <Investments />;
      case 'account':
        return <Account />;
      case 'payments':
        return <PaymentMethods />;
      case 'progress':
        return <ProgressTracker />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 overflow-y-auto">
        <main className="p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}