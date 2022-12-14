import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IFilter {
  limit?: number;
  sort?: string;
  order?: 'desc' | 'asc';
  page?: number;
  filters?: string[] | []; // подумать над логикой
}

const initialState: IFilter = {
  limit: 12,
  sort: 'rating',
  order: 'desc',
  page: 1,
  filters: [],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilters(state, action: PayloadAction<IFilter>) {
      state.limit = action.payload.limit;
      state.filters = action.payload.filters;
    },
    setSort(state, action: PayloadAction<IFilter>) {
      state.order = action.payload.order;
      state.sort = action.payload.sort;
    },
    setPage(state, action: PayloadAction<IFilter>) {
      state.page = action.payload.page;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFilters } = filterSlice.actions;

export default filterSlice.reducer;
