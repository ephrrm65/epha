export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  referralCode: string;
  totalInvestment: number;
  totalBonus: number;
  referredUsers: number;
  joinDate: string;
  avatar?: string;
  accountStatus?: 'pending_deposit' | 'active' | 'suspended';
  hasCompletedInitialDeposit?: boolean;
  referredBy?: string;
  initialDepositAmount?: number;
  initialDepositMethod?: string;
  initialDepositDate?: string;
  withdrawnAmount?: number;
  lastWithdrawalDate?: string;
}

export interface Investment {
  id: string;
  title: string;
  description: string;
  category: 'real-estate' | 'cryptocurrency' | 'startup';
  minInvestment: number;
  expectedReturn: string;
  duration: string;
  riskLevel: 'low' | 'medium' | 'high';
  image: string;
  totalRaised: number;
  targetAmount: number;
  investorsCount: number;
}

export interface UserInvestment {
  id: string;
  investmentId: string;
  amount: number;
  purchaseDate: string;
  status: 'active' | 'completed' | 'pending';
  currentValue: number;
}

export interface Referral {
  id: string;
  referredUserId: string;
  referredUserName: string;
  investmentAmount: number;
  bonusEarned: number;
  date: string;
  status: 'pending' | 'confirmed';
}

export interface PaymentMethod {
  id: string;
  type: 'card' | 'bank' | 'crypto' | 'binance' | 'bybit' | 'okx' | 'bitget' | 'cbe' | 'teller';
  name: string;
  details: string;
  isDefault: boolean;
}

export interface WithdrawalMethod {
  id: string;
  type: 'bank' | 'crypto' | 'mobile_money';
  name: string;
  details: string;
  accountNumber?: string;
  walletAddress?: string;
  isDefault: boolean;
}

export interface WithdrawalRequest {
  id: string;
  amount: number;
  withdrawalMethodId: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  requestDate: string;
  processedDate?: string;
  transactionId?: string;
}