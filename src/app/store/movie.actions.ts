import { createAction, props } from '@ngrx/store';
import { Movie } from '../models/movie.model';

// Action to load movies
export const loadMovies = createAction('[Movies API] Load Movies');

// Action to handle successful movie loading
export const loadMoviesSuccess = createAction(
  '[Movies API] Load Movies Success',
  props<{ movies: Movie[] }>()
);
