"use client";

import useSWR from "swr";
import { toast } from "sonner";
import { SummerSaleBanner } from "@/components/banners/summer-sale-banner";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function SummerSale() {
  const { data } = useSWR("/api/flags-for-client", fetcher);
  const show = data?.summerSale;

  if (!show) return null;

  return (
    <SummerSaleBanner
      onClick={() => {
        toast("End reached", {
          className: "my-classname",
          description:
            "The summer sale is not implemented in this template. Try adding to the cart instead.",
        });
      }}
    />
  );
}
