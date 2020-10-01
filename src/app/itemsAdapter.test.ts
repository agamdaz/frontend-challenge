import { getAvailable, getSelected } from "./itemsAdapter";

describe('Items adapter', () => {
  it('getAvailable', () => {
    expect(getAvailable([
      { item: "AnyFirstItem", selected: false },
      { item: "AnySecondItem", selected: true }
    ])).toEqual(["AnyFirstItem"]);
  });

  it('getSelected', () => {
    expect(getSelected([
      { item: "AnyFirstItem", selected: false },
      { item: "AnySecondItem", selected: true }
    ])).toEqual(["AnySecondItem"]);
  });
});
