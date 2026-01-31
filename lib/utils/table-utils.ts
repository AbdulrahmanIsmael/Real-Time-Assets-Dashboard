import { I_Asset, I_AssetsState } from "@/types/data-types";

export const sortAssets = (
  assets: I_AssetsState,
  sort?: string,
  order?: string,
) => {
  const assetsData = [...assets.assets];

  if (sort && order) {
    if (order === "ascending") {
      assetsData.sort(
        (a: I_Asset, b: I_Asset) =>
          Number(a[sort as keyof I_Asset]) - Number(b[sort as keyof I_Asset]),
      );
    } else if (order === "descending") {
      assetsData.sort(
        (a: I_Asset, b: I_Asset) =>
          Number(b[sort as keyof I_Asset]) - Number(a[sort as keyof I_Asset]),
      );
    }
  }

  return assetsData;
};

export const getKeyNameCapitalized = (key: string) =>
  key[0].toLowerCase() + key.slice(1);

export const getAssetValue = (value: string | number) => {
  const dateRegex = /(\d{2}[-.\/]\d{2}[-.\/]\d{4})/;
  if (typeof value === "number" && value.toString().length >= 6) {
    return new Intl.NumberFormat("en-US", {
      notation: "compact",
      currencyDisplay: "symbol",
      maximumFractionDigits: 1,
    }).format(value as number);
  } else if (typeof value === "number" && value.toString().length < 6) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value as number);
  } else if (typeof value === "string" && value.match(dateRegex)) {
    return new Date(value as string).toDateString();
  } else {
    return value;
  }
};
