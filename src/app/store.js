import { configureStore } from '@reduxjs/toolkit';
import jokeReducer from '../features/joke';
import categoriesReducer from '../features/categoryList';
import thunk from 'redux-thunk';

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: {
      joke: jokeReducer,
      categories: categoriesReducer,
    },
    preloadedState,
    devTools: true,
    middleware: [thunk],
  });
};
