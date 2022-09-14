import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const dishsSlice = createSlice({
  name: 'dishs',
  initialState: {
    value: []
  },
  reducers: {
    setDishs: (state, action) => {
      state.value = action.payload;
    },
  },
  
})

// Action creators are generated for each case reducer function
export const { setDishs } = dishsSlice.actions

export default dishsSlice.reducer

