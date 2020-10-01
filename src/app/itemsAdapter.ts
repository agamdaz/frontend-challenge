type ItemsList = { item: string, selected: boolean }[]

export const getAvailable = (items: ItemsList) => {
  let newItems: string[] = [];
  items.forEach(item => !item.selected && newItems.push(item.item));
  return newItems;
};

export const getSelected = (items: ItemsList) => {
  let newItems: string[] = [];
  items.forEach(item => item.selected && newItems.push(item.item));
  return newItems;
};
