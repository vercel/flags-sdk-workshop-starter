import { ImageGallery } from "@/components/image-gallery";
import { ProductDetails } from "@/components/product-detail-page/product-details";
import { ProductHeader } from "@/components/product-detail-page/product-header";
import { AddToCart } from "@/app/[code]/add-to-cart";
import { ColorPicker } from "@/components/product-detail-page/color-picker";
import { SizePicker } from "@/components/product-detail-page/size-picker";
import { ProductDetailPageProvider } from "@/components/utils/product-detail-page-context";
import { Main } from "@/components/main";
import { enableSummerSale, productFlags } from "@/flags";
import { SummerSaleBanner } from "@/components/banners/summer-sale-banner";
import { generatePermutations } from "flags/next";

export async function generateStaticParams() {
  const codes = await generatePermutations(productFlags);
  return codes.map((code) => ({ code }));
}

export default async function Page(props: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await props.params;
  const summerBanner = await enableSummerSale(code, productFlags);
  return (
    <ProductDetailPageProvider>
      {summerBanner ? <SummerSaleBanner /> : null}
      <Main>
        <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
          <ProductHeader />
          <ImageGallery />

          <div className="mt-8 lg:col-span-5">
            <ColorPicker />
            <SizePicker />
            <AddToCart />
            <ProductDetails />
          </div>
        </div>
      </Main>
    </ProductDetailPageProvider>
  );
}
