export const BOOKEEY_CONFIG = {
    ENV: process.env.BOOKEEY_ENV || 'sandbox',
    MERCHANT_CODE: process.env.BOOKEEY_MERCHANT_CODE || 'YOUR_CODE',
    MERCHANT_SUBCODE: process.env.BOOKEEY_MERCHANT_SUBCODE || 'YOUR_SUBCODE',
    SECRET_KEY: process.env.BOOKEEY_SECRET_KEY || 'YOUR_SECRET_KEY',
    MERCHANT_NAME: process.env.BOOKEEY_MERCHANT_NAME || 'Aroma Amor Perfumes',
    MERCHANT_MOBILE: process.env.BOOKEEY_MERCHANT_MOBILE || '66333333',
    BASE_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',

    // Gateway URLs
    URLS: {
        SANDBOX: 'https://sandbox.bookeey.com/portal/payment/init',
        PRODUCTION: 'https://www.bookeey.com/portal/payment/init',
    }
};

export enum PaymentMethod {
    KNET = 'KNET',
    CREDIT_CARD = 'CC',
    AMEX = 'AMEX',
    APPLE_PAY = 'APPLE_PAY'
}

export interface PaymentRequestData {
    customerName: string;
    customerMobile: string;
    customerEmail?: string;
    amount: number;
    paymentMethod: PaymentMethod | string;
    orderId?: string;
}

export interface PaymentResponse {
    success: boolean;
    paymentUrl?: string;
    error?: string;
    transactionId?: string;
}
