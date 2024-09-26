import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private dataUrl = 'assets/data.json';  

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http.get(this.dataUrl);
  }

  getTrendingMovies(): Observable<any> {
    return this.getMovies().pipe(
      map(movies => movies.filter(movie => movie.isTrending))
    );
  }

  getBookmarkedMovies(): Observable<any> {
    return this.getMovies().pipe(
      map(movies => movies.filter(movie => movie.isBookmarked))
    );
  }

  getMoviesByCategory(category: string): Observable<any> {
    return this.getMovies().pipe(
      map(movies => movies.filter(movie => movie.category === category))
    );
  }
}
