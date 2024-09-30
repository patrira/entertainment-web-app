import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
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
export class TrendingMoviesComponent implements OnInit, AfterViewInit {
  trendingMovies$!: Observable<Movie[]>; // Observable for trending movies

  @ViewChild('trendingMoviesContainer') trendingMoviesContainer!: ElementRef; // Reference for scrolling

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // Select trending movies from the store
    this.trendingMovies$ = this.store.select(selectTrendingMovies);
  }

  ngAfterViewInit(): void {
    // Start automatic scrolling after view is initialized
    this.autoScroll();
  }

  autoScroll(): void {
    const container = this.trendingMoviesContainer.nativeElement;
    setInterval(() => {
      container.scrollBy({ left: container.offsetWidth, behavior: 'smooth' });
    }, 3000); // Scroll every 3 seconds
  }
}
