import crypto from 'crypto';
import { BOOKEEY_CONFIG } from './config';
import { BookeeyPaymentRequest } from './types';

/**
 * Generate signature for Bookeey payment request
 * This is a sample implementation - you may need to adjust based on Bookeey's exact requirements
 */
export function generateSignature(data: Partial<BookeeyPaymentRequest>): string {
  const {
    merchantCode,
    merchantSubcode,
    orderId,
    amount,
    paymentMethod,
  } = data;

  // Create signature string - adjust this based on Bookeey documentation
  const signatureString = `${merchantCode}${merchantSubcode}${orderId}${amount}${paymentMethod}${BOOKEEY_CONFIG.SECRET_KEY}`;

  // Generate SHA-256 hash
  return crypto
    .createHash('sha256')
    .update(signatureString)
    .digest('hex')
    .toUpperCase();
}

/**
 * Verify signature from Bookeey callback
 */
export function verifySignature(
  receivedSignature: string,
  orderId: string,
  transactionId: string,
  status: string,
  amount: number
): boolean {
  const signatureString = `${orderId}${transactionId}${status}${amount}${BOOKEEY_CONFIG.SECRET_KEY}`;

  const expectedSignature = crypto
    .createHash('sha256')
    .update(signatureString)
    .digest('hex')
    .toUpperCase();

  return receivedSignature === expectedSignature;
}

/**
 * Get payment gateway URL based on environment
 */
export function getGatewayUrl(): string {
  return BOOKEEY_CONFIG.ENV === 'production'
    ? BOOKEEY_CONFIG.URLS.PRODUCTION
    : BOOKEEY_CONFIG.URLS.SANDBOX;
}

/**
 * Generate unique order ID
 */
export function generateOrderId(): string {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 10000);
  return `ORD-${timestamp}-${random}`;
}

/**
 * Format amount for payment (remove decimals if needed)
 */
export function formatAmount(amount: number): number {
  // Bookeey might expect amounts in fils (1 KWD = 1000 fils)
  // Adjust based on their requirements
  return Math.round(amount * 1000);
}

/**
 * Format phone number for Bookeey
 */
export function formatPhoneNumber(phone: string): string {
  // Remove any non-digit characters
  let cleaned = phone.replace(/\D/g, '');

  // Remove country code if present (965 for Kuwait)
  if (cleaned.startsWith('965')) {
    cleaned = cleaned.substring(3);
  }

  return cleaned;
}
