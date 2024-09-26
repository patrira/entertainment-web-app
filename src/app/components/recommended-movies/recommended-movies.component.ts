import { Component, OnInit } from '@angular/core'; 
import { Observable, of } from 'rxjs'; // Import 'of' for initializing
import { Store } from '@ngrx/store';
import { Movie } from '../../models/movie.model';
import { AppState } from '../../store/app.state';
import { selectRecommendedMovies } from '../../store/movie.selectors';

@Component({
  selector: 'app-recommended-movies',
  templateUrl: './recommended-movies.component.html',
  styleUrls: ['./recommended-movies.component.css'],
})
export class RecommendedMoviesComponent implements OnInit {
  recommendedMovies$: Observable<Movie[]> = of([]); // Initialize with an empty observable

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // Select recommended movies from the store
    this.recommendedMovies$ = this.store.select(selectRecommendedMovies);
  }
}
