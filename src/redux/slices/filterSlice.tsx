import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IFilterState {
  value: number;
}

const initialState: IFilterState = {
  value: 0,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    func(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { func } = filterSlice.actions;

export default filterSlice.reducer;
