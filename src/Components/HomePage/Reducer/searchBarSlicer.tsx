import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'searchBar',
  initialState: {
    value: false
  },
  reducers: {
    setSearchBar: (state, action) => {
      state.value = action.payload;
    },
  },
  
})

// Action creators are generated for each case reducer function
export const { setSearchBar } = searchSlice.actions

export default searchSlice.reducer

