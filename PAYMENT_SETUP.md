# دليل إعداد نظام الدفع Bookeey

## نظرة عامة

تم دمج بوابة الدفع Bookeey بنجاح في متجر Aroma Amor Perfumes. يدعم النظام طرق الدفع التالية:

- 🔵 KNET (شبكة الكويت للمدفوعات)
- 💳 بطاقات الائتمان (Visa/Mastercard)
- 💎 American Express (AMEX)
- 🍎 Apple Pay

## البنية التحتية

### الملفات الرئيسية

```
src/
├── lib/bookeey/
│   ├── config.ts          # إعدادات Bookeey
│   ├── types.ts           # أنواع TypeScript
│   └── utils.ts           # دوال مساعدة للتوقيع والتحويل
├── contexts/
│   └── cart-context.tsx   # إدارة سلة التسوق
├── components/
│   └── cart/
│       └── cart-drawer.tsx # واجهة السلة
├── app/
│   ├── checkout/
│   │   └── page.tsx       # صفحة الدفع
│   ├── payment/
│   │   ├── success/page.tsx  # صفحة النجاح
│   │   └── failure/page.tsx  # صفحة الفشل
│   └── api/payment/
│       ├── initiate/route.ts  # بدء عملية الدفع
│       └── callback/route.ts  # استقبال نتيجة الدفع
```

## إعداد البيئة

### 1. ملف البيئة (.env.local)

قم بإنشاء ملف `.env.local` في جذر المشروع وأضف المتغيرات التالية:

```env
# Bookeey Payment Gateway Configuration
BOOKEEY_ENV=sandbox                    # أو production للبيئة الحقيقية
BOOKEEY_MERCHANT_CODE=mer260004        # رمز التاجر
BOOKEEY_MERCHANT_SUBCODE=YOUR_SUBCODE  # الرمز الفرعي (إذا كان متوفراً)
BOOKEEY_SECRET_KEY=8096274            # المفتاح السري
BOOKEEY_MERCHANT_NAME=Aroma Amor Perfumes
BOOKEEY_MERCHANT_MOBILE=66333333      # رقم هاتف التاجر

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000  # رابط الموقع
```

### 2. الحصول على بيانات Bookeey

تحتاج إلى التسجيل في Bookeey والحصول على:

1. **Merchant Code (MID)**: رمز التاجر الخاص بك
2. **Secret Key**: المفتاح السري للتشفير
3. **Merchant Subcode**: الرمز الفرعي (إن وجد)

## كيفية العمل

### 1. إضافة المنتجات للسلة

```typescript
// في أي مكون
import { useCart } from '@/contexts/cart-context';

const { addToCart } = useCart();

// إضافة منتج
addToCart(product);
```

### 2. عملية الدفع

1. **المستخدم يضيف المنتجات للسلة**
2. **ينتقل لصفحة Checkout** (`/checkout`)
3. **يملأ معلوماته الشخصية**:
   - الاسم الكامل
   - رقم الهاتف
   - البريد الإلكتروني (اختياري)
   - العنوان والمدينة
4. **يختار طريقة الدفع**:
   - KNET
   - بطاقة ائتمان
   - AMEX
   - Apple Pay
5. **يضغط "إتمام الدفع"**

### 3. معالجة الدفع

```
المستخدم → صفحة Checkout → API /api/payment/initiate
                                    ↓
                            يتم إنشاء طلب دفع
                                    ↓
                            توليد التوقيع (Signature)
                                    ↓
                        إعادة التوجيه لبوابة Bookeey
                                    ↓
                            المستخدم يدفع
                                    ↓
                    ┌──────────────────────────────┐
                    ↓                              ↓
            النجاح ✅                       الفشل ❌
                    ↓                              ↓
    /payment/success?orderId=XXX    /payment/failure?orderId=XXX
                    ↓                              ↓
         تفريغ السلة                      حاول مرة أخرى
```

### 4. التوقيع (Signature)

نظام Bookeey يستخدم التوقيع للتحقق من صحة الطلبات:

```typescript
// إنشاء التوقيع
const signature = generateSignature({
  merchantCode,
  merchantSubcode,
  orderId,
  amount,
  paymentMethod
});

// التحقق من التوقيع (في الـ callback)
const isValid = verifySignature(
  receivedSignature,
  orderId,
  transactionId,
  status,
  amount
);
```

## واجهات برمجية (API Routes)

### POST /api/payment/initiate

**الطلب:**
```json
{
  "customerInfo": {
    "name": "أحمد محمد",
    "mobile": "50000000",
    "email": "ahmed@example.com",
    "address": "شارع 1، منطقة السالمية",
    "city": "حولي",
    "country": "الكويت"
  },
  "paymentMethod": "KNET",
  "amount": 50.500,
  "items": [...]
}
```

**الرد:**
```json
{
  "success": true,
  "paymentUrl": "https://sandbox.bookeey.com/portal/payment/init?...",
  "transactionId": "ORD-1234567890-5678"
}
```

### POST /api/payment/callback

يستقبل نتيجة الدفع من Bookeey ويعالجها.

## الاختبار

### 1. الاختبار المحلي

```bash
# تشغيل المشروع
npm run dev

# فتح المتصفح
http://localhost:3000
```

### 2. اختبار السلة

1. أضف منتجات للسلة
2. افتح السلة من الهيدر
3. تحقق من الكميات والأسعار
4. انتقل للـ Checkout

### 3. اختبار الدفع (Sandbox)

استخدم بطاقات اختبار من Bookeey:
- **KNET**: استخدم بيانات اختبار KNET
- **Credit Card**: `4111 1111 1111 1111` (Visa Test Card)

## الأمان

### ✅ تم تطبيقه

- 🔒 تشفير المفاتيح في ملف .env.local
- 🔐 توقيع جميع الطلبات (Signature)
- ✔️ التحقق من صحة البيانات المرسلة
- 🛡️ عدم حفظ بيانات البطاقات

### ⚠️ مهم

- **لا ترفع ملف .env.local إلى Git**
- **غيّر SECRET_KEY في البيئة الحقيقية**
- **استخدم HTTPS في الإنتاج**

## الانتقال للإنتاج

### 1. تحديث المتغيرات

```env
BOOKEEY_ENV=production
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

### 2. التأكد من SSL

تأكد من أن موقعك يستخدم HTTPS في الإنتاج.

### 3. اختبار نهائي

قبل الإطلاق:
- ✅ اختبر جميع طرق الدفع
- ✅ تأكد من وصول رسائل التأكيد
- ✅ تحقق من صفحات النجاح والفشل
- ✅ اختبر على أجهزة مختلفة

## الدعم الفني

للحصول على المساعدة:

### Bookeey
- 📧 الدعم الفني لـ Bookeey
- 📖 وثائق API الرسمية

### المشروع
- 📱 WhatsApp: +965 66333333
- 📧 Email: info@aromaamor.com

## ملاحظات مهمة

1. **التوقيع**: قد يختلف طريقة حساب التوقيع حسب وثائق Bookeey الرسمية
2. **الروابط**: تأكد من تحديث روابط Success/Failure URLs
3. **المبالغ**: تحقق من تنسيق المبالغ (KWD vs Fils)
4. **الـ Callback**: تأكد من أن خادمك يمكن الوصول إليه من Bookeey

## الخطوات التالية (اختياري)

- [ ] إضافة قاعدة بيانات لتخزين الطلبات
- [ ] إرسال رسائل تأكيد عبر البريد الإلكتروني/SMS
- [ ] نظام تتبع الطلبات
- [ ] لوحة تحكم للمدير
- [ ] تقارير المبيعات

---

**تم بناء النظام بنجاح! 🎉**

جميع المكونات جاهزة للاستخدام والاختبار.
