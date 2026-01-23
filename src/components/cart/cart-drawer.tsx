'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/contexts/cart-context';
import { Button } from '@/components/ui/button';
import { X, ShoppingCart, Minus, Plus, Trash2 } from 'lucide-react';

export function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();

  const itemCount = getCartCount();
  const total = getCartTotal();

  return (
    <>
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="relative p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
      >
        <ShoppingCart className="w-6 h-6 text-[#2C2420]" />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b-2 border-[#E8EAED]">
            <h2 className="text-2xl font-bold text-[#2C2420]">
              سلة التسوق ({itemCount})
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-[#E8EAED] rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingCart className="w-24 h-24 text-[#D4CCC4] mb-4" />
                <h3 className="text-xl font-bold text-[#2C2420] mb-2">
                  السلة فارغة
                </h3>
                <p className="text-[#4A5568] mb-6">
                  ابدأ بإضافة منتجات إلى سلة التسوق
                </p>
                <Button
                  onClick={() => setIsOpen(false)}
                  className="bg-[#2C2420] text-white hover:bg-[#4A5568]"
                >
                  تصفح المنتجات
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 bg-[#E8EAED]/30 rounded-2xl border-2 border-[#E8EAED]"
                  >
                    {/* Product Image */}
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-white">
                      <Image
                        src={item.image}
                        alt={item.nameAr}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-[#2C2420] mb-1 truncate">
                        {item.nameAr}
                      </h3>
                      <p className="text-sm text-[#4A5568] mb-2">
                        {item.categoryAr}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-white rounded-full p-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-[#E8EAED] rounded-full transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-bold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            disabled={item.quantity >= item.stock}
                            className="p-1 hover:bg-[#E8EAED] rounded-full transition-colors disabled:opacity-50"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-left">
                      <div className="font-bold text-[#2C2420]">
                        {(item.price * item.quantity).toFixed(3)} د.ك
                      </div>
                      <div className="text-sm text-[#9B8F85]">
                        {item.price.toFixed(3)} د.ك
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t-2 border-[#E8EAED] p-6 space-y-4">
              {/* Total */}
              <div className="flex items-center justify-between text-lg">
                <span className="font-semibold text-[#4A5568]">المجموع:</span>
                <span className="text-2xl font-bold text-[#2C2420]">
                  {total.toFixed(3)} د.ك
                </span>
              </div>

              {/* Checkout Button */}
              <Link href="/checkout" onClick={() => setIsOpen(false)}>
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-br from-[#2C2420] to-[#4A5568] hover:from-[#4A5568] hover:to-[#2C2420] text-white rounded-full py-6 text-lg font-bold shadow-xl hover:shadow-2xl transition-all"
                >
                  إتمام الطلب
                </Button>
              </Link>

              {/* Continue Shopping */}
              <Button
                variant="outline"
                size="lg"
                onClick={() => setIsOpen(false)}
                className="w-full border-2 border-[#2C2420] text-[#2C2420] hover:bg-[#E8EAED] rounded-full py-6 text-lg font-bold"
              >
                متابعة التسوق
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
