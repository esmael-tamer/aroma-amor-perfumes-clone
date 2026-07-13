'use client';

import { memo, useCallback } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { ShoppingCart, Star, Tag } from 'lucide-react';
import type { Product } from '@/lib/constants';
import { CURRENCY } from '@/lib/constants';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = memo(function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const isOutOfStock = product.stock === 0;
  const isLowStock = product.stock > 0 && product.stock < 30;

  const handleAddToCart = useCallback(() => {
    if (!isOutOfStock) {
      addToCart(product);
    }
  }, [addToCart, product, isOutOfStock]);

  return (
    <article
      className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-[#E8EAED] hover:border-[#D4CCC4] hover:-translate-y-3 hover:scale-[1.02]"
      aria-label={product.nameAr}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-[#E8EAED]">
        <Image
          src={product.image}
          alt={product.nameAr}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
            {product.badge}
          </span>
        )}

        {/* Discount Badge */}
        {product.discount && (
          <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
            <Tag className="w-3 h-3" aria-hidden="true" />
            خصم {product.discount}
          </span>
        )}

        {/* Out of Stock Overlay */}
        {isOutOfStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="bg-red-500 text-white px-6 py-3 rounded-full text-lg font-bold">
              نفذت الكمية
            </span>
          </div>
        )}

        {/* Quick Actions */}
        {!isOutOfStock && (
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity flex items-center justify-center">
            <Button 
              type="button"
              size="lg"
              onClick={handleAddToCart}
              className="bg-white text-[#2C2420] hover:bg-[#E8EAED] rounded-full px-8 font-bold shadow-xl"
              aria-label={`اشتري ${product.nameAr}`}
            >
              أضف للسلة 🛍️
            </Button>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-3">
        {/* Category */}
        <span className="inline-block bg-[#E8EAED] text-[#2C2420] px-3 py-1 rounded-full text-sm font-bold">
          {product.categoryAr}
        </span>

        {/* Name */}
        <h3 className="text-xl font-bold text-[#2C2420] line-clamp-2 min-h-[3.5rem]">
          {product.nameAr}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1" role="img" aria-label={`تقييم ${product.rating} من 5`}>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < Math.floor(product.rating)
                  ? 'fill-amber-400 text-amber-400'
                  : 'text-gray-300'
              }`}
              aria-hidden="true"
            />
          ))}
          <span className="text-sm text-[#4A5568] mr-2 font-medium">
            ({product.rating})
          </span>
        </div>

        {/* Stock Warning */}
        {isLowStock && (
          <p className="text-sm text-orange-600 font-semibold" role="alert">
            ⚠️ متبقي {product.stock} قطعة فقط
          </p>
        )}

        {/* Price */}
        <div className="flex items-center justify-between pt-3 border-t-2 border-[#E8EAED]">
          <div>
            <p className="text-3xl font-bold text-[#2C2420]">
              {product.price} {CURRENCY.symbol}
            </p>
            {product.originalPrice && (
              <p className="text-sm text-[#9B8F85] line-through font-medium">
                {product.originalPrice} {CURRENCY.symbol}
              </p>
            )}
          </div>
          
          <Tooltip>
            <TooltipTrigger asChild>
              {isOutOfStock ? (
                <span tabIndex={0} className="inline-block outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-full">
                  <Button
                    type="button"
                    size="icon"
                    disabled
                    className="bg-gradient-to-br from-[#2C2420] to-[#4A5568] text-white rounded-full w-14 h-14 shadow-lg opacity-50 cursor-not-allowed"
                    aria-label="نفذت الكمية"
                  >
                    <ShoppingCart className="w-6 h-6" aria-hidden="true" />
                  </Button>
                </span>
              ) : (
                <Button
                  type="button"
                  size="icon"
                  onClick={handleAddToCart}
                  className="bg-gradient-to-br from-[#2C2420] to-[#4A5568] hover:from-[#9B8F85] hover:to-[#2C2420] text-white rounded-full w-14 h-14 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-125 hover:rotate-12"
                  aria-label={`أضف ${product.nameAr} إلى السلة`}
                >
                  <ShoppingCart className="w-6 h-6" aria-hidden="true" />
                </Button>
              )}
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>{isOutOfStock ? 'نفذت الكمية' : 'أضف للسلة'}</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </article>
  );
});

export default ProductCard;
