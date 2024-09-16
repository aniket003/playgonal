'use client'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk(
  "movie/getAll",
  async (page:number) => {
    const response = await fetch(`https://test.create.diagnal.com/data/page${page}.json`);
    const data = await response.json();
    return data;
  }
);
interface Movie {
  "poster-image": string;
  "name": string;
}
interface inistate {
    movies:Movie[],
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
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = [...state.movies,...action.payload?.page?.["content-items"]?.content];
    });
  },
});

export default movieSlice.reducer;