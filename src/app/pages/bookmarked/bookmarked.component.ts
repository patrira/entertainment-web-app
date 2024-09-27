import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Movie } from '../../models/movie.model';
import { AppState } from '../../store/app.state';
import { selectBookmarkedMovies, selectBookmarkedTvSeries } from '../../store/movie.selectors';

@Component({
  selector: 'app-bookmarked',
  templateUrl: './bookmarked.component.html',
  styleUrls: ['./bookmarked.component.css'],
})
export class BookmarkedComponent implements OnInit {
  bookmarkedMovies$!: Observable<Movie[]>;  // Observable for bookmarked movies
  bookmarkedTvSeries$!: Observable<Movie[]>;  // Observable for bookmarked TV series
  filteredMovies: Movie[] = [];  // Filtered bookmarked movies
  filteredTvSeries: Movie[] = [];  // Filtered bookmarked TV series
  searchTerm: string = '';  // Search term from the search bar

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // Subscribe to bookmarked movies and apply search filtering
    this.store.select(selectBookmarkedMovies).subscribe((movies: Movie[]) => {
      this.filteredMovies = movies;  // Initialize with all bookmarked movies
    });

    // Subscribe to bookmarked TV series and apply search filtering
    this.store.select(selectBookmarkedTvSeries).subscribe((tvSeries: Movie[]) => {
      this.filteredTvSeries = tvSeries;  // Initialize with all bookmarked TV series
    });
  }

  // Handle search term change
  onSearchChange(searchTerm: string): void {
    this.searchTerm = searchTerm.toLowerCase();

    // Filter bookmarked movies based on search term
    this.store.select(selectBookmarkedMovies).subscribe((movies: Movie[]) => {
      this.filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(this.searchTerm)
      );
    });

    // Filter bookmarked TV series based on search term
    this.store.select(selectBookmarkedTvSeries).subscribe((tvSeries: Movie[]) => {
      this.filteredTvSeries = tvSeries.filter(tvSeries =>
        tvSeries.title.toLowerCase().includes(this.searchTerm)
      );
    });
  }
}
