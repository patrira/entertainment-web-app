import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MovieService } from '../services/movie.service';
import { loadMovies, loadMoviesSuccess } from './movie.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';  // For error handling

@Injectable()
export class MovieEffects {
  private actions$ = inject(Actions)  
  constructor(
    private movieService: MovieService
  ) {}

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMovies),  // Listen for the loadMovies action
      mergeMap(() =>
        this.movieService.getMovies().pipe(
          map((movies) => loadMoviesSuccess({ movies })),  // Dispatch success action with movies
          catchError((error) => {
            console.error('Error loading movies:', error);
            return of({ type: '[Movies API] Load Movies Failure' });  // Dispatch failure action
          })
        )
      )
    )
  );
}
