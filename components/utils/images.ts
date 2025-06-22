import blue from "@/public/images/product/shirt-blue.gif";
import black from "@/public/images/product/shirt-black.gif";
import white from "@/public/images/product/shirt-white.gif";
import type { StaticImageData } from "next/image";

export const images = [black, white, blue];

export const colorToImage: Record<string, StaticImageData> = {
  Black: black,
  White: white,
  Blue: blue,
};
