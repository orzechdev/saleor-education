export const developerPaths = ["setup"] as const;
export const developerSetupPaths = [
  "frontend",
  "get-saleor-data",
  "get-saleor-data-client",
] as const;
export const designerPaths = [] as const;
export const salespersonPaths = [] as const;

export type DeveloperPath = typeof developerPaths[number];
export type DeveloperSetupPath = typeof developerSetupPaths[number];
export type DesignerPath = typeof designerPaths[number];
export type SalespersonPath = typeof salespersonPaths[number];

export type MenuPath = DeveloperPath | DesignerPath | SalespersonPath;
export type SubMenuPath = DeveloperSetupPath;

export interface MenuItem<T, S> {
  path: T;
  label: string;
  children?: Array<{
    path: S;
    label: string;
  }>;
}

export const developerMenuItems: MenuItem<DeveloperPath, DeveloperSetupPath>[] =
  [
    {
      path: "setup",
      label: "Setup",
      children: [
        {
          path: "frontend",
          label: "Setup - Create frontend",
        },
        {
          path: "get-saleor-data",
          label: "Setup - Get data from Saleor",
        },
        {
          path: "get-saleor-data-client",
          label: "Setup - Get data from Saleor - GraphQL client",
        },
      ],
    },
  ];

export const designerMenuItems: MenuItem<DesignerPath, undefined>[] = [];

export const salespersonMenuItems: MenuItem<SalespersonPath, undefined>[] = [];
