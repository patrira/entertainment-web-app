import { Component, OnInit } from '@angular/core'; 
import { Observable } from 'rxjs';
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
  trendingMovies$!: Observable<Movie[]>;  // Removed default initialization

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // Select trending movies from the store
    this.trendingMovies$ = this.store.select(selectTrendingMovies);
  }
}
