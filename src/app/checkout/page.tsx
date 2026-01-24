'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/contexts/cart-context';
import { Button } from '@/components/ui/button';
import { PaymentMethod } from '@/lib/bookeey/config';
import { CustomerInfo } from '@/lib/bookeey/types';
import { ArrowRight, CreditCard, Wallet, Smartphone, Lock, Package, Truck, ShieldCheck } from 'lucide-react';

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, getCartTotal } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod | string>(PaymentMethod.KNET);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: '',
    mobile: '',
    email: '',
    address: '',
    city: '',
    country: 'الكويت',
  });

  const subtotal = getCartTotal();
  const shipping = 0; // شحن مجاني
  const total = subtotal + shipping;

  const paymentMethods = [
    {
      id: PaymentMethod.KNET,
      name: 'KNET',
      nameAr: 'كي نت',
      icon: CreditCard,
      description: 'الدفع عبر شبكة الكويت',
    },
    {
      id: PaymentMethod.CREDIT_CARD,
      name: 'Credit Card',
      nameAr: 'بطاقة ائتمان',
      icon: CreditCard,
      description: 'Visa / Mastercard',
    },
    {
      id: PaymentMethod.AMEX,
      name: 'American Express',
      nameAr: 'أمريكان إكسبريس',
      icon: CreditCard,
      description: 'AMEX',
    },
    {
      id: PaymentMethod.APPLE_PAY,
      name: 'Apple Pay',
      nameAr: 'آبل باي',
      icon: Smartphone,
      description: 'الدفع السريع',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert('السلة فارغة!');
      return;
    }

    setIsProcessing(true);

    try {
      const response = await fetch('/api/payment/initiate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerInfo,
          paymentMethod: selectedPaymentMethod,
          amount: total,
          items: cart,
        }),
      });

      const data = await response.json();

      if (data.success && data.paymentUrl) {
        // Redirect to Bookeey payment gateway
        console.log('Redirecting to Bookeey:', data.paymentUrl);
        console.log('Transaction ID:', data.transactionId);

        // Redirect to actual payment gateway
        window.location.href = data.paymentUrl;
      } else {
        alert(data.error || 'حدث خطأ أثناء معالجة الطلب');
        setIsProcessing(false);
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('حدث خطأ أثناء معالجة الطلب');
      setIsProcessing(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#E8EAED] to-white flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <Package className="w-24 h-24 text-[#D4CCC4] mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-[#2C2420] mb-4">السلة فارغة</h1>
          <p className="text-[#4A5568] mb-8">
            لا توجد منتجات في سلة التسوق. ابدأ بإضافة منتجات لإتمام الطلب.
          </p>
          <Link href="/">
            <Button className="bg-[#2C2420] text-white hover:bg-[#4A5568] px-8 py-6 text-lg rounded-full">
              العودة للمتجر
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8EAED] to-white">
      {/* Header */}
      <header className="bg-white shadow-md border-b-2 border-[#D4CCC4]/30 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 text-[#2C2420] hover:text-[#4A5568] transition-colors w-fit">
            <ArrowRight className="w-5 h-5" />
            <span className="font-bold">العودة للمتجر</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2C2420] mb-3">
              إتمام الطلب
            </h1>
            <p className="text-[#4A5568] text-lg">
              املأ البيانات أدناه لإكمال عملية الشراء
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 p-6 bg-white rounded-2xl shadow-lg">
            <div className="flex items-center gap-2 text-[#2C2420]">
              <ShieldCheck className="w-5 h-5 text-green-500" />
              <span className="text-sm font-semibold">دفع آمن 100%</span>
            </div>
            <div className="flex items-center gap-2 text-[#2C2420]">
              <Truck className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-semibold">شحن مجاني</span>
            </div>
            <div className="flex items-center gap-2 text-[#2C2420]">
              <Package className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-semibold">منتجات أصلية</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Form */}
            <div className="lg:col-span-2 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Customer Information */}
                <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 border-2 border-[#E8EAED]">
                  <h2 className="text-2xl font-bold text-[#2C2420] mb-6 flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#2C2420] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    معلومات العميل
                  </h2>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#2C2420] font-semibold mb-2">
                        الاسم الكامل <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#E8EAED] focus:border-[#2C2420] focus:outline-none transition-colors"
                        placeholder="أدخل اسمك الكامل"
                      />
                    </div>

                    <div>
                      <label className="block text-[#2C2420] font-semibold mb-2">
                        رقم الهاتف <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={customerInfo.mobile}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, mobile: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#E8EAED] focus:border-[#2C2420] focus:outline-none transition-colors"
                        placeholder="مثال: 50000000"
                        dir="ltr"
                      />
                    </div>

                    <div>
                      <label className="block text-[#2C2420] font-semibold mb-2">
                        البريد الإلكتروني
                      </label>
                      <input
                        type="email"
                        value={customerInfo.email}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#E8EAED] focus:border-[#2C2420] focus:outline-none transition-colors"
                        placeholder="example@email.com"
                        dir="ltr"
                      />
                    </div>

                    <div>
                      <label className="block text-[#2C2420] font-semibold mb-2">
                        المدينة <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={customerInfo.city}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, city: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#E8EAED] focus:border-[#2C2420] focus:outline-none transition-colors"
                        placeholder="مثال: الكويت، حولي، الفروانية"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-[#2C2420] font-semibold mb-2">
                        العنوان <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        value={customerInfo.address}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#E8EAED] focus:border-[#2C2420] focus:outline-none transition-colors resize-none"
                        placeholder="المنطقة، الشارع، رقم المنزل، علامة مميزة..."
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 border-2 border-[#E8EAED]">
                  <h2 className="text-2xl font-bold text-[#2C2420] mb-6 flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#2C2420] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    طريقة الدفع
                  </h2>

                  <div className="grid md:grid-cols-2 gap-4">
                    {paymentMethods.map((method) => {
                      const Icon = method.icon;
                      return (
                        <button
                          key={method.id}
                          type="button"
                          onClick={() => setSelectedPaymentMethod(method.id)}
                          className={`p-4 rounded-2xl border-2 transition-all text-right ${
                            selectedPaymentMethod === method.id
                              ? 'border-[#2C2420] bg-[#2C2420]/5 shadow-lg'
                              : 'border-[#E8EAED] hover:border-[#D4CCC4]'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                selectedPaymentMethod === method.id
                                  ? 'border-[#2C2420]'
                                  : 'border-[#D4CCC4]'
                              }`}
                            >
                              {selectedPaymentMethod === method.id && (
                                <div className="w-3 h-3 rounded-full bg-[#2C2420]" />
                              )}
                            </div>
                            <Icon className="w-6 h-6 text-[#2C2420]" />
                            <div className="flex-1">
                              <div className="font-bold text-[#2C2420]">{method.nameAr}</div>
                              <div className="text-sm text-[#4A5568]">{method.description}</div>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="flex items-start gap-2">
                      <Lock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-blue-900">
                        جميع معاملات الدفع مشفرة ومحمية بأعلى معايير الأمان. نحن لا نحتفظ ببيانات بطاقتك الائتمانية.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-br from-[#2C2420] to-[#4A5568] hover:from-[#4A5568] hover:to-[#2C2420] text-white rounded-full py-7 text-xl font-bold shadow-xl hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      جاري المعالجة...
                    </span>
                  ) : (
                    <>
                      <Wallet className="inline-block ml-2" />
                      إتمام الدفع ({total.toFixed(3)} د.ك)
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl shadow-lg p-6 border-2 border-[#E8EAED] sticky top-24">
                <h2 className="text-2xl font-bold text-[#2C2420] mb-6">ملخص الطلب</h2>

                {/* Cart Items */}
                <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-3 pb-4 border-b border-[#E8EAED]">
                      <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-[#E8EAED]">
                        <Image
                          src={item.image}
                          alt={item.nameAr}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-[#2C2420] text-sm truncate">
                          {item.nameAr}
                        </h3>
                        <p className="text-xs text-[#4A5568]">الكمية: {item.quantity}</p>
                        <p className="font-bold text-[#2C2420] text-sm">
                          {(item.price * item.quantity).toFixed(3)} د.ك
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="space-y-3 mb-6 pb-6 border-b-2 border-[#E8EAED]">
                  <div className="flex justify-between text-[#4A5568]">
                    <span>المجموع الفرعي:</span>
                    <span className="font-semibold">{subtotal.toFixed(3)} د.ك</span>
                  </div>
                  <div className="flex justify-between text-green-600 font-semibold">
                    <span>الشحن:</span>
                    <span>مجاني</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center text-xl font-bold text-[#2C2420]">
                  <span>المجموع الكلي:</span>
                  <span className="text-2xl">{total.toFixed(3)} د.ك</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
