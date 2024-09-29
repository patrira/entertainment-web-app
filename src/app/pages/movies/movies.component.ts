import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Movie } from '../../models/movie.model';
import { AppState } from '../../store/app.state';
import { selectMoviesByCategory } from '../../store/movie.selectors';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies$!: Observable<Movie[]>;
  filteredMovies: Movie[] = [];
  searchTerm: string = '';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.movies$ = this.store.select(selectMoviesByCategory);
    this.movies$.subscribe((movies: Movie[]) => {
      this.filteredMovies = movies;
    });
  }

  onSearchChange(searchTerm: string): void {  // Accept string as search term
    this.searchTerm = searchTerm.toLowerCase();
    this.movies$.subscribe((movies: Movie[]) => {
      this.filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(this.searchTerm)
      );
    });
  }
}
