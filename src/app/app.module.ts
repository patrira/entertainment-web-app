import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvSeriesComponent } from './pages/tv-series/tv-series.component';
import { BookmarkedComponent } from './pages/bookmarked/bookmarked.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    SearchbarComponent,
    MoviesComponent,
    TvSeriesComponent,
    BookmarkedComponent,
    LoginComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule, // Import this for HTTP-related actions
  ],
  providers: [
    // Provide Firebase initialization here in the providers array
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),  // Initialize Firebase Auth
    provideFirestore(() => getFirestore()),  // Initialize Firestore if needed
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
