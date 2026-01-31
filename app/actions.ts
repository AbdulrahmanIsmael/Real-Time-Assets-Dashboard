"use server";

import { revalidateTag } from "next/cache";

export const revalidateAssetsTag = async () => {
  revalidateTag("assets", "max");
};
