import { Component } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchBarComponent {
  searchTerm: string = '';

  onSearchChange(event: any) {
    this.searchTerm = event.target.value;
    // Logic for handling search term input can be implemented here
  }
}
