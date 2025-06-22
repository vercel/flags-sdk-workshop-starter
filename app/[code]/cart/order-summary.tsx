import { OrderSummarySection } from "@/components/shopping-cart/order-summary-section";
import { ProceedToCheckout } from "./proceed-to-checkout";

export async function OrderSummary({
  showSummerBanner,
  freeDelivery,
}: {
  showSummerBanner: boolean;
  freeDelivery: boolean;
}) {
  // TODO this could be a feature flag
  const proceedToCheckoutColor = "blue";

  return (
    <OrderSummarySection
      showSummerBanner={showSummerBanner}
      freeDelivery={freeDelivery}
      proceedToCheckout={<ProceedToCheckout color={proceedToCheckoutColor} />}
    />
  );
}
