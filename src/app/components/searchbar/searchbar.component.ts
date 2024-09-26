import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { AppState } from '../../store/app.state';
import { selectAllMovies } from '../../store/movie.selectors';
import { FilterMoviesPipe } from '../../pipes/filter-movies.pipe';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchBarComponent {
  searchTerm: string = '';
  allMovies$: Observable<Movie[]>;

  constructor(private store: Store<AppState>) {
    
    this.allMovies$ = this.store.select(selectAllMovies);
  }

  onSearchChange(event: any): void {
    this.searchTerm = event.target.value.toLowerCase();  
  }
}
