import CheckoutPage from "@/components/checkout/CheckoutPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "إتمام الطلب",
  description: "أكمل طلبك واستمتع بالشحن المجاني لجميع دول الخليج",
};

export default function Checkout() {
  return <CheckoutPage />;
}
