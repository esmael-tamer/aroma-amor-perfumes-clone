import type { Metadata, Viewport } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { SEO_CONFIG, COMPANY_INFO } from "@/lib/constants";
import { CartProvider } from "@/context/CartContext";
import { OrdersProvider } from "@/context/OrdersContext";
import { SiteSettingsProvider } from "@/context/SiteSettingsContext";
import CartDrawer from "@/components/cart/CartDrawer";

// Metadata للـ SEO
export const metadata: Metadata = {
  title: {
    default: SEO_CONFIG.title,
    template: `%s | ${COMPANY_INFO.name}`,
  },
  description: SEO_CONFIG.description,
  keywords: [...SEO_CONFIG.keywords],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ar_KW',
    siteName: SEO_CONFIG.openGraph.siteName,
    title: SEO_CONFIG.title,
    description: SEO_CONFIG.description,
    images: [{ url: COMPANY_INFO.logo, alt: COMPANY_INFO.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_CONFIG.title,
    description: SEO_CONFIG.description,
    images: [COMPANY_INFO.logo],
  },
  icons: {
    icon: COMPANY_INFO.logo,
    apple: COMPANY_INFO.logo,
  },
};

// Viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#2C2420',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:top-4 focus:right-4 focus:bg-primary focus:text-primary-foreground rounded-md shadow-md">
          تخطي إلى المحتوى الرئيسي
        </a>
        <SiteSettingsProvider>
          <OrdersProvider>
            <CartProvider>
              <ErrorReporter />
              <Script
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
                strategy="afterInteractive"
                data-target-origin="*"
                data-message-type="ROUTE_CHANGE"
                data-include-search-params="true"
                data-only-in-iframe="true"
                data-debug="true"
                data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
              />
              <main id="main-content" tabIndex={-1} className="outline-none">
                {children}
              </main>
              <CartDrawer />
              <VisualEditsMessenger />
            </CartProvider>
          </OrdersProvider>
        </SiteSettingsProvider>
      </body>
    </html>
  );
}
