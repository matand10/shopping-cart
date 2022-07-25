import { configureStore } from '@reduxjs/toolkit';
import { toyReducer } from './item/toy-reducer';

export const rootReducer = configureStore({
  reducer: {
    toyModule: toyReducer
  },
});
