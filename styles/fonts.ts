import { Montserrat } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";

export const montserrat: NextFont = Montserrat({
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin", "cyrillic"],
});
