"use client";

import { FreeDeliveryBanner } from "@/components/banners/free-delivery-banner";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function FreeDelivery() {
  const { data } = useSWR("/api/flags-for-client", fetcher);
  const show = data?.freeDelivery;

  if (!show) return null;

  return <FreeDeliveryBanner />;
}
