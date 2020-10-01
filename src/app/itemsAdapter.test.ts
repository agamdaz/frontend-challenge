import { getAvailable, getSelected } from "./itemsAdapter";

describe('Items adapter', () => {
  it('getAvailable without filter', () => {
    expect(getAvailable([
      { item: "AnyFirstItem", selected: false },
      { item: "AnySecondItem", selected: true }
    ], '')).toEqual(["AnyFirstItem"]);
  });

  it('getAvailable with filter match', () => {
    expect(getAvailable([
      { item: "AnyFirstItem", selected: false },
      { item: "AnySecondItem", selected: true }
    ], 'firs')).toEqual(["AnyFirstItem"]);
  });

  it('getAvailable without filter match', () => {
    expect(getAvailable([
      { item: "AnyFirstItem", selected: false },
      { item: "AnySecondItem", selected: true }
    ], 'non')).toEqual([]);
  });

  it('getSelected', () => {
    expect(getSelected([
      { item: "AnyFirstItem", selected: false },
      { item: "AnySecondItem", selected: true }
    ])).toEqual(["AnySecondItem"]);
  });
});
