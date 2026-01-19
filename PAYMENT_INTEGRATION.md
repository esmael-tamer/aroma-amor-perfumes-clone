# 💳 دليل ربط بوابة الدفع | Payment Integration Guide

## 📋 نظرة عامة | Overview

تم إنشاء صفحة تفاصيل منتج احترافية مع ربط بوابة الدفع. عند الضغط على "اشتري الآن"، يتم تحويل المستخدم إلى صفحة الدفع.

---

## 🔐 بيانات الاعتماد | Credentials

بيانات بوابة الدفع موجودة في ملف `.env.local`:

```env
NEXT_PUBLIC_PAYMENT_MERCHANT_ID=mer25000136
PAYMENT_SECRET_KEY=8182239
NEXT_PUBLIC_ORIGINAL_SITE_URL=https://aromaamorperfumes.com
```

⚠️ **ملاحظة هامة**: ملف `.env.local` غير مضاف إلى Git لحماية البيانات الحساسة.

---

## 🎯 كيفية عمل النظام | How It Works

### 1️⃣ صفحة المنتجات (Products Page)
- عرض جميع المنتجات (30 منتج)
- فلترة حسب الفئة (8 فئات)
- روابط إلى صفحة التفاصيل لكل منتج

**الملف**: `src/components/sections/products-section.tsx`

### 2️⃣ صفحة تفاصيل المنتج (Product Details)
- معرض صور تفاعلي
- معلومات المنتج الكاملة (الوصف، المميزات، السعر، التقييم)
- زر "اشتري الآن" للدفع
- منتجات مشابهة من نفس الفئة

**الملف**: `src/app/product/[id]/page.tsx`

### 3️⃣ API الدفع (Payment API)
- ينشئ رابط الدفع مع معلومات المنتج
- يحول المستخدم إلى صفحة الدفع

**الملف**: `src/app/api/create-payment/route.ts`

---

## ⚙️ تخصيص بوابة الدفع | Customize Payment Gateway

### الطريقة الحالية (Current Method)

حالياً، النظام يحول إلى:
```
https://aromaamorperfumes.com/checkout?product_id=30&product_name=BELLEZA&price=23&quantity=1&merchant_id=mer25000136
```

### للتكامل مع MyFatoorah:

قم بتعديل ملف `src/app/api/create-payment/route.ts`:

```typescript
// استبدل الكود الموجود بهذا:
const response = await fetch('https://apitest.myfatoorah.com/v2/ExecutePayment', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${secretKey}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    CustomerName: 'Customer',
    NotificationOption: 'LNK',
    InvoiceValue: totalAmount,
    CallBackUrl: `${process.env.NEXT_PUBLIC_APP_URL}/payment/success`,
    ErrorUrl: `${process.env.NEXT_PUBLIC_APP_URL}/payment/error`,
  })
});

const data = await response.json();
return NextResponse.json({
  success: true,
  paymentUrl: data.Data.PaymentURL,
});
```

### للتكامل مع Tap Payment:

```typescript
const response = await fetch('https://api.tap.company/v2/charges', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${secretKey}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    amount: totalAmount,
    currency: 'KWD',
    customer: { email: 'customer@example.com' },
    source: { id: 'src_all' },
    redirect: { url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/callback` }
  })
});

const data = await response.json();
return NextResponse.json({
  success: true,
  paymentUrl: data.transaction.url,
});
```

### للتكامل مع Stripe:

```typescript
const stripe = require('stripe')(secretKey);

const session = await stripe.checkout.sessions.create({
  payment_method_types: ['card'],
  line_items: [{
    price_data: {
      currency: 'kwd',
      product_data: {
        name: productName,
      },
      unit_amount: price * 100, // Stripe uses cents
    },
    quantity: quantity,
  }],
  mode: 'payment',
  success_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/success`,
  cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/cancel`,
});

return NextResponse.json({
  success: true,
  paymentUrl: session.url,
});
```

---

## 🔧 متغيرات البيئة المطلوبة | Required Environment Variables

أضف هذه المتغيرات إلى ملف `.env.local`:

```env
# Payment Gateway
NEXT_PUBLIC_PAYMENT_MERCHANT_ID=mer25000136
PAYMENT_SECRET_KEY=8182239

# Your Application URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Original Site (للتحويل المؤقت)
NEXT_PUBLIC_ORIGINAL_SITE_URL=https://aromaamorperfumes.com

# حسب بوابة الدفع المستخدمة:
# MyFatoorah
MYFATOORAH_API_KEY=your_api_key_here

# Tap Payment
TAP_SECRET_KEY=your_secret_key_here

# Stripe
STRIPE_SECRET_KEY=your_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_publishable_key_here
```

---

## 📁 هيكل الملفات | File Structure

```
src/
├── app/
│   ├── product/
│   │   └── [id]/
│   │       └── page.tsx          # صفحة تفاصيل المنتج
│   └── api/
│       └── create-payment/
│           └── route.ts           # API الدفع
├── components/
│   └── sections/
│       └── products-section.tsx   # صفحة المنتجات
└── lib/
    └── products.ts                # بيانات المنتجات (30 منتج)
```

---

## 🧪 الاختبار | Testing

### 1. تشغيل السيرفر المحلي:
```bash
npm run dev
```

### 2. افتح المتصفح:
```
http://localhost:3000
```

### 3. اختبر المسار:
1. انتقل إلى قسم المنتجات
2. اضغط على أي منتج
3. في صفحة التفاصيل، اضغط "اشتري الآن"
4. سيتم تحويلك إلى صفحة الدفع

---

## 🎨 المميزات | Features

### صفحة تفاصيل المنتج:
✅ معرض صور تفاعلي مع صور مصغرة
✅ معلومات شاملة (الاسم، السعر، التقييم، الوصف، المميزات)
✅ عرض الخصومات والتوفير
✅ عداد المخزون المتبقي
✅ شارات خاصة (الأكثر مبيعاً، جديد، نفذت الكمية)
✅ منتجات مشابهة من نفس الفئة
✅ أيقونات المميزات (توصيل مجاني، أصلي 100%، استرجاع سهل)
✅ تصميم متجاوب بالكامل
✅ دعم اللغة العربية والإنجليزية

### نظام الدفع:
✅ API route جاهز للتخصيص
✅ معالجة البيانات وإنشاء رابط الدفع
✅ تحويل آمن إلى بوابة الدفع
✅ إمكانية التكامل مع أي بوابة دفع

---

## 📞 للمساعدة | Support

إذا كنت بحاجة إلى مساعدة في:
- تخصيص بوابة الدفع
- إضافة صفحات النجاح/الفشل
- ربط Webhook للإشعارات
- أي تعديلات أخرى

اتصل بنا أو راجع الوثائق الرسمية لبوابة الدفع المستخدمة.

---

## 🔗 روابط مفيدة | Useful Links

- [MyFatoorah Docs](https://myfatoorah.readme.io/)
- [Tap Payment Docs](https://developers.tap.company/)
- [Stripe Docs](https://stripe.com/docs)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)

---

**تم التطوير بواسطة Claude 🤖**
**Aroma Amor Perfumes - عطور فاخرة أصلية من قلب الكويت 🌸**
