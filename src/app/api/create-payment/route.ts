import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { productId, productName, price, quantity = 1 } = body;

    // Validate input
    if (!productId || !productName || !price) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get payment credentials from environment
    const merchantId = process.env.NEXT_PUBLIC_PAYMENT_MERCHANT_ID;
    const secretKey = process.env.PAYMENT_SECRET_KEY;
    const originalSiteUrl = process.env.NEXT_PUBLIC_ORIGINAL_SITE_URL;

    if (!merchantId || !secretKey) {
      console.error('Payment credentials not configured');
      return NextResponse.json(
        { error: 'Payment system not configured' },
        { status: 500 }
      );
    }

    // Calculate total
    const totalAmount = price * quantity;

    // TODO: Replace this with your actual payment gateway API call
    // This is a placeholder that redirects to your original website
    // You'll need to replace this with the actual payment gateway integration

    // Example for common payment gateways:
    //
    // For MyFatoorah:
    // const response = await fetch('https://apitest.myfatoorah.com/v2/ExecutePayment', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${secretKey}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     CustomerName: 'Customer',
    //     NotificationOption: 'LNK',
    //     InvoiceValue: totalAmount,
    //     CallBackUrl: `${process.env.NEXT_PUBLIC_APP_URL}/payment/success`,
    //     ErrorUrl: `${process.env.NEXT_PUBLIC_APP_URL}/payment/error`,
    //   })
    // });
    //
    // For Tap Payment:
    // const response = await fetch('https://api.tap.company/v2/charges', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${secretKey}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     amount: totalAmount,
    //     currency: 'KWD',
    //     customer: { email: 'customer@example.com' },
    //     source: { id: 'src_all' },
    //     redirect: { url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/callback` }
    //   })
    // });

    // For now, redirect to original website with product info
    // You can customize this URL based on your payment gateway
    const paymentUrl = `${originalSiteUrl}/checkout?product_id=${productId}&product_name=${encodeURIComponent(productName)}&price=${price}&quantity=${quantity}&merchant_id=${merchantId}`;

    // Return the payment URL
    return NextResponse.json({
      success: true,
      paymentUrl,
      data: {
        productId,
        productName,
        price,
        quantity,
        totalAmount,
        merchantId,
      },
    });

  } catch (error) {
    console.error('Payment creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create payment' },
      { status: 500 }
    );
  }
}

// Optional: Handle GET requests
export async function GET() {
  return NextResponse.json(
    { message: 'Payment API endpoint. Use POST to create a payment.' },
    { status: 200 }
  );
}
