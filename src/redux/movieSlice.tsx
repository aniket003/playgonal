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
interface MovieResponse {
  page: {
    ["content-items"]: {
      content: Movie[];
    };
  };
}
interface inistate {
    movies:MovieResponse[],
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
      state.movies[0] = action.payload ;        
    });
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
    });
  },
});

export default movieSlice.reducer;