import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private moviesUrl = 'assets/data.json';  

  constructor(private http: HttpClient) {}

  // Method to get movies (should return an observable)
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl);  // Ensure this returns the observable
  }
}
