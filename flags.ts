import { flag } from "flags/next";
import { identify, type EvaluationContext } from "./lib/identify";
import { bucket } from "./lib/bucket";

export const showSummerBannerFlag = flag<boolean, EvaluationContext>({
  key: "summer-sale",
  description: "Shows a bright yellow banner for a 20% discount",
  defaultValue: false,
  identify,
  decide({ entities }) {
    if (!entities || !entities.stableId) return this.defaultValue as boolean;
    return bucket(`${this.key}/${entities.stableId}`) === 1;
  },
});

export const showFreeDeliveryBannerFlag = flag<boolean, EvaluationContext>({
  key: "free-delivery",
  description: "Show a black free delivery banner at the top of the page",
  defaultValue: false,
  identify,
  decide({ entities }) {
    if (!entities || !entities.stableId) return this.defaultValue as boolean;
    return bucket(`${this.key}/${entities.stableId}`) === 1;
  },
});

export const delayFlag = flag<number>({
  key: "delay",
  defaultValue: 0,
  description:
    "A flag for debugging and demo purposes which delays the data loading",
  options: [
    { value: 0, label: "No delay" },
    { value: 200, label: "200ms" },
    { value: 1000, label: "1s" },
    { value: 3000, label: "3s" },
    { value: 10_000, label: "10s" },
  ],
  decide() {
    return this.defaultValue as number;
  },
});

export const productFlags = [
  // showFreeDeliveryBannerFlag,
  // showSummerBannerFlag,
] as const;
