import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

import { loadMovies } from '../../store/movie.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  store: any;
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.store.dispatch(loadMovies());
  }
}
