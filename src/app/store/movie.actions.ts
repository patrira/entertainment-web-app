import { createAction, props } from '@ngrx/store';
import { Movie } from '../models/movie.model';


export const loadMovies = createAction('[Movies API] Load Movies');


export const loadMoviesSuccess = createAction(
  '[Movies API] Load Movies Success',
  props<{ movies: Movie[] }>()
);
