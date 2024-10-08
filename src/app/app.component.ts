import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadMovies } from './store/movie.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'entertainment-web-app';

  constructor(private store: Store){}

  ngOnInit(): void {
    this.store.dispatch(loadMovies())
  }
}
