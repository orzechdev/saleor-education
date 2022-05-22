export type LocalStorageItem = "stateDeveloper";

export const getLocalStorageItem = <T extends {}>(
  item: LocalStorageItem
): T => {
  const localStorageItem = localStorage.getItem(item);
  return localStorageItem ? JSON.parse(localStorageItem) : {};
};

export const setLocalStorageItem = <T extends {}>(
  item: LocalStorageItem,
  state: T
) => {
  localStorage.setItem(item, JSON.stringify(state));
};
