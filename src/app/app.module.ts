import { NgModule, isDevMode  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { movieReducer } from './store/movie.reducer';
import { MovieEffects } from './store/movie.effects';
import { MovieService } from './services/movie.service';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchBarComponent } from './components/searchbar/searchbar.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvSeriesComponent } from './pages/tv-series/tv-series.component';
import { BookmarkedComponent } from './pages/bookmarked/bookmarked.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { MainComponent } from './components/main/main.component';
import { TrendingMoviesComponent } from './components/trending-movies/trending-movies.component';
import { RecommendedMoviesComponent } from './components/recommended-movies/recommended-movies.component';
import { FilterMoviesPipe } from './pipes/filter-movies.pipe';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    SearchBarComponent,
    MoviesComponent,
    TvSeriesComponent,
    BookmarkedComponent,
    LoginComponent,
    SignUpComponent,
    MainComponent,
    TrendingMoviesComponent,
    RecommendedMoviesComponent,
    FilterMoviesPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule, 
    StoreModule.forRoot({ movies: movieReducer }),
    // Import the EffectsModule and register the MovieEffects
    EffectsModule.forRoot([MovieEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [
    // Provide Firebase initialization here in the providers array
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),  // Initialize Firebase Auth
    provideFirestore(() => getFirestore()),
    MovieService,  
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
