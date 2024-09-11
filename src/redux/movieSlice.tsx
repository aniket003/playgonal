'use client'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk(
  "movie/getAll",
  async (page:number) => {
    console.log("data")

    const response = await fetch(`https://test.create.diagnal.com/data/page${page}.json`);
    const data = await response.json();
    console.log("data",data.page?.["content-items"]?.content)
    return data;
  }
);
interface inistate {
    movies:any,
    loading:boolean,
}
const initialState:inistate = {
  movies: [],
  loading: false,
};
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.movies.push(action.payload);        
    });
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
    });
  },
});

export default movieSlice.reducer;