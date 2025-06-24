import { flag } from "flags/next";

export const enableSummerSale = flag<boolean, { browser: "Safari" | "Chrome" }>(
  {
    key: "summer-sale",
    description: "Shows a bright yellow banner for a 20% discount",
    defaultValue: false,
    identify({ headers, cookies }) {
      const ua = headers.get("user-agent") || "";
      const isSafari = ua.includes("Safari") && !ua.includes("Chrome");
      return { browser: isSafari ? "Safari" : "Chrome" };
    },
    decide({ entities }) {
      return entities?.browser === "Safari";
    },
  }
);

export const productFlags = [enableSummerSale] as const;
