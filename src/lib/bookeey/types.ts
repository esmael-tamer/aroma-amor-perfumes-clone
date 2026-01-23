import { PaymentMethod } from './config';

export interface Product {
  id: number;
  name: string;
  nameAr: string;
  price: number;
  originalPrice?: number;
  rating: number;
  category: string;
  categoryAr: string;
  image: string;
  badge?: string;
  discount?: string;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface OrderData {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  customerInfo: CustomerInfo;
  paymentMethod: PaymentMethod | string;
}

export interface CustomerInfo {
  name: string;
  mobile: string;
  email?: string;
  address?: string;
  city?: string;
  country?: string;
}

export interface BookeeyPaymentRequest {
  merchantCode: string;
  merchantSubcode: string;
  merchantName: string;
  merchantMobile: string;
  customerName: string;
  customerMobile: string;
  customerEmail?: string;
  amount: number;
  paymentMethod: string;
  orderId: string;
  successUrl: string;
  failureUrl: string;
  callbackUrl: string;
  signature: string;
}

export interface BookeeyPaymentResponse {
  status: 'success' | 'error';
  paymentUrl?: string;
  transactionId?: string;
  message?: string;
  error?: string;
}

export interface PaymentCallbackData {
  orderId: string;
  transactionId: string;
  status: 'SUCCESS' | 'FAILED' | 'PENDING';
  amount: number;
  paymentMethod: string;
  signature: string;
  message?: string;
}
