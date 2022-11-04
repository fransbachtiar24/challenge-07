import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  results: [],
  detail: null,
  search: [],
};

const movieSlicer = createSlice({
  name: "result",
  initialState,
  reducers: {
    getAllMovieReducer: (state, action) => {
      state.results = action.payload;
    },
    getDetailMovieReducer: (state, action) => {
      state.detail = action.payload;
    },
    getSearchReducer: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { getAllMovieReducer, getDetailMovieReducer, getSearchReducer } =
  movieSlicer.actions;
export default movieSlicer.reducer;
