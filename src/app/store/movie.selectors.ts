import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MovieState } from '../store/movie.reducer';
import { Movie } from '../models/movie.model';

// Get the movie state
export const selectMovieState = createFeatureSelector<MovieState>('movies');

// Select all movies
export const selectAllMovies = createSelector(
  selectMovieState,
  (state: MovieState) => state.movies
);

// Select trending movies
export const selectTrendingMovies = createSelector(
  selectAllMovies,
  (movies: Movie[]) => movies.filter(movie => movie.isTrending)
);

// Select recommended movies
export const selectRecommendedMovies = createSelector(
  selectAllMovies,
  (movies: Movie[]) => movies.filter(movie => !movie.isTrending)
);

// Select movies where the category is 'Movie'
export const selectMoviesByCategory = createSelector(
  selectAllMovies,
  (movies: Movie[]) => movies.filter(movie => movie.category === 'Movie')
);
export const selectTvSeries = createSelector(
  selectAllMovies,
  (movies: Movie[]) => movies.filter(movie => movie.category === 'TV Series')
);
// Select bookmarked movies
export const selectBookmarkedMovies = createSelector(
  selectAllMovies,
  (movies: Movie[]) => movies.filter(movie => movie.isBookmarked && movie.category === 'Movie')
);

// Select bookmarked TV series
export const selectBookmarkedTvSeries = createSelector(
  selectAllMovies,
  (movies: Movie[]) => movies.filter(movie => movie.isBookmarked && movie.category === 'TV Series')
);
