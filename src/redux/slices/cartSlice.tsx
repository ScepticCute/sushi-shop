import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ISushi } from '../../models/ISushi';

export interface ICartState {
  sushi: ISushi[] | [];
  sum: number;
  isOpen: boolean;
}

const initialState: ICartState = {
  sushi: [],
  sum: 0,
  isOpen: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ISushi>) {
      state.sushi = [...state.sushi, action.payload];
      state.sum += Number(action.payload.price);
    },
    removeFromCartOne(state, action: PayloadAction<ISushi>) {
      state.sum -= action.payload.price;

      for (let i = 0; i < state.sushi.length; i++) {
        if (state.sushi[i].id === action.payload.id) {
          state.sushi.splice(i, 1);
          break;
        }
      }
    },
    removeFromCartAll(state, action: PayloadAction<ISushi>) {
      state.sushi.forEach((item) => {
        if (item.id === action.payload.id) {
          state.sum -= item.price;
        }
      });
      state.sushi = state.sushi.filter((item) => item.id !== action.payload.id);

    },
    openCloseCart(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { addToCart, removeFromCartAll, openCloseCart, removeFromCartOne } = cartSlice.actions;

export default cartSlice.reducer;
