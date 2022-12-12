import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import { sushiApi } from './sushiApi';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    [sushiApi.reducerPath]: sushiApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sushiApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
