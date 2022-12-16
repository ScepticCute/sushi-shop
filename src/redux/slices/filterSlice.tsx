import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IFilter, sortType } from '../../models/IFilter';

const initialState: IFilter = {
  sort: {
    name: 'название',
    sort: 'title',
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setSort(state, action: PayloadAction<sortType>) {
      state.sort = action.payload;
    },
    setOrder(state, action: PayloadAction<'desc' | 'asc'>) {
      state.order = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setCategory(state, action: PayloadAction<string>) {
      if(state.category === action.payload) { 
        state.category = ''
      } else
      state.category = action.payload;
      
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFilter, setPage, setSort, setOrder, setCategory } = filterSlice.actions;

export default filterSlice.reducer;
