'use client';

import { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw, ArrowLeft, Check } from 'lucide-react';
import { getProductById, getProductsByCategory } from '@/lib/products';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: PageProps) {
  const { id } = use(params);
  const router = useRouter();
  const product = getProductById(parseInt(id));
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  if (!product) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#2C2420] mb-4">المنتج غير موجود</h1>
            <Link href="/">
              <Button className="bg-[#2C2420] hover:bg-[#2C2420]/90">
                العودة للرئيسية
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const relatedProducts = getProductsByCategory(product.category).filter(p => p.id !== product.id).slice(0, 4);
  const productImages = product.images || [product.image];
  const savings = product.originalPrice ? product.originalPrice - product.price : 0;

  const handleBuyNow = async () => {
    setIsLoading(true);

    try {
      // Create payment link
      const response = await fetch('/api/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: product.id,
          productName: product.nameAr,
          price: product.price,
          quantity: 1,
        }),
      });

      const data = await response.json();

      if (data.paymentUrl) {
        // Redirect to payment page
        window.location.href = data.paymentUrl;
      } else {
        alert('حدث خطأ في إنشاء رابط الدفع');
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('حدث خطأ في الاتصال بخادم الدفع');
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-[#E8EAED] to-white py-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link href="/#products">
            <Button variant="outline" className="mb-6 border-2 border-[#2C2420] text-[#2C2420] hover:bg-[#2C2420] hover:text-white">
              <ArrowLeft className="w-4 h-4 ml-2" />
              العودة للمنتجات
            </Button>
          </Link>

          {/* Product Main Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Images Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-[#D4CCC4]">
                <Image
                  src={productImages[selectedImageIndex]}
                  alt={product.nameAr}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Badges */}
                {product.badge && (
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-xl z-10">
                    {product.badge}
                  </div>
                )}

                {product.discount && (
                  <div className="absolute top-6 left-6 bg-red-500 text-white px-5 py-2 rounded-full text-base font-bold shadow-xl z-10">
                    خصم {product.discount}
                  </div>
                )}

                {product.stock === 0 && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
                    <div className="bg-red-500 text-white px-8 py-4 rounded-full text-2xl font-bold">
                      نفذت الكمية
                    </div>
                  </div>
                )}
              </div>

              {/* Thumbnail Images */}
              {productImages.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {productImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`relative aspect-square rounded-xl overflow-hidden border-4 transition-all ${
                        selectedImageIndex === index
                          ? 'border-[#2C2420] scale-105 shadow-lg'
                          : 'border-[#D4CCC4] hover:border-[#9B8F85]'
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.nameAr} - ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Category */}
              <div className="inline-block bg-[#2C2420] text-white px-5 py-2 rounded-full text-sm font-bold">
                {product.categoryAr}
              </div>

              {/* Product Name */}
              <h1 className="text-5xl font-bold text-[#2C2420] leading-tight">
                {product.nameAr}
              </h1>
              <p className="text-2xl text-[#4A5568] font-medium">
                {product.name}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-7 h-7 ${
                        i < Math.floor(product.rating)
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xl text-[#4A5568] font-bold">
                  ({product.rating} من 5)
                </span>
              </div>

              {/* Price */}
              <div className="bg-gradient-to-br from-[#D4CCC4]/30 to-[#E8EAED]/50 rounded-3xl p-8 space-y-4">
                <div className="flex items-baseline gap-4">
                  <span className="text-6xl font-bold text-[#2C2420]">
                    {product.price} د.ك
                  </span>
                  {product.originalPrice && (
                    <span className="text-3xl text-[#9B8F85] line-through font-medium">
                      {product.originalPrice} د.ك
                    </span>
                  )}
                </div>

                {savings > 0 && (
                  <div className="flex items-center gap-3 text-green-600">
                    <Check className="w-6 h-6" />
                    <span className="text-xl font-bold">
                      توفير {savings} د.ك ({product.discount})
                    </span>
                  </div>
                )}

                {/* Stock Info */}
                {product.stock > 0 && product.stock < 30 && (
                  <div className="text-lg text-orange-600 font-bold">
                    ⚠️ متبقي {product.stock} قطعة فقط - اطلب الآن!
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <Button
                  size="lg"
                  disabled={product.stock === 0 || isLoading}
                  onClick={handleBuyNow}
                  className="w-full bg-gradient-to-r from-[#2C2420] to-[#4A5568] hover:from-[#4A5568] hover:to-[#2C2420] text-white py-8 text-2xl rounded-2xl shadow-xl hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    'جاري التحويل للدفع...'
                  ) : product.stock === 0 ? (
                    'نفذت الكمية'
                  ) : (
                    <>
                      <ShoppingCart className="w-7 h-7 ml-3" />
                      اشتري الآن 🛍️
                    </>
                  )}
                </Button>

                <div className="grid grid-cols-2 gap-4">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#2C2420] text-[#2C2420] hover:bg-[#2C2420] hover:text-white py-4 text-lg rounded-xl transition-all"
                  >
                    <Heart className="w-5 h-5 ml-2" />
                    المفضلة
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#2C2420] text-[#2C2420] hover:bg-[#2C2420] hover:text-white py-4 text-lg rounded-xl transition-all"
                  >
                    <Share2 className="w-5 h-5 ml-2" />
                    مشاركة
                  </Button>
                </div>
              </div>

              {/* Features Icons */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <Truck className="w-8 h-8 mx-auto mb-2 text-[#2C2420]" />
                  <p className="text-sm font-bold text-[#2C2420]">توصيل مجاني</p>
                  <p className="text-xs text-[#9B8F85]">لجميع دول الخليج</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-[#2C2420]" />
                  <p className="text-sm font-bold text-[#2C2420]">أصلي 100%</p>
                  <p className="text-xs text-[#9B8F85]">منتج أصلي مضمون</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <RotateCcw className="w-8 h-8 mx-auto mb-2 text-[#2C2420]" />
                  <p className="text-sm font-bold text-[#2C2420]">استرجاع سهل</p>
                  <p className="text-xs text-[#9B8F85]">خلال 14 يوم</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Description & Features */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Description */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-[#2C2420] mb-6 border-b-4 border-[#D4CCC4] pb-4">
                📝 وصف المنتج
              </h2>
              <p className="text-xl text-[#4A5568] leading-relaxed mb-4">
                {product.descriptionAr}
              </p>
              <p className="text-lg text-[#9B8F85] leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-[#2C2420] mb-6 border-b-4 border-[#D4CCC4] pb-4">
                ✨ المميزات
              </h2>
              <ul className="space-y-4">
                {product.featuresAr?.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-[#2C2420]">{feature}</p>
                      {product.features?.[index] && (
                        <p className="text-sm text-[#9B8F85]">{product.features[index]}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-4xl font-bold text-[#2C2420] mb-8 text-center">
                منتجات مشابهة من نفس الفئة 🌸
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {relatedProducts.map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    href={`/product/${relatedProduct.id}`}
                    className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#E8EAED] hover:border-[#D4CCC4] hover:-translate-y-2"
                  >
                    <div className="relative aspect-square overflow-hidden bg-[#E8EAED]">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.nameAr}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[#2C2420] line-clamp-2 mb-2">
                        {relatedProduct.nameAr}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-[#2C2420]">
                          {relatedProduct.price} د.ك
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="text-sm text-[#4A5568] font-medium">
                            {relatedProduct.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
