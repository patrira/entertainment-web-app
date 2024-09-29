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
  bookmarkedMovies$!: Observable<Movie[]>;
  bookmarkedTvSeries$!: Observable<Movie[]>;
  filteredMovies: Movie[] = [];
  filteredTvSeries: Movie[] = [];
  searchTerm: string = '';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(selectBookmarkedMovies).subscribe((movies: Movie[]) => {
      this.filteredMovies = movies;
    });

    this.store.select(selectBookmarkedTvSeries).subscribe((tvSeries: Movie[]) => {
      this.filteredTvSeries = tvSeries;
    });
  }

  onSearchChange(searchTerm: string): void {  // Accept string as search term
    this.searchTerm = searchTerm.toLowerCase();

    this.filteredMovies = this.filteredMovies.filter(movie =>
      movie.title.toLowerCase().includes(this.searchTerm)
    );

    this.filteredTvSeries = this.filteredTvSeries.filter(tvSeries =>
      tvSeries.title.toLowerCase().includes(this.searchTerm)
    );
  }
}
