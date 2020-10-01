type ItemsList = { item: string, selected: boolean }[]

export const getAvailable = (items: ItemsList, filter: string) => {
  let newItems: string[] = [];
  items.forEach(item => !item.selected && newItems.push(item.item));

  if (filter) {
    newItems = newItems.filter(item => item.toLowerCase().includes(filter.toLowerCase()))
  }

  return newItems;
};

export const getSelected = (items: ItemsList) => {
  let newItems: string[] = [];
  items.forEach(item => item.selected && newItems.push(item.item));
  return newItems;
};
