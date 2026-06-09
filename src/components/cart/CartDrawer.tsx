'use client';

import { memo, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { X, Plus, Minus, ShoppingBag, Trash2, Sparkles, Gift, Truck } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { CURRENCY } from '@/lib/constants';

const CartDrawer = memo(function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice, totalItems, clearCart } = useCart();

  // منع التمرير عند فتح السلة
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  // إغلاق السلة عند ضغط زر Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsCartOpen(false);
    };

    if (isCartOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isCartOpen, setIsCartOpen]);

  if (!isCartOpen) return null;

  const itemSubtotal = (price: number, quantity: number) => (price * quantity).toFixed(3);

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 transition-all duration-300"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />
      
      {/* Drawer */}
      <div className="fixed top-0 left-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col animate-in slide-in-from-left duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b-2 border-[#E8EAED] bg-gradient-to-r from-[#2C2420] via-[#3d3530] to-[#2C2420]">
          <div className="flex items-center gap-3 text-white">
            <div className="relative">
              <ShoppingBag className="w-8 h-8" />
              <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-amber-400 animate-pulse" />
            </div>
            <div>
              <h2 className="text-xl font-bold">سلة التسوق</h2>
              <p className="text-xs text-white/70">{totalItems} منتج</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="text-white hover:bg-white/20 p-2.5 rounded-xl transition-all hover:rotate-90 duration-300"
            aria-label="إغلاق السلة"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Free Shipping Banner */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-2.5 px-4 flex items-center justify-center gap-2 text-sm font-medium">
          <Truck className="w-4 h-4" />
          <span>🎉 شحن مجاني على جميع الطلبات!</span>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-6 py-12">
              <div className="relative">
                <div className="text-8xl animate-bounce">🛒</div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-2 bg-gray-200 rounded-full blur-sm" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#2C2420]">السلة فارغة</h3>
                <p className="text-[#4A5568]">اكتشف مجموعتنا الفاخرة من العطور!</p>
              </div>
              <Button
                onClick={() => setIsCartOpen(false)}
                className="bg-gradient-to-r from-[#2C2420] to-[#4A5568] hover:from-[#4A5568] hover:to-[#2C2420] text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                تصفح المنتجات ✨
              </Button>
            </div>
          ) : (
            <>
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3 bg-gradient-to-br from-white to-[#F8F9FA] rounded-2xl p-3 border-2 border-[#E8EAED] hover:border-[#2C2420]/30 hover:shadow-lg transition-all duration-300 group"
                >
                  {/* Product Image */}
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-md group-hover:shadow-lg transition-shadow">
                    <Image
                      src={item.product.image}
                      alt={item.product.nameAr}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {item.product.originalPrice && (
                      <div className="absolute top-1 right-1 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                        خصم
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <h4 className="font-bold text-[#2C2420] text-sm line-clamp-1 group-hover:text-[#4A5568] transition-colors">
                      {item.product.nameAr}
                    </h4>
                    <p className="text-xs text-[#9B8F85]">{item.product.categoryAr}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-[#2C2420]">
                        {item.product.price} {CURRENCY.symbol}
                      </span>
                      {item.product.originalPrice && (
                        <span className="text-xs text-gray-400 line-through">
                          {item.product.originalPrice}
                        </span>
                      )}
                    </div>
                    {/* Item Subtotal */}
                    <p className="text-xs text-emerald-600 font-medium">
                      المجموع: {itemSubtotal(item.product.price, item.quantity)} {CURRENCY.symbol}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex flex-col items-end justify-between">
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-red-400 hover:text-red-600 hover:bg-red-50 p-1.5 rounded-lg transition-all hover:scale-110"
                      aria-label={`حذف ${item.product.nameAr} من السلة`}
                      title="حذف من السلة"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-1 bg-white rounded-full border-2 border-[#E8EAED] p-0.5 shadow-sm">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-red-50 hover:text-red-500 transition-colors"
                        aria-label={`تقليل كمية ${item.product.nameAr}`}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center font-bold text-sm">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        disabled={item.quantity >= item.product.stock}
                        className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-emerald-50 hover:text-emerald-500 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                        aria-label={`زيادة كمية ${item.product.nameAr}`}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t-2 border-[#E8EAED] p-5 space-y-4 bg-gradient-to-b from-[#F8F9FA] to-white">
            {/* Promo Banner */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-3 flex items-center gap-3">
              <Gift className="w-8 h-8 text-amber-500" />
              <div>
                <p className="text-sm font-bold text-amber-800">عرض خاص! 🎁</p>
                <p className="text-xs text-amber-600">احصل على عينة مجانية مع كل طلب</p>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-2 bg-white rounded-xl p-3 border border-[#E8EAED]">
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#4A5568]">عدد المنتجات:</span>
                <span className="font-medium text-[#2C2420]">{totalItems}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#4A5568]">الشحن:</span>
                <span className="font-medium text-emerald-600">مجاني ✓</span>
              </div>
              <div className="border-t border-dashed border-[#E8EAED] pt-2 mt-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-[#2C2420]">الإجمالي:</span>
                  <span className="text-xl font-bold text-[#2C2420]">{totalPrice.toFixed(3)} {CURRENCY.symbol}</span>
                </div>
              </div>
            </div>

            {/* Checkout Button */}
            <Link
              href="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="block w-full bg-gradient-to-r from-[#2C2420] to-[#4A5568] hover:from-[#4A5568] hover:to-[#2C2420] text-white py-4 rounded-2xl text-lg font-bold text-center shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              إتمام الطلب 🛒
            </Link>

            {/* Actions Row */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="flex-1 text-[#2C2420] hover:bg-[#E8EAED] py-2.5 rounded-xl transition-colors font-medium text-sm border-2 border-[#E8EAED]"
              >
                متابعة التسوق
              </button>
              <button
                type="button"
                onClick={clearCart}
                className="text-red-500 hover:bg-red-50 px-4 py-2.5 rounded-xl transition-colors text-sm font-medium border-2 border-red-100"
              >
                إفراغ 🗑️
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
});

export default CartDrawer;
