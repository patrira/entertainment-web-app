import { createReducer, on } from '@ngrx/store';
import { loadMoviesSuccess } from './movie.actions';
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
    movies: movies as Movie[]  // Ensure type is Movie[]
  }))
);
