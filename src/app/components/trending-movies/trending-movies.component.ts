import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'; 
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
  trendingMovies$!: Observable<Movie[]>; // Observable for trending movies

  @ViewChild('trendingMoviesContainer') trendingMoviesContainer!: ElementRef; // Reference to the container for scrolling
trendingMovies: any;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // Select trending movies from the store
    this.trendingMovies$ = this.store.select(selectTrendingMovies);

    // Start automatic scrolling every 3 seconds
    this.autoScroll();
  }

  autoScroll(): void {
    const container = this.trendingMoviesContainer.nativeElement;
    setInterval(() => {
      container.scrollBy({ left: container.offsetWidth, behavior: 'smooth' });
    }, 3000); // Adjust the interval duration as needed (3000ms = 3 seconds)
  }
}
