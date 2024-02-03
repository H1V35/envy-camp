export const STATUS = {
  ALL: "all",
  AVAILABLE: "available",
  NOT_AVAILABLE: "notAvailable",
} as const;

export type Status = (typeof STATUS)[keyof typeof STATUS];

export const SORT_BY = {
  NONE: "none",
  NAME_ASC: "nameAsc",
  NAME_DESC: "nameDesc",
  PRICE_ASC: "priceAsc",
  PRICE_DESC: "priceDesc",
} as const;

export type SortBy = (typeof SORT_BY)[keyof typeof SORT_BY];
