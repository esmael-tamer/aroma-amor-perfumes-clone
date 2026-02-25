'use client';

import { useState, memo } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { useOrders } from '@/context/OrdersContext';
import { Button } from '@/components/ui/button';
import { CURRENCY, GCC_COUNTRIES, COMPANY_INFO } from '@/lib/constants';
import { ArrowRight, Check, Truck, CreditCard, MapPin, Phone, User, Mail, MessageSquare, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

type PaymentMethod = 'cod' | 'knet' | 'card';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  country: string;
  city: string;
  area: string;
  block: string;
  street: string;
  building: string;
  floor: string;
  apartment: string;
  notes: string;
  paymentMethod: PaymentMethod;
}

const CheckoutPage = memo(function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const { addOrder } = useOrders();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    country: 'الكويت',
    city: '',
    area: '',
    block: '',
    street: '',
    building: '',
    floor: '',
    apartment: '',
    notes: '',
    paymentMethod: 'cod',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const shippingCost = 0; // شحن مجاني
  const finalTotal = totalPrice + shippingCost;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // مسح الخطأ عند الكتابة
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateStep1 = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'الاسم مطلوب';
    if (!formData.phone.trim()) newErrors.phone = 'رقم الهاتف مطلوب';
    if (formData.phone && !/^[\d\s+()-]+$/.test(formData.phone)) newErrors.phone = 'رقم هاتف غير صالح';
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'بريد إلكتروني غير صالح';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.country) newErrors.country = 'الدولة مطلوبة';
    if (!formData.city.trim()) newErrors.city = 'المدينة مطلوبة';
    if (!formData.area.trim()) newErrors.area = 'المنطقة مطلوبة';
    if (!formData.block.trim()) newErrors.block = 'القطعة مطلوبة';
    if (!formData.street.trim()) newErrors.street = 'الشارع مطلوب';
    if (!formData.building.trim()) newErrors.building = 'المبنى مطلوب';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const handleSubmitOrder = async () => {
    setIsSubmitting(true);
    
    // محاكاة إرسال الطلب
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // حفظ الطلب في النظام
    const orderNum = addOrder({
      customer: {
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email || undefined,
      },
      address: {
        country: formData.country,
        city: formData.city,
        area: formData.area,
        block: formData.block,
        street: formData.street,
        building: formData.building,
        floor: formData.floor || undefined,
        apartment: formData.apartment || undefined,
      },
      items: items.map(item => ({
        productId: item.product.id,
        productName: item.product.nameAr,
        quantity: item.quantity,
        price: item.product.price,
        image: item.product.image,
      })),
      totalPrice: finalTotal,
      paymentMethod: formData.paymentMethod,
      notes: formData.notes || undefined,
    });
    
    setOrderNumber(orderNum);
    
    // إرسال الطلب إلى واتساب
    const whatsappMessage = `
🛒 *طلب جديد - ${orderNum}*

👤 *معلومات العميل:*
الاسم: ${formData.fullName}
الهاتف: ${formData.phone}
${formData.email ? `البريد: ${formData.email}` : ''}

📍 *عنوان التوصيل:*
${formData.country} - ${formData.city}
المنطقة: ${formData.area}
قطعة: ${formData.block} - شارع: ${formData.street}
مبنى: ${formData.building}${formData.floor ? ` - طابق: ${formData.floor}` : ''}${formData.apartment ? ` - شقة: ${formData.apartment}` : ''}
${formData.notes ? `ملاحظات: ${formData.notes}` : ''}

🛍️ *المنتجات:*
${items.map(item => `• ${item.product.nameAr} × ${item.quantity} = ${(item.product.price * item.quantity).toFixed(3)} ${CURRENCY.symbol}`).join('\n')}

💰 *المجموع: ${finalTotal.toFixed(3)} ${CURRENCY.symbol}*
💳 طريقة الدفع: ${formData.paymentMethod === 'cod' ? 'الدفع عند الاستلام' : formData.paymentMethod === 'knet' ? 'كي نت' : 'بطاقة ائتمان'}
🚚 الشحن: مجاني
    `.trim();
    
    // فتح واتساب في تبويب جديد
    const whatsappUrl = `https://wa.me/96500000000?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitting(false);
    setOrderComplete(true);
    clearCart();
  };

  // صفحة الطلب المكتمل
  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#E8EAED] to-white flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-12 shadow-2xl text-center max-w-lg w-full space-y-6">
          <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xl">
            <Check className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-3xl font-bold text-[#2C2420]">تم استلام طلبك بنجاح! 🎉</h1>
          
          <div className="bg-[#F8F9FA] rounded-2xl p-6 space-y-3">
            <p className="text-[#4A5568]">رقم الطلب:</p>
            <p className="text-2xl font-bold text-[#2C2420]">{orderNumber}</p>
          </div>
          
          <p className="text-[#4A5568] leading-relaxed">
            سيتم التواصل معك قريباً لتأكيد الطلب وترتيب التوصيل.
            <br />
            شكراً لتسوقك معنا! 💜
          </p>
          
          <Link href="/">
            <Button className="bg-gradient-to-r from-[#2C2420] to-[#4A5568] text-white px-12 py-6 rounded-full text-lg font-bold hover:shadow-xl transition-all">
              العودة للرئيسية
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // سلة فارغة
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#E8EAED] to-white flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-12 shadow-2xl text-center max-w-lg w-full space-y-6">
          <div className="text-8xl">🛒</div>
          <h1 className="text-3xl font-bold text-[#2C2420]">السلة فارغة</h1>
          <p className="text-[#4A5568]">أضف بعض المنتجات للبدء في الطلب</p>
          <Link href="/">
            <Button className="bg-gradient-to-r from-[#2C2420] to-[#4A5568] text-white px-12 py-6 rounded-full text-lg font-bold hover:shadow-xl transition-all">
              تصفح المنتجات
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8EAED] to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#2C2420] to-[#4A5568] text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={COMPANY_INFO.logo}
                alt={COMPANY_INFO.name}
                width={50}
                height={50}
                className="rounded-full bg-white p-1"
              />
              <span className="text-xl font-bold">{COMPANY_INFO.name}</span>
            </Link>
            <Link href="/" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
              <ArrowRight className="w-5 h-5" />
              <span>العودة للمتجر</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center gap-4 mb-12">
          {[
            { num: 1, title: 'المعلومات', icon: User },
            { num: 2, title: 'العنوان', icon: MapPin },
            { num: 3, title: 'الدفع', icon: CreditCard },
          ].map((s, i) => (
            <div key={s.num} className="flex items-center">
              <div className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all ${
                step >= s.num 
                  ? 'bg-gradient-to-r from-[#2C2420] to-[#4A5568] text-white shadow-lg' 
                  : 'bg-white text-[#9B8F85] border-2 border-[#E8EAED]'
              }`}>
                <s.icon className="w-5 h-5" />
                <span className="font-bold hidden sm:inline">{s.title}</span>
                <span className="font-bold sm:hidden">{s.num}</span>
              </div>
              {i < 2 && (
                <div className={`w-12 h-1 mx-2 rounded-full transition-all ${
                  step > s.num ? 'bg-[#2C2420]' : 'bg-[#E8EAED]'
                }`} />
              )}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Step 1: Personal Info */}
            {step === 1 && (
              <div className="bg-white rounded-3xl p-8 shadow-xl space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2C2420] to-[#4A5568] rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#2C2420]">المعلومات الشخصية</h2>
                </div>

                <div className="grid gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[#2C2420] mb-2">
                      الاسم الكامل <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-4 rounded-xl border-2 ${errors.fullName ? 'border-red-500' : 'border-[#E8EAED]'} focus:border-[#2C2420] focus:outline-none transition-colors`}
                      placeholder="أدخل اسمك الكامل"
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#2C2420] mb-2">
                      رقم الهاتف <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-4 rounded-xl border-2 ${errors.phone ? 'border-red-500' : 'border-[#E8EAED]'} focus:border-[#2C2420] focus:outline-none transition-colors`}
                      placeholder="+965 XXXX XXXX"
                      dir="ltr"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#2C2420] mb-2">
                      البريد الإلكتروني (اختياري)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-4 rounded-xl border-2 ${errors.email ? 'border-red-500' : 'border-[#E8EAED]'} focus:border-[#2C2420] focus:outline-none transition-colors`}
                      placeholder="example@email.com"
                      dir="ltr"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Address */}
            {step === 2 && (
              <div className="bg-white rounded-3xl p-8 shadow-xl space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2C2420] to-[#4A5568] rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#2C2420]">عنوان التوصيل</h2>
                </div>

                <div className="grid gap-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="country-select" className="block text-sm font-bold text-[#2C2420] mb-2">
                        الدولة <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="country-select"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 rounded-xl border-2 border-[#E8EAED] focus:border-[#2C2420] focus:outline-none transition-colors bg-white"
                      >
                        {GCC_COUNTRIES.map(country => (
                          <option key={country.name} value={country.name}>
                            {country.flag} {country.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#2C2420] mb-2">
                        المدينة <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-4 rounded-xl border-2 ${errors.city ? 'border-red-500' : 'border-[#E8EAED]'} focus:border-[#2C2420] focus:outline-none transition-colors`}
                        placeholder="مثال: مدينة الكويت"
                      />
                      {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#2C2420] mb-2">
                      المنطقة <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="area"
                      value={formData.area}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-4 rounded-xl border-2 ${errors.area ? 'border-red-500' : 'border-[#E8EAED]'} focus:border-[#2C2420] focus:outline-none transition-colors`}
                      placeholder="مثال: السالمية"
                    />
                    {errors.area && <p className="text-red-500 text-sm mt-1">{errors.area}</p>}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-[#2C2420] mb-2">
                        القطعة <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="block"
                        value={formData.block}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-4 rounded-xl border-2 ${errors.block ? 'border-red-500' : 'border-[#E8EAED]'} focus:border-[#2C2420] focus:outline-none transition-colors`}
                        placeholder="رقم القطعة"
                      />
                      {errors.block && <p className="text-red-500 text-sm mt-1">{errors.block}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#2C2420] mb-2">
                        الشارع <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="street"
                        value={formData.street}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-4 rounded-xl border-2 ${errors.street ? 'border-red-500' : 'border-[#E8EAED]'} focus:border-[#2C2420] focus:outline-none transition-colors`}
                        placeholder="اسم أو رقم الشارع"
                      />
                      {errors.street && <p className="text-red-500 text-sm mt-1">{errors.street}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-[#2C2420] mb-2">
                        المبنى <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="building"
                        value={formData.building}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-4 rounded-xl border-2 ${errors.building ? 'border-red-500' : 'border-[#E8EAED]'} focus:border-[#2C2420] focus:outline-none transition-colors`}
                        placeholder="رقم المبنى"
                      />
                      {errors.building && <p className="text-red-500 text-sm mt-1">{errors.building}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#2C2420] mb-2">
                        الطابق
                      </label>
                      <input
                        type="text"
                        name="floor"
                        value={formData.floor}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 rounded-xl border-2 border-[#E8EAED] focus:border-[#2C2420] focus:outline-none transition-colors"
                        placeholder="اختياري"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#2C2420] mb-2">
                        الشقة
                      </label>
                      <input
                        type="text"
                        name="apartment"
                        value={formData.apartment}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 rounded-xl border-2 border-[#E8EAED] focus:border-[#2C2420] focus:outline-none transition-colors"
                        placeholder="اختياري"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#2C2420] mb-2">
                      ملاحظات إضافية
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-4 rounded-xl border-2 border-[#E8EAED] focus:border-[#2C2420] focus:outline-none transition-colors resize-none"
                      placeholder="أي ملاحظات خاصة بالتوصيل..."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {step === 3 && (
              <div className="bg-white rounded-3xl p-8 shadow-xl space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2C2420] to-[#4A5568] rounded-full flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#2C2420]">طريقة الدفع</h2>
                </div>

                <div className="space-y-4">
                  {[
                    { id: 'cod', title: 'الدفع عند الاستلام', icon: '💵', desc: 'ادفع نقداً عند استلام طلبك' },
                    { id: 'knet', title: 'كي نت', icon: '💳', desc: 'الدفع الإلكتروني عبر كي نت' },
                    { id: 'card', title: 'بطاقة ائتمان', icon: '💳', desc: 'Visa / Mastercard' },
                  ].map(method => (
                    <label
                      key={method.id}
                      className={`flex items-center gap-4 p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                        formData.paymentMethod === method.id
                          ? 'border-[#2C2420] bg-[#F8F9FA] shadow-lg'
                          : 'border-[#E8EAED] hover:border-[#D4CCC4]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.id}
                        checked={formData.paymentMethod === method.id}
                        onChange={handleInputChange}
                        className="w-5 h-5 accent-[#2C2420]"
                      />
                      <span className="text-3xl">{method.icon}</span>
                      <div>
                        <p className="font-bold text-[#2C2420]">{method.title}</p>
                        <p className="text-sm text-[#9B8F85]">{method.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              {step > 1 && (
                <Button
                  onClick={() => setStep(prev => (prev - 1) as 1 | 2)}
                  variant="outline"
                  className="flex-1 py-6 rounded-full text-lg font-bold border-2 border-[#2C2420] text-[#2C2420] hover:bg-[#2C2420] hover:text-white"
                >
                  السابق
                </Button>
              )}
              {step < 3 ? (
                <Button
                  onClick={handleNextStep}
                  className="flex-1 bg-gradient-to-r from-[#2C2420] to-[#4A5568] text-white py-6 rounded-full text-lg font-bold hover:shadow-xl transition-all"
                >
                  التالي
                </Button>
              ) : (
                <Button
                  onClick={handleSubmitOrder}
                  loading={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-6 rounded-full text-lg font-bold hover:shadow-xl transition-all disabled:opacity-70"
                >
                  {isSubmitting ? 'جاري إرسال الطلب...' : 'تأكيد الطلب ✓'}
                </Button>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 shadow-xl sticky top-4 space-y-6">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-[#2C2420]" />
                <h3 className="text-xl font-bold text-[#2C2420]">ملخص الطلب</h3>
              </div>

              {/* Items */}
              <div className="space-y-4 max-h-64 overflow-y-auto">
                {items.map(item => (
                  <div key={item.product.id} className="flex gap-3">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.product.image}
                        alt={item.product.nameAr}
                        fill
                        className="object-cover"
                      />
                      <span className="absolute -top-1 -right-1 bg-[#2C2420] text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-[#2C2420] text-sm line-clamp-1">{item.product.nameAr}</p>
                      <p className="text-sm text-[#9B8F85]">{item.product.price} × {item.quantity}</p>
                    </div>
                    <p className="font-bold text-[#2C2420]">
                      {(item.product.price * item.quantity).toFixed(3)} {CURRENCY.symbol}
                    </p>
                  </div>
                ))}
              </div>

              <hr className="border-[#E8EAED]" />

              {/* Totals */}
              <div className="space-y-3">
                <div className="flex justify-between text-[#4A5568]">
                  <span>المجموع الفرعي:</span>
                  <span>{totalPrice.toFixed(3)} {CURRENCY.symbol}</span>
                </div>
                <div className="flex justify-between text-emerald-600">
                  <span>الشحن:</span>
                  <span>مجاني 🎉</span>
                </div>
                <hr className="border-[#E8EAED]" />
                <div className="flex justify-between text-xl font-bold text-[#2C2420]">
                  <span>الإجمالي:</span>
                  <span>{finalTotal.toFixed(3)} {CURRENCY.symbol}</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-[#F8F9FA] rounded-2xl p-4 space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Check className="w-5 h-5 text-emerald-500" />
                  <span className="text-[#4A5568]">منتجات أصلية 100%</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Truck className="w-5 h-5 text-emerald-500" />
                  <span className="text-[#4A5568]">شحن مجاني لجميع دول الخليج</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-5 h-5 text-emerald-500" />
                  <span className="text-[#4A5568]">دعم على مدار الساعة</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CheckoutPage;
