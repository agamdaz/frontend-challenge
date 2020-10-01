import reducer from './itemsSlice';

describe('reducers', () => {
  it('toggleItem', () => {
    expect(reducer(
      { value: [{ item: "AnyFirstItem", selected: false }, { item: "AnySecondItem", selected: false }]},
      { payload: "AnyFirstItem", type: "items/toggleItem" })
    ).toEqual({ value: [{ item: "AnyFirstItem", selected: true }, { item: "AnySecondItem", selected: false }] });
  });

  it('clearItems', () => {
    expect(reducer(
      { value: [{ item: "AnyFirstItem", selected: true }, { item: "AnySecondItem", selected: false }]},
      { payload: "AnyFirstItem", type: "items/clearItems" })
    ).toEqual({ value: [{ item: "AnyFirstItem", selected: false }, { item: "AnySecondItem", selected: false }] });
  });
});
