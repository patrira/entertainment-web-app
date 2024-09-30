import { createReducer, on } from '@ngrx/store';
import { loadMoviesSuccess, toggleBookmark } from './movie.actions';
import { Movie } from '../models/movie.model';

export interface MovieState {
  trending: any;
  movies: Movie[];
}

export const initialState: MovieState = {
  movies: [],
  trending: undefined
};

export const movieReducer = createReducer(
  initialState,
  on(loadMoviesSuccess, (state, { movies }) => ({
    ...state,
    movies: movies as Movie[]  
  })),
  on(toggleBookmark, (state, { movieId }) => ({
    ...state,
    movies: state.movies.map(movie =>
      movie.id === Number(movieId)  // Convert movieId to number
        ? { ...movie, isBookmarked: !movie.isBookmarked }
        : movie
    )
  }))
  
);
