export const developerPaths = ["setup", "setup-frontend"] as const;
export const designerPaths = [] as const;
export const salespersonPaths = [] as const;

export type DeveloperPath = typeof developerPaths[number];
export type DesignerPath = typeof designerPaths[number];
export type SalespersonPath = typeof salespersonPaths[number];

export type MenuPath = DeveloperPath | DesignerPath | SalespersonPath;

export interface MenuItem<T> {
  path: T;
  label: string;
}

export const developerMenuItems: MenuItem<DeveloperPath>[] = [
  {
    path: "setup",
    label: "Setup",
  },
  {
    path: "setup-frontend",
    label: "Setup frontend",
  },
];

export const designerMenuItems: MenuItem<DesignerPath>[] = [];

export const salespersonMenuItems: MenuItem<SalespersonPath>[] = [];
