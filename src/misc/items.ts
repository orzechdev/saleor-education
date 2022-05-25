export const developerPaths = ["setup"] as const;
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
];

export const designerMenuItems: MenuItem<DesignerPath>[] = [];

export const salespersonMenuItems: MenuItem<SalespersonPath>[] = [];
