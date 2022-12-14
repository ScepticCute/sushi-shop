import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ISushi } from '../../models/ISushi';

export interface ICartState {
  sushi: ISushi[] | [];
  sum: number;
}

const initialState: ICartState = {
  sushi: [],
  sum: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ISushi>) {
      state.sushi = [...state.sushi, action.payload];
    },
    removeFromCart(state, action: PayloadAction<ISushi>) {
      state.sushi.filter((item) => item.id !== action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
