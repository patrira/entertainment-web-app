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
  trendingMovies$!: Observable<Movie[]>; 

  @ViewChild('trendingMoviesContainer') trendingMoviesContainer!: ElementRef; 

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    
    this.trendingMovies$ = this.store.select(selectTrendingMovies);
  }

  ngAfterViewInit(): void {
    
    this.autoScroll();
  }

  autoScroll(): void {
    const container = this.trendingMoviesContainer.nativeElement;
    setInterval(() => {
      container.scrollBy({ left: container.offsetWidth, behavior: 'smooth' });
    }, 3000); 
  }
}
