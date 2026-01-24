# 🌐 حل مشكلة Localhost مع Bookeey

## المشكلة ❌
Bookeey لا يقبل روابط `http://localhost` في:
- `successUrl` - صفحة النجاح
- `failureUrl` - صفحة الفشل
- `callbackUrl` - رابط الـ callback

**السبب:** Bookeey يحتاج روابط عامة (public URLs) يمكنه الوصول إليها من الإنترنت.

---

## ✅ الحلول المتاحة

### الحل 1: استخدام LocalTunnel (الأسرع والأسهل) ⭐

#### الخطوة 1: استخدام السكريبت الجاهز
```bash
./start-with-tunnel.sh
```

سيظهر لك رابط عام مثل:
```
✅ Public URL created: https://funny-cat-1234.loca.lt
```

#### الخطوة 2: تحديث `.env.local`
انسخ الرابط وضعه في `.env.local`:
```env
NEXT_PUBLIC_APP_URL=https://funny-cat-1234.loca.lt
```

#### الخطوة 3: أعد تشغيل السكريبت
```bash
./start-with-tunnel.sh
```

**ملاحظة:** عند فتح الرابط لأول مرة، ستحتاج الضغط على "Click to Continue" في صفحة localtunnel.

---

### الحل 2: استخدام Ngrok (احترافي) 🚀

#### 1. تثبيت Ngrok
```bash
# تحميل ngrok
wget https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-linux-amd64.tgz
tar -xvzf ngrok-v3-stable-linux-amd64.tgz
sudo mv ngrok /usr/local/bin/
```

#### 2. التسجيل والحصول على Auth Token
- اذهب إلى: https://dashboard.ngrok.com/signup
- سجل حساب مجاني
- انسخ auth token من: https://dashboard.ngrok.com/get-started/your-authtoken

```bash
ngrok config add-authtoken YOUR_AUTH_TOKEN
```

#### 3. تشغيل Ngrok
```bash
ngrok http 3000
```

ستحصل على رابط مثل:
```
Forwarding: https://abc123.ngrok-free.app -> http://localhost:3000
```

#### 4. تحديث `.env.local`
```env
NEXT_PUBLIC_APP_URL=https://abc123.ngrok-free.app
```

#### 5. تشغيل المشروع
```bash
npm run dev
```

**مميزات Ngrok:**
- ✅ روابط ثابتة (في النسخة المدفوعة)
- ✅ واجهة ويب لمراقبة الطلبات
- ✅ سرعة أفضل من localtunnel
- ✅ لا توجد صفحة تحذير

---

### الحل 3: نشر على Vercel (للإنتاج) 🌟

#### 1. تثبيت Vercel CLI
```bash
npm install -g vercel
```

#### 2. تسجيل الدخول
```bash
vercel login
```

#### 3. نشر المشروع
```bash
vercel --prod
```

ستحصل على رابط مثل:
```
https://aroma-amor.vercel.app
```

#### 4. إضافة Environment Variables
في لوحة تحكم Vercel:
1. اذهب إلى: Project Settings → Environment Variables
2. أضف جميع المتغيرات من `.env.local`:
   - `BOOKEEY_ENV=sandbox`
   - `BOOKEEY_MERCHANT_CODE=MF260004`
   - `BOOKEEY_SECRET_KEY=...`
   - `NEXT_PUBLIC_APP_URL=https://aroma-amor.vercel.app`

#### 5. أعد النشر
```bash
vercel --prod
```

**مميزات Vercel:**
- ✅ رابط دائم وثابت
- ✅ أداء عالي
- ✅ SSL مجاني
- ✅ تحديث تلقائي عند الـ push لـ GitHub
- ✅ مناسب للإنتاج

---

## 🔧 مقارنة الحلول

| الحل | السرعة | السهولة | الثبات | الإنتاج |
|------|---------|----------|---------|----------|
| LocalTunnel | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ❌ |
| Ngrok | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⚠️ |
| Vercel | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ |

---

## 📋 التوصيات

### للاختبار السريع:
**استخدم LocalTunnel** → `./start-with-tunnel.sh`

### للتطوير اليومي:
**استخدم Ngrok** → روابط أكثر استقراراً

### للنشر النهائي:
**استخدم Vercel** → إنتاج احترافي

---

## ⚙️ ملاحظات مهمة

### 1. تحديث الروابط في كل مكان
بعد الحصول على رابط عام، تأكد من تحديثه في:
- ✅ `.env.local` → `NEXT_PUBLIC_APP_URL`
- ✅ إعادة تشغيل المشروع
- ✅ مسح cache المتصفح

### 2. LocalTunnel - صفحة التحذير
عند استخدام localtunnel، ستظهر صفحة تحذير في أول زيارة:
```
This is a localtunnel service
[Click to Continue]
```
اضغط "Click to Continue" للمتابعة.

### 3. Ngrok - Free Tier Limits
النسخة المجانية من Ngrok:
- ✅ 1 عملية نشط في وقت واحد
- ✅ روابط عشوائية (تتغير كل مرة)
- ⚠️ حد أقصى 40 اتصال/دقيقة

### 4. Vercel - الأفضل للإنتاج
- ✅ مجاني للمشاريع الشخصية
- ✅ روابط ثابتة
- ✅ تحديث تلقائي
- ✅ أداء عالي

---

## 🐛 استكشاف الأخطاء

### خطأ: "Tunnel connection failed"
**الحل:**
```bash
# أوقف جميع العمليات
pkill -f "lt --port"
pkill -f "ngrok"
# أعد المحاولة
./start-with-tunnel.sh
```

### خطأ: "Port 3000 already in use"
**الحل:**
```bash
# ابحث عن العملية
lsof -i :3000
# أوقفها
kill -9 <PID>
```

### خطأ: "Invalid signature" من Bookeey
**السبب:** تم تغيير `NEXT_PUBLIC_APP_URL` بعد بدء السيرفر

**الحل:**
1. حدّث `.env.local`
2. أعد تشغيل السيرفر تماماً:
```bash
# أوقف السيرفر (Ctrl+C)
# امسح cache
rm -rf .next .turbo
# شغل من جديد
npm run dev
```

---

## 🎯 الخطوات الموصى بها (سريعة)

### للبدء الآن:

```bash
# 1. شغل السكريبت
./start-with-tunnel.sh

# 2. انسخ الرابط الذي يظهر، مثال:
# https://funny-cat-1234.loca.lt

# 3. افتح ملف .env.local وحدث السطر:
# NEXT_PUBLIC_APP_URL=https://funny-cat-1234.loca.lt

# 4. اضغط Ctrl+C لإيقاف السكريبت

# 5. شغل السكريبت مرة أخرى
./start-with-tunnel.sh

# 6. افتح الرابط في المتصفح
# اضغط "Click to Continue"

# 7. اختبر نظام الدفع!
```

---

## 📞 هل تحتاج مساعدة؟

إذا واجهت أي مشكلة:
1. تحقق من أن السيرفر يعمل: `curl http://localhost:3000`
2. تحقق من الـ logs: `tail -f /tmp/nextjs.log`
3. تحقق من الـ tunnel: `cat /tmp/tunnel.log`

---

**تم التحديث:** 2026-01-24
**الحالة:** جاهز للاستخدام ✅
