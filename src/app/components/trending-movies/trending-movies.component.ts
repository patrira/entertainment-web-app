import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { Movie } from '../../models/movie.model';
import { AppState } from '../../store/app.state';
import { selectTrendingMovies } from '../../store/movie.selectors';

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.css'],
})
export class TrendingMoviesComponent implements OnInit {
  trendingMovies$: Observable<Movie[]> = of([]);  // Initialize with empty observable

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.trendingMovies$ = this.store.select(selectTrendingMovies);
  }
}
