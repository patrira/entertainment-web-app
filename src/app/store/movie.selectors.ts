import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MovieState } from './movie.reducer';
import { Movie } from '../models/movie.model';

// Get the movie state
export const selectMovieState = createFeatureSelector<MovieState>('movies');

// Select all movies from the state
export const selectAllMovies = createSelector(
  selectMovieState,
  (state: MovieState) => state.movies
);

// Select trending movies
export const selectTrendingMovies = createSelector(
  selectAllMovies,
  (movies: Movie[]) => movies.filter((movie: Movie) => movie.isTrending)
);

// Select recommended movies (which are not trending)
export const selectRecommendedMovies = createSelector(
  selectAllMovies,
  (movies: Movie[]) => movies.filter((movie: Movie) => !movie.isTrending)
);
