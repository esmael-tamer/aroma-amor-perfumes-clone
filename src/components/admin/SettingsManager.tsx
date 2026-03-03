'use client';

import { useState } from 'react';
import { useSiteSettings } from '@/context/SiteSettingsContext';
import { 
  Save,
  Store,
  Phone,
  Mail,
  MapPin,
  Globe,
  Clock,
  DollarSign,
  Instagram,
  Twitter,
  Facebook
} from 'lucide-react';

export default function SettingsManager() {
  const { settings, updateSettings } = useSiteSettings();
  const [formData, setFormData] = useState(settings);
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    updateSettings(formData);
    setIsSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">إعدادات الموقع</h1>
          <p className="text-gray-500">تخصيص معلومات وإعدادات الموقع</p>
        </div>
        {saved && (
          <div className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-lg font-medium">
            ✓ تم حفظ التغييرات بنجاح
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* معلومات أساسية */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Store className="w-5 h-5" />
            معلومات المتجر
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="siteName" className="block text-sm font-medium text-gray-700 mb-1">اسم المتجر</label>
              <input
                id="siteName"
                type="text"
                value={formData.siteName}
                onChange={(e) => setFormData({ ...formData, siteName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="siteSlogan" className="block text-sm font-medium text-gray-700 mb-1">الشعار</label>
              <input
                id="siteSlogan"
                type="text"
                value={formData.siteSlogan}
                onChange={(e) => setFormData({ ...formData, siteSlogan: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="aboutText" className="block text-sm font-medium text-gray-700 mb-1">نبذة عن المتجر</label>
              <textarea
                id="aboutText"
                value={formData.aboutText}
                onChange={(e) => setFormData({ ...formData, aboutText: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="logo" className="block text-sm font-medium text-gray-700 mb-1">رابط اللوجو</label>
              <input
                id="logo"
                type="url"
                value={formData.logo}
                onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* معلومات الاتصال */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Phone className="w-5 h-5" />
            معلومات الاتصال
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف</label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">رقم الواتساب</label>
              <input
                id="whatsapp"
                type="tel"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                placeholder="96500000000"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">العنوان</label>
              <input
                id="address"
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="workingHours" className="block text-sm font-medium text-gray-700 mb-1">ساعات العمل</label>
              <input
                id="workingHours"
                type="text"
                value={formData.workingHours}
                onChange={(e) => setFormData({ ...formData, workingHours: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* العملة والشحن */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5" />
            العملة والشحن
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-1">رمز العملة</label>
              <input
                id="currency"
                type="text"
                value={formData.currency}
                onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                placeholder="KWD"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="currencySymbol" className="block text-sm font-medium text-gray-700 mb-1">رمز العملة للعرض</label>
              <input
                id="currencySymbol"
                type="text"
                value={formData.currencySymbol}
                onChange={(e) => setFormData({ ...formData, currencySymbol: e.target.value })}
                placeholder="د.ك"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="freeShipping" className="block text-sm font-medium text-gray-700 mb-1">حد الشحن المجاني</label>
              <input
                id="freeShipping"
                type="number"
                value={formData.freeShippingThreshold}
                onChange={(e) => setFormData({ ...formData, freeShippingThreshold: parseFloat(e.target.value) })}
                placeholder="0 = مجاني دائماً"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* وسائل التواصل */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5" />
            وسائل التواصل الاجتماعي
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                <Instagram className="w-4 h-4" /> Instagram
              </label>
              <input
                id="instagram"
                type="url"
                value={formData.socialMedia.instagram}
                onChange={(e) => setFormData({ 
                  ...formData, 
                  socialMedia: { ...formData.socialMedia, instagram: e.target.value }
                })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="twitter" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                <Twitter className="w-4 h-4" /> Twitter
              </label>
              <input
                id="twitter"
                type="url"
                value={formData.socialMedia.twitter}
                onChange={(e) => setFormData({ 
                  ...formData, 
                  socialMedia: { ...formData.socialMedia, twitter: e.target.value }
                })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="facebook" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                <Facebook className="w-4 h-4" /> Facebook
              </label>
              <input
                id="facebook"
                type="url"
                value={formData.socialMedia.facebook}
                onChange={(e) => setFormData({ 
                  ...formData, 
                  socialMedia: { ...formData.socialMedia, facebook: e.target.value }
                })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="tiktok" className="block text-sm font-medium text-gray-700 mb-1">TikTok</label>
              <input
                id="tiktok"
                type="url"
                value={formData.socialMedia.tiktok}
                onChange={(e) => setFormData({ 
                  ...formData, 
                  socialMedia: { ...formData.socialMedia, tiktok: e.target.value }
                })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* زر الحفظ */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSaving}
            className="flex items-center gap-2 bg-[#2C2420] hover:bg-[#4A5568] text-white px-8 py-3 rounded-xl transition-colors disabled:opacity-50"
            aria-label={isSaving ? 'جاري الحفظ...' : 'حفظ التغييرات'}
          >
            <Save className="w-5 h-5" />
            {isSaving ? 'جاري الحفظ...' : 'حفظ التغييرات'}
          </button>
        </div>
      </form>
    </div>
  );
}
