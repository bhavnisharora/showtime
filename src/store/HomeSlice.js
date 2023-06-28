import { createSlice } from '@reduxjs/toolkit'

export const homeslice = createSlice({
  name: 'home',
  initialState: {
    url: {},
    genres: {}
  },
  reducers: {
    getapiconfiguration: (state, action) => {
      state.url = action.payload;
    },
    getgenres: (state, action) => {
      state.genres = action.payload;

    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = homeslice.actions
export const {getapiconfiguration, getgenres} = homeslice.actions;
export default homeslice.reducer;