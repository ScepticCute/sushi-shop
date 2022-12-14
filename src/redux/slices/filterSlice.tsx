import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IFilter {
  limit: number;
  sort: string;
  order?: string;
  page?: number;
  filter?: string;
}

const initialState: IFilter = {
  limit: 4,
  sort: 'rating',
  order: 'desc',
  page: 1,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    func(state, action: PayloadAction<number>) {
      state.limit = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { func } = filterSlice.actions;

export default filterSlice.reducer;
