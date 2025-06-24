import { OrderSummary } from "@/app/cart/order-summary";
import { Main } from "@/components/main";
import { ShoppingCart } from "@/components/shopping-cart/shopping-cart";

export default function CartPage() {
  return (
    <Main>
      <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
        <ShoppingCart />
        <OrderSummary />
      </div>
    </Main>
  );
}
