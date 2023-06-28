import { configureStore } from '@reduxjs/toolkit'
import homeslice from './HomeSlice'
export const store = configureStore({
  reducer: {
    home: homeslice,
  },
})