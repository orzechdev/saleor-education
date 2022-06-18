import { MenuItem, MenuPath, SubMenuPath } from "../../misc/items";

export const getDefaultMenuItem = (
  locationPath: string,
  mainPath: string,
  menuItems: MenuItem<MenuPath, SubMenuPath | undefined>[]
): MenuPath | undefined =>
  menuItems.find(({ path }) => {
    const pathUrl = `/${mainPath}/${path}`;

    return locationPath.startsWith(pathUrl);
  })?.path;
