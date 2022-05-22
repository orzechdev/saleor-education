export const developerPaths = ["chapter-1", "chapter-2", "chapter-3"] as const;
export const designerPaths = ["chapter-1", "chapter-2", "chapter-3"] as const;
export const salespersonPaths = [
  "chapter-1",
  "chapter-2",
  "chapter-3",
] as const;

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
    path: "chapter-1",
    label: "Chapter 1",
  },
  {
    path: "chapter-2",
    label: "Chapter 2",
  },
  {
    path: "chapter-3",
    label: "Chapter 3",
  },
];

export const designerMenuItems: MenuItem<DesignerPath>[] = [
  {
    path: "chapter-1",
    label: "Chapter 1",
  },
  {
    path: "chapter-2",
    label: "Chapter 2",
  },
  {
    path: "chapter-3",
    label: "Chapter 3",
  },
];

export const salespersonMenuItems: MenuItem<SalespersonPath>[] = [
  {
    path: "chapter-1",
    label: "Chapter 1",
  },
  {
    path: "chapter-2",
    label: "Chapter 2",
  },
  {
    path: "chapter-3",
    label: "Chapter 3",
  },
];
