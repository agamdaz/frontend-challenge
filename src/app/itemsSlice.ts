import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    value: [
      { item: 'Enterprise', selected: false },
      { item: 'Atlantis', selected: false },
      { item: 'Columbia', selected: false },
      { item: 'Endeavour', selected: false },
    ],
  },
  reducers: {
    toggleItem: (state, action: PayloadAction<string>) => {
      state.value = state.value.map(item =>
        item.item === action.payload ? {...item, selected: !item.selected} : item);
    },
    clearItems: (state) => {
      state.value.forEach(item => item.selected = false);
    }
  }
});

export const { toggleItem, clearItems } = itemsSlice.actions;
export const items = (state: RootState) => state.items.value;

export default itemsSlice.reducer;
