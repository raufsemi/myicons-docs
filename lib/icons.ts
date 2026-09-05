import {
  DuitNowSquareV1,
  DuitNowSquareV2,
  DuitNowSquareV3,
  DuitNowSquareV4,
  TngCirle,
  TngSquare,
} from "@raufsemi/myicons";

export const icons = [
  {
    name: "DuitNow Square V1",
    slug: "duitnow-square-v1",
    category: "Payment",
    component: DuitNowSquareV1,
  },
  {
    name: "DuitNow Square V2",
    slug: "duitnow-square-v2",
    category: "Payment",
    component: DuitNowSquareV2,
  },
  {
    name: "DuitNow Square V3",
    slug: "duitnow-square-v3",
    category: "Payment",
    component: DuitNowSquareV3,
  },
  {
    name: "DuitNow Square V4",
    slug: "duitnow-square-v4",
    category: "Payment",
    component: DuitNowSquareV4,
  },

  {
    name: "Touch N Go Square",
    slug: "tng-square",
    category: "Wallet",
    component: TngSquare,
  },
  {
    name: "Touch N Go Circle",
    slug: "tng-circle",
    category: "Wallet",
    component: TngCirle,
  },
] as const;
