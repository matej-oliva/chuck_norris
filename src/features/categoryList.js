import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { categoryListRequest } from '../api/categoryListRequests';

const initialState = [];

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCategoryList.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const fetchCategoryList = createAsyncThunk('/categories', async () => {
  return categoryListRequest();
});

export const listOfCategories = (state) => state.categories;

export default categorySlice.reducer;
