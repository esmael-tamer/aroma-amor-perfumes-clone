'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/contexts/cart-context';
import { Button } from '@/components/ui/button';
import { CheckCircle, Package, Home, Mail } from 'lucide-react';

function SuccessContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { clearCart } = useCart();
  const orderId = searchParams.get('orderId');

  useEffect(() => {
    // Clear cart after successful payment
    clearCart();

    // Optional: Send confirmation to backend
    if (orderId) {
      console.log('Payment successful for order:', orderId);
      // You could make an API call here to confirm the order
    }
  }, [orderId, clearCart]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center border-2 border-green-200">
          {/* Success Icon */}
          <div className="mb-6">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C2420] mb-4">
            تم الدفع بنجاح! 🎉
          </h1>
          <p className="text-xl text-[#4A5568] mb-8">
            شكراً لك على طلبك من Aroma Amor Perfumes
          </p>

          {/* Order ID */}
          {orderId && (
            <div className="bg-[#E8EAED] rounded-2xl p-6 mb-8">
              <p className="text-sm text-[#4A5568] mb-2">رقم الطلب</p>
              <p className="text-2xl font-bold text-[#2C2420] font-mono">{orderId}</p>
              <p className="text-sm text-[#4A5568] mt-2">
                احتفظ بهذا الرقم للمتابعة
              </p>
            </div>
          )}

          {/* Next Steps */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 text-right">
            <h2 className="text-xl font-bold text-[#2C2420] mb-4 flex items-center gap-2">
              <Package className="w-6 h-6" />
              الخطوات القادمة
            </h2>
            <ul className="space-y-3 text-[#4A5568]">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  1
                </div>
                <span>سنقوم بمعالجة طلبك فوراً</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  2
                </div>
                <span>سيتم تجهيز منتجاتك بعناية فائقة</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  3
                </div>
                <span>التوصيل خلال 2-3 أيام عمل</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  4
                </div>
                <span>ستصلك رسالة تأكيد على رقم هاتفك</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Mail className="w-5 h-5 text-amber-600" />
              <h3 className="text-lg font-bold text-[#2C2420]">تحتاج مساعدة؟</h3>
            </div>
            <p className="text-[#4A5568] mb-4">
              فريقنا جاهز لمساعدتك في أي استفسار
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="tel:+96566333333"
                className="text-sm bg-white px-4 py-2 rounded-full font-semibold text-[#2C2420] hover:bg-[#E8EAED] transition-colors"
              >
                📞 +965 66333333
              </a>
              <a
                href="mailto:info@aromaamor.com"
                className="text-sm bg-white px-4 py-2 rounded-full font-semibold text-[#2C2420] hover:bg-[#E8EAED] transition-colors"
              >
                ✉️ info@aromaamor.com
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-br from-[#2C2420] to-[#4A5568] hover:from-[#4A5568] hover:to-[#2C2420] text-white rounded-full px-8 py-6 text-lg font-bold shadow-xl hover:shadow-2xl transition-all"
              >
                <Home className="w-5 h-5 ml-2" />
                العودة للمتجر
              </Button>
            </Link>
          </div>

          {/* Social Share */}
          <div className="mt-8 pt-8 border-t-2 border-[#E8EAED]">
            <p className="text-sm text-[#4A5568] mb-4">
              شارك تجربتك مع Aroma Amor Perfumes
            </p>
            <div className="flex justify-center gap-3">
              <button className="w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center">
                f
              </button>
              <button className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full hover:opacity-90 transition-opacity flex items-center justify-center">
                📷
              </button>
              <button className="w-10 h-10 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors flex items-center justify-center">
                🐦
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
