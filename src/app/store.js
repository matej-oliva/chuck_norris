import { configureStore } from '@reduxjs/toolkit';
import jokeReducer from '../features/joke';
import categoriesReducer from '../features/categoryList';

export const store = configureStore({
  reducer: {
    joke: jokeReducer,
    categories: categoriesReducer,
  },
  devTools: true,
});
