import axios from "axios";
import {
  getAllMovieReducer,
  getDetailMovieReducer,
  getSearchReducer,
} from "../reducers/movieReducer";

export const getAllMovie = () => async (disptach) => {
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=dfda61e62b2db392ce66bedf62adc71c&language=en-US&page=1"
    );
    disptach(getAllMovieReducer(data));
  } catch (error) {
    throw error;
  }
};

export const getDetailMovie = (id) => async (disptach) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=dfda61e62b2db392ce66bedf62adc71c&language=en-US`
    );
    disptach(getDetailMovieReducer(data));
  } catch (error) {
    throw error;
  }
};

export const getSearch = (q) => async (disptach) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=dfda61e62b2db392ce66bedf62adc71c&query=${q}`
    );
    disptach(getSearchReducer(data));
  } catch (error) {
    return error;
  }
};
