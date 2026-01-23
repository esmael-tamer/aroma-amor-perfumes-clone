import { NextRequest, NextResponse } from 'next/server';
import { verifySignature } from '@/lib/bookeey/utils';
import { PaymentCallbackData } from '@/lib/bookeey/types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Extract callback data from Bookeey
    const callbackData: PaymentCallbackData = {
      orderId: body.orderId || body.order_id,
      transactionId: body.transactionId || body.transaction_id,
      status: body.status,
      amount: parseFloat(body.amount),
      paymentMethod: body.paymentMethod || body.payment_method,
      signature: body.signature,
      message: body.message,
    };

    // Verify signature to ensure the callback is from Bookeey
    const isValid = verifySignature(
      callbackData.signature,
      callbackData.orderId,
      callbackData.transactionId,
      callbackData.status,
      callbackData.amount
    );

    if (!isValid) {
      console.error('Invalid signature from payment gateway');
      return NextResponse.json(
        { success: false, error: 'Invalid signature' },
        { status: 401 }
      );
    }

    // Process the payment based on status
    if (callbackData.status === 'SUCCESS') {
      // Payment successful - update order status in database
      console.log('Payment successful:', callbackData);

      // Here you would:
      // 1. Update order status in database
      // 2. Send confirmation email to customer
      // 3. Trigger fulfillment process
      // 4. Update inventory

    } else if (callbackData.status === 'FAILED') {
      // Payment failed
      console.log('Payment failed:', callbackData);

      // Here you would:
      // 1. Mark order as failed in database
      // 2. Send failure notification to customer

    } else {
      // Payment pending or other status
      console.log('Payment pending:', callbackData);
    }

    return NextResponse.json({
      success: true,
      message: 'Callback processed',
    });

  } catch (error) {
    console.error('Payment callback error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process callback' },
      { status: 500 }
    );
  }
}

// Also handle GET requests for some payment gateways
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const callbackData: PaymentCallbackData = {
    orderId: searchParams.get('orderId') || searchParams.get('order_id') || '',
    transactionId: searchParams.get('transactionId') || searchParams.get('transaction_id') || '',
    status: (searchParams.get('status') as 'SUCCESS' | 'FAILED' | 'PENDING') || 'PENDING',
    amount: parseFloat(searchParams.get('amount') || '0'),
    paymentMethod: searchParams.get('paymentMethod') || searchParams.get('payment_method') || '',
    signature: searchParams.get('signature') || '',
  };

  // Process similar to POST
  console.log('GET callback received:', callbackData);

  return NextResponse.json({
    success: true,
    message: 'Callback received',
  });
}
