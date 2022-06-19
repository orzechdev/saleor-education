export const developerPaths = ["setup", "build", "deploy"] as const;
export const developerSetupPaths = [
  "frontend",
  "get-saleor-data",
  "get-saleor-data-client",
] as const;
export const developerBuildPaths = [
  "support-channels",
  "support-languages",
  "home-showcase-page",
  "product-list-page",
  "product-page",
  "category-menu",
  "collection-menu",
  "cart-page",
  "checkout-page",
  "order-page",
] as const;
export const designerPaths = [] as const;
export const salespersonPaths = [] as const;

export type DeveloperPath = typeof developerPaths[number];
export type DeveloperSetupPath = typeof developerSetupPaths[number];
export type DeveloperBuildPath = typeof developerBuildPaths[number];
export type DesignerPath = typeof designerPaths[number];
export type SalespersonPath = typeof salespersonPaths[number];

export type MenuPath = DeveloperPath | DesignerPath | SalespersonPath;
export type SubMenuPath = DeveloperSetupPath | DeveloperBuildPath;

export interface MenuItem<T, S> {
  path: T;
  label: string;
  children?: Array<{
    path: S;
    label: string;
  }>;
}

export const developerMenuItems: MenuItem<
  DeveloperPath,
  DeveloperSetupPath | DeveloperBuildPath
>[] = [
  {
    path: "setup",
    label: "Setup",
    children: [
      {
        path: "frontend",
        label: "Create frontend",
      },
      {
        path: "get-saleor-data",
        label: "Get data from Saleor",
      },
      {
        path: "get-saleor-data-client",
        label: "Get data from Saleor - GraphQL client",
      },
    ],
  },
  {
    path: "build",
    label: "Build",
    children: [
      {
        path: "support-channels",
        label: "Support channels",
      },
      {
        path: "support-languages",
        label: "Support languages",
      },
      {
        path: "home-showcase-page",
        label: "Home showcase page",
      },
      {
        path: "product-list-page",
        label: "Product list page",
      },
      {
        path: "product-page",
        label: "Product page",
      },
      {
        path: "category-menu",
        label: "Category menu",
      },
      {
        path: "collection-menu",
        label: "Collection menu",
      },
      {
        path: "cart-page",
        label: "Cart page",
      },
      {
        path: "checkout-page",
        label: "Checkout page",
      },
      {
        path: "order-page",
        label: "Order page",
      },
    ],
  },
  {
    path: "deploy",
    label: "Deploy",
  },
];

export const designerMenuItems: MenuItem<DesignerPath, undefined>[] = [];

export const salespersonMenuItems: MenuItem<SalespersonPath, undefined>[] = [];
