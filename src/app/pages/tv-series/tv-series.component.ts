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
  tvSeries$!: Observable<Movie[]>;
  filteredTvSeries: Movie[] = [];
  searchTerm: string = '';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.tvSeries$ = this.store.select(selectTvSeries);
    this.tvSeries$.subscribe((tvSeries: Movie[]) => {
      this.filteredTvSeries = tvSeries;
    });
  }

  onSearchChange(searchTerm: string): void {  
    this.searchTerm = searchTerm.toLowerCase();
    this.tvSeries$.subscribe((tvSeries: Movie[]) => {
      this.filteredTvSeries = tvSeries.filter(tv =>
        tv.title.toLowerCase().includes(this.searchTerm)
      );
    });
  }
}
