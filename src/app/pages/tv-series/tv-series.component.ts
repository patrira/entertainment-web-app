import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Movie } from '../../models/movie.model';
import { AppState } from '../../store/app.state';
import { selectTvSeries } from '../../store/movie.selectors';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.css'],
})
export class TvSeriesComponent implements OnInit {
  tvSeries$!: Observable<Movie[]>;  // Observable to store TV series
  filteredTvSeries: Movie[] = [];  // Array to store filtered TV series
  searchTerm: string = '';  // Search term from the search bar

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // Get TV series from the store
    this.tvSeries$ = this.store.select(selectTvSeries);

    // Subscribe to TV series and filter them based on search term
    this.tvSeries$.subscribe((tvSeries: Movie[]) => {
      this.filteredTvSeries = tvSeries;
    });
  }

  // Filter TV series based on search term
  onSearchChange(searchTerm: string): void {
    this.searchTerm = searchTerm.toLowerCase();
    this.tvSeries$.subscribe((tvSeries: Movie[]) => {
      this.filteredTvSeries = tvSeries.filter(tvSeries =>
        tvSeries.title.toLowerCase().includes(this.searchTerm)
      );
    });
  }
}
