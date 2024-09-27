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
  movies$!: Observable<Movie[]>;  // Observable to store movies
  filteredMovies: Movie[] = [];  // Array to store filtered movies
  searchTerm: string = '';  // Search term from the search bar

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // Get movies with the category 'Movie' from the store
    this.movies$ = this.store.select(selectMoviesByCategory);

    // Subscribe to movies and filter them based on search term
    this.movies$.subscribe((movies: Movie[]) => {
      this.filteredMovies = movies;
    });
  }

  // Filter movies based on search term
  onSearchChange(searchTerm: string): void {
    this.searchTerm = searchTerm.toLowerCase();
    this.movies$.subscribe((movies: Movie[]) => {
      this.filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(this.searchTerm)
      );
    });
  }
}
