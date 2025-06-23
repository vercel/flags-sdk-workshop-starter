import { flag } from "flags/next";
import { identify, type EvaluationContext } from "./lib/identify";

export const showSummerBannerFlag = flag<boolean, EvaluationContext>({
  key: "summer-sale",
  description: "Shows a bright yellow banner for a 20% discount",
  defaultValue: false,
  identify,
  decide({ entities }) {
    return false;
  },
});

export const showFreeDeliveryBannerFlag = flag<boolean, EvaluationContext>({
  key: "free-delivery",
  description: "Show a black free delivery banner at the top of the page",
  defaultValue: false,
  identify,
  decide({ entities }) {
    return false;
  },
});

export const productFlags = [
  // showFreeDeliveryBannerFlag,
  // showSummerBannerFlag,
] as const;
