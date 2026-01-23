import { NextRequest, NextResponse } from 'next/server';
import { BOOKEEY_CONFIG } from '@/lib/bookeey/config';
import { generateSignature, getGatewayUrl, generateOrderId, formatAmount, formatPhoneNumber } from '@/lib/bookeey/utils';
import { BookeeyPaymentRequest } from '@/lib/bookeey/types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { customerInfo, paymentMethod, amount, items } = body;

    // Validate required fields
    if (!customerInfo?.name || !customerInfo?.mobile || !paymentMethod || !amount) {
      return NextResponse.json(
        { success: false, error: 'بيانات غير كاملة' },
        { status: 400 }
      );
    }

    // Generate unique order ID
    const orderId = generateOrderId();

    // Format amount (convert to fils if needed - depends on Bookeey requirements)
    const formattedAmount = formatAmount(amount);

    // Prepare payment request data
    const paymentData: BookeeyPaymentRequest = {
      merchantCode: BOOKEEY_CONFIG.MERCHANT_CODE,
      merchantSubcode: BOOKEEY_CONFIG.MERCHANT_SUBCODE,
      merchantName: BOOKEEY_CONFIG.MERCHANT_NAME,
      merchantMobile: BOOKEEY_CONFIG.MERCHANT_MOBILE,
      customerName: customerInfo.name,
      customerMobile: formatPhoneNumber(customerInfo.mobile),
      customerEmail: customerInfo.email || '',
      amount: formattedAmount,
      paymentMethod: paymentMethod,
      orderId: orderId,
      successUrl: `${BOOKEEY_CONFIG.BASE_URL}/payment/success?orderId=${orderId}`,
      failureUrl: `${BOOKEEY_CONFIG.BASE_URL}/payment/failure?orderId=${orderId}`,
      callbackUrl: `${BOOKEEY_CONFIG.BASE_URL}/api/payment/callback`,
      signature: '', // Will be generated next
    };

    // Generate signature
    paymentData.signature = generateSignature(paymentData);

    // Get gateway URL
    const gatewayUrl = getGatewayUrl();

    // In production, you would send this to Bookeey's API
    // For now, we'll create a form that auto-submits to their gateway

    // Store order data in database or session storage here
    // This is important for verification later
    console.log('Order created:', {
      orderId,
      customerInfo,
      amount,
      items: items.length,
      paymentMethod,
    });

    // Return payment initiation URL
    // In a real implementation, you might:
    // 1. Store order in database
    // 2. Call Bookeey API to get payment URL
    // 3. Return that URL to frontend

    // For now, we'll construct a payment URL with the data
    const paymentUrl = constructPaymentUrl(gatewayUrl, paymentData);

    return NextResponse.json({
      success: true,
      paymentUrl: paymentUrl,
      transactionId: orderId,
    });

  } catch (error) {
    console.error('Payment initiation error:', error);
    return NextResponse.json(
      { success: false, error: 'حدث خطأ أثناء معالجة الطلب' },
      { status: 500 }
    );
  }
}

/**
 * Construct payment URL with query parameters
 * Adjust this based on Bookeey's actual API requirements
 */
function constructPaymentUrl(baseUrl: string, data: BookeeyPaymentRequest): string {
  const params = new URLSearchParams({
    merchantCode: data.merchantCode,
    merchantSubcode: data.merchantSubcode,
    orderId: data.orderId,
    amount: data.amount.toString(),
    paymentMethod: data.paymentMethod,
    customerName: data.customerName,
    customerMobile: data.customerMobile,
    successUrl: data.successUrl,
    failureUrl: data.failureUrl,
    callbackUrl: data.callbackUrl,
    signature: data.signature,
  });

  if (data.customerEmail) {
    params.append('customerEmail', data.customerEmail);
  }

  return `${baseUrl}?${params.toString()}`;
}
