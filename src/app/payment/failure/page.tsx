'use client';

import { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { XCircle, ArrowRight, Phone, Home, RefreshCcw } from 'lucide-react';

function FailureContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');

  const handleRetry = () => {
    router.push('/checkout');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center border-2 border-red-200">
          {/* Error Icon */}
          <div className="mb-6">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <XCircle className="w-16 h-16 text-red-600" />
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C2420] mb-4">
            فشلت عملية الدفع
          </h1>
          <p className="text-xl text-[#4A5568] mb-8">
            عذراً، لم نتمكن من إتمام عملية الدفع
          </p>

          {/* Order ID */}
          {orderId && (
            <div className="bg-[#E8EAED] rounded-2xl p-6 mb-8">
              <p className="text-sm text-[#4A5568] mb-2">رقم المحاولة</p>
              <p className="text-xl font-bold text-[#2C2420] font-mono">{orderId}</p>
            </div>
          )}

          {/* Possible Reasons */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 mb-8 text-right">
            <h2 className="text-xl font-bold text-[#2C2420] mb-4">
              الأسباب المحتملة:
            </h2>
            <ul className="space-y-3 text-[#4A5568]">
              <li className="flex items-start gap-3">
                <span className="text-red-500 flex-shrink-0">•</span>
                <span>رصيد غير كافٍ في البطاقة</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 flex-shrink-0">•</span>
                <span>بيانات البطاقة غير صحيحة</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 flex-shrink-0">•</span>
                <span>انتهت صلاحية البطاقة</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 flex-shrink-0">•</span>
                <span>البطاقة غير مفعلة للمدفوعات الإلكترونية</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 flex-shrink-0">•</span>
                <span>تم إلغاء العملية من قبل المستخدم</span>
              </li>
            </ul>
          </div>

          {/* What to Do */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 text-right">
            <h2 className="text-xl font-bold text-[#2C2420] mb-4">
              ماذا أفعل الآن؟
            </h2>
            <ul className="space-y-3 text-[#4A5568]">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  1
                </div>
                <span>تحقق من بيانات البطاقة والرصيد</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  2
                </div>
                <span>تأكد من تفعيل البطاقة للمدفوعات الإلكترونية</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  3
                </div>
                <span>حاول مرة أخرى أو استخدم طريقة دفع أخرى</span>
              </li>
            </ul>
          </div>

          {/* Contact Support */}
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Phone className="w-5 h-5 text-green-600" />
              <h3 className="text-lg font-bold text-[#2C2420]">تحتاج مساعدة؟</h3>
            </div>
            <p className="text-[#4A5568] mb-4">
              تواصل معنا وسنساعدك في إتمام طلبك
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="tel:+96566333333"
                className="text-sm bg-white px-4 py-2 rounded-full font-semibold text-[#2C2420] hover:bg-[#E8EAED] transition-colors"
              >
                📞 +965 66333333
              </a>
              <a
                href="https://wa.me/96566333333"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm bg-green-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors"
              >
                💬 واتساب
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleRetry}
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-br from-[#2C2420] to-[#4A5568] hover:from-[#4A5568] hover:to-[#2C2420] text-white rounded-full px-8 py-6 text-lg font-bold shadow-xl hover:shadow-2xl transition-all"
            >
              <RefreshCcw className="w-5 h-5 ml-2" />
              حاول مرة أخرى
            </Button>

            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-[#2C2420] text-[#2C2420] hover:bg-[#E8EAED] rounded-full px-8 py-6 text-lg font-bold"
              >
                <Home className="w-5 h-5 ml-2" />
                العودة للمتجر
              </Button>
            </Link>
          </div>

          {/* Alternative Payment Methods */}
          <div className="mt-8 pt-8 border-t-2 border-[#E8EAED]">
            <p className="text-sm text-[#4A5568] mb-3">
              يمكنك أيضاً الدفع عند الاستلام
            </p>
            <p className="text-xs text-[#9B8F85]">
              اتصل بنا لإتمام الطلب بطريقة الدفع عند الاستلام
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PaymentFailurePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-red-50 to-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    }>
      <FailureContent />
    </Suspense>
  );
}
