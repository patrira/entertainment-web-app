import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MovieState } from '../store/movie.reducer';
import { Movie } from '../models/movie.model';


export const selectMovieState = createFeatureSelector<MovieState>('movies');


export const selectAllMovies = createSelector(
  selectMovieState,
  (state: MovieState) => state.movies
);


export const selectTrendingMovies = createSelector(
  selectAllMovies,
  (movies: Movie[]) => movies.filter(movie => movie.isTrending)
);


export const selectRecommendedMovies = createSelector(
  selectAllMovies,
  (movies: Movie[]) => movies.filter(movie => !movie.isTrending)
);


export const selectMoviesByCategory = createSelector(
  selectAllMovies,
  (movies: Movie[]) => movies.filter(movie => movie.category === 'Movie')
);
export const selectTvSeries = createSelector(
  selectAllMovies,
  (movies: Movie[]) => movies.filter(movie => movie.category === 'TV Series')
);

export const selectBookmarkedMovies = createSelector(
  selectAllMovies,
  (movies: Movie[]) => movies.filter(movie => movie.isBookmarked && movie.category === 'Movie')
);


export const selectBookmarkedTvSeries = createSelector(
  selectAllMovies,
  (movies: Movie[]) => movies.filter(movie => movie.isBookmarked && movie.category === 'TV Series')
);
