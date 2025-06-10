import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, firstName: string, lastName: string, referralCode?: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
  completeInitialDeposit: (amount: number, paymentMethod: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data
const mockUser: User = {
  id: '1',
  email: 'demo@atrafi.com',
  firstName: 'John',
  lastName: 'Doe',
  referralCode: 'ATRAFI-JD2024',
  totalInvestment: 25000,
  totalBonus: 3750,
  referredUsers: 15,
  joinDate: '2024-01-15',
  avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
  accountStatus: 'active',
  hasCompletedInitialDeposit: true
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('atrafi_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For demo purposes, accept any email/password
    if (email && password) {
      const userToLogin = { ...mockUser, email };
      setUser(userToLogin);
      localStorage.setItem('atrafi_user', JSON.stringify(userToLogin));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const register = async (email: string, password: string, firstName: string, lastName: string, referralCode?: string): Promise<boolean> => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser: User = {
      id: Date.now().toString(),
      email,
      firstName,
      lastName,
      referralCode: `ATRAFI-${firstName.toUpperCase()}${Date.now().toString().slice(-4)}`,
      totalInvestment: 0,
      totalBonus: 0,
      referredUsers: 0,
      joinDate: new Date().toISOString().split('T')[0],
      accountStatus: 'pending_deposit',
      hasCompletedInitialDeposit: false,
      referredBy: referralCode || undefined
    };
    
    setUser(newUser);
    localStorage.setItem('atrafi_user', JSON.stringify(newUser));
    setIsLoading(false);
    return true;
  };

  const completeInitialDeposit = async (amount: number, paymentMethod: string): Promise<boolean> => {
    if (!user) return false;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Process referral bonus if user was referred
    let referralBonus = 0;
    if (user.referredBy && amount >= 100) {
      referralBonus = amount * 0.5; // 50% goes to referrer
      // In a real app, this would update the referrer's account
    }
    
    const updatedUser: User = {
      ...user,
      hasCompletedInitialDeposit: true,
      accountStatus: 'active',
      totalInvestment: amount,
      initialDepositAmount: amount,
      initialDepositMethod: paymentMethod,
      initialDepositDate: new Date().toISOString()
    };
    
    setUser(updatedUser);
    localStorage.setItem('atrafi_user', JSON.stringify(updatedUser));
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('atrafi_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading, completeInitialDeposit }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}