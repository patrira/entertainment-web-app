import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchBarComponent {
  @Input() allMovies: Movie[] = [];  // Input to receive movies from the parent component
  searchTerm: string = '';

  @Output() searchTermChange = new EventEmitter<string>();

  // Emit the search term when it changes
  onSearchChange(event: any): void {
    this.searchTerm = event.target.value;
    this.searchTermChange.emit(this.searchTerm);  // Emit search term to parent
  }
}
