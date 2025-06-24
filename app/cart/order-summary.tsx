import { OrderSummarySection } from "@/components/shopping-cart/order-summary-section";
import { ProceedToCheckout } from "./proceed-to-checkout";

export async function OrderSummary() {
  // TODO this could be a feature flag
  const proceedToCheckoutColor = "blue";

  return (
    <OrderSummarySection
      proceedToCheckout={<ProceedToCheckout color={proceedToCheckoutColor} />}
    />
  );
}
