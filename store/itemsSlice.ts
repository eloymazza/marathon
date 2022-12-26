import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';

// Type for our state
export interface ItemsState {
  items: string[];
}

// Initial state
const initialState: ItemsState = {
  items: ['a'],
};

// Actual Slice
export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setItems } = itemsSlice.actions;

export const selectItemState = (state: AppState) => state.items;

export default itemsSlice.reducer;
